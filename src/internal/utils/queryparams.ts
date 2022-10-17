import { ParamsSerializerOptions } from "axios";
import qs from "qs";
import { ParamDecorator } from "./pathparams";

export const qpMetadataKey = "queryParam";

export function GetQueryParamSerializer(
  queryParams: any
): ParamsSerializerOptions | undefined {
  const fieldNames: string[] = Object.getOwnPropertyNames(queryParams);
  fieldNames.forEach((fname) => {
    const qpAnn: string = Reflect.getMetadata(
      qpMetadataKey,
      queryParams,
      fname
    );
    if (qpAnn == null) return;
    const qpDecorator: ParamDecorator = ParseQueryParamDecorator(qpAnn, fname);
    if (qpDecorator == null) return;
    if (qpDecorator.Serialization === "json") return null;
    else {
      switch (qpDecorator.Style) {
        case "deepObject":
          return {
            encode: (params: unknown) => {
              return qs.stringify(params, { arrayFormat: "repeat" });
            },
          };
        case "form":
          if (qpDecorator.Explode) {
            return {
              encode: FormSerializerExplode,
            };
          } else {
            return {
              encode: FormSerializer,
            };
          }
        case "default":
          // go to next query parameter field, assume first implemented serializer will serialize all query parameters for this request
          return;
      }
    }
  });
  return undefined;
}

function FormSerializer(params: unknown): string {
  const query: string[] = [];
  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (value !== Object(value)) query.push(`${key}=${value}`);
    else if (Array.isArray(value)) {
      const values: string = value.join(",");
      query.push(`${key}=${values}`);
    } else {
      const values: string = Object.entries(Object.assign({}, value))
        .map(([objKey, objValue]) => `${objKey},${objValue}`)
        .join(",");
      query.push(`${key}=${values}`);
    }
  });
  return query.join("&");
}

function FormSerializerExplode(params: unknown): string {
  const query: string[] = [];
  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (value !== Object(value)) query.push(`${key}=${value}`);
    else if (Array.isArray(value)) {
      query.push(value.map((aValue) => `${key}=${aValue}`).join("&"));
    } else
      query.push(
        Object.entries(Object.assign({}, value))
          .map(([objKey, objValue]) => `${objKey}=${objValue}`)
          .join("&")
      );
  });
  return query.join("&");
}

function ParseQueryParamDecorator(
  qpAnn: string,
  fName: string
): ParamDecorator {
  // style=simple;explode=false;name=apiID
  const qpDecorator: ParamDecorator = new ParamDecorator(
    "form",
    true,
    fName.toLowerCase()
  );
  qpAnn.split(";").forEach((qpAnnPart) => {
    const [qpKey, qpVal]: string[] = qpAnnPart.split("=");
    switch (qpKey) {
      case "style":
        qpDecorator.Style = qpVal;
        break;
      case "explode":
        qpDecorator.Explode = qpVal == "true";
        break;
      case "name":
        qpDecorator.ParamName = qpVal;
        break;
      case "serialization":
        qpDecorator.Serialization = qpVal;
    }
  });
  return qpDecorator;
}
