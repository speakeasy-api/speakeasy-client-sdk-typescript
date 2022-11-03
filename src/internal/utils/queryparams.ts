import { ParamsSerializerOptions } from "axios";
import qs from "qs";
import { ParamDecorator } from "./pathparams";
import { ParseParamDecorator } from "./utils";

export const qpMetadataKey = "queryParam";

export function GetQueryParamSerializer(
    queryParams: any
): ParamsSerializerOptions {
  if (queryParams == null) return { encode: FormSerializerExplode };
  const fieldNames: string[] = Object.getOwnPropertyNames(queryParams);
  fieldNames.forEach((fname) => {
    const qpAnn: string = Reflect.getMetadata(
        qpMetadataKey,
        queryParams,
        fname
    );
    if (qpAnn == null) return { encode: (params: unknown) => "" };
    const qpDecorator: ParamDecorator = ParseParamDecorator(
        qpAnn,
        fname,
        "form",
        true
    );
    if (qpDecorator == null) return;
    if (qpDecorator.Serialization === "json")
      return {
        encode: (params: unknown) => {
          return JSON.stringify(params);
        },
      };
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
        default:
          // go to next query parameter field, assume first implemented serializer will serialize all query parameters for this request
          return;
      }
    }
  });
  return { encode: FormSerializerExplode };
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
