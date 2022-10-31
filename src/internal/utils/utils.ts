import "reflect-metadata";
import axios, { AxiosInstance } from "axios";
import {
  ppMetadataKey,
  ParamDecorator,
  ParsePathParamDecorator,
  GetSimplePathParams,
} from "./pathparams";

export function Metadata(anns: string) {
  const annsArr = anns.split(", ");
  return Reflect.metadata(annsArr[0], annsArr[1]);
}

export function ReplaceParameters(
  stringWithParams: string,
  params: Map<string, string>
): string {
  let res: string = stringWithParams;
  params.forEach((value, key) => {
    const match: string = "{" + key + "}";
    res = res.replaceAll(match, value);
  });
  return res;
}

export function GenerateURL(
  serverURL: string,
  path: string,
  pathParams: any
): string {
  let url: string = serverURL.replace(/\/$/, "") + path;
  const parsedParameters: Map<string, string> = new Map<string, string>();
  const fieldNames: string[] = Object.getOwnPropertyNames(pathParams);
  fieldNames.forEach((fname) => {
    const ppAnn: string = Reflect.getMetadata(ppMetadataKey, pathParams, fname);
    if (ppAnn == null) return;
    const ppDecorator: ParamDecorator = ParsePathParamDecorator(ppAnn, fname);
    if (ppDecorator == null) return;
    switch (ppDecorator.Style) {
      case "simple":
        const simpleParams: Map<string, string> = GetSimplePathParams(
          ppDecorator.ParamName,
          pathParams[fname]
        );
        simpleParams.forEach((value, key) => {
          parsedParameters.set(key, value);
        });
    }
  });
  return ReplaceParameters(url, parsedParameters);
}