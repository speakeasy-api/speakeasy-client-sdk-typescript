export const ppMetadataKey = "pathParam";

export function ParsePathParamDecorator(
  ppAnn: string,
  fName: string
): ParamDecorator {
  // style=simple;explode=false;name=apiID
  let ppDecorator: ParamDecorator = new ParamDecorator(
    "simple",
    false,
    fName.toLowerCase()
  );
  ppAnn.split(";").forEach((ppAnnPart) => {
    const [ppKey, ppVal]: string[] = ppAnnPart.split("=");
    switch (ppKey) {
      case "style":
        ppDecorator.Style = ppVal;
        break;
      case "explode":
        ppDecorator.Explode = ppVal == "true";
        break;
      case "name":
        ppDecorator.ParamName = ppVal;
    }
  });
  return ppDecorator;
}

export function GetSimplePathParams(
    paramName: string,
    paramValue: any,
    explode: boolean
): Map<string, string> {
  const pathParams: Map<string, string> = new Map<string, string>();
  const ppVals: string[] = [];
  if (Array.isArray(paramValue)) {
    paramValue.forEach((param) => {
      ppVals.push(String(param));
    });
    pathParams.set(paramName, ppVals.join(","));
  } else if (paramValue instanceof Object) {
    Object.getOwnPropertyNames(paramValue).forEach((paramName: string) => {
      if (explode) ppVals.push(`${paramName}=${paramValue[paramName]}`);
      else ppVals.push(`${paramName},${paramValue[paramName]}`);
    });
    pathParams.set(paramName, ppVals.join(","));
  } else {
    pathParams.set(paramName, String(paramValue));
  }
  return pathParams;
}

export class ParamDecorator {
  Style: string;
  Explode: boolean;
  ParamName: string;
  Serialization?: string;
  constructor(
    Style: string,
    Explode: boolean,
    ParamName: string,
    Serialization?: string
  ) {
    this.Style = Style;
    this.Explode = Explode;
    this.ParamName = ParamName;
    this.Serialization = Serialization;
  }
}