import "reflect-metadata";

const ppMetadataKey = "pathParam";


export function Metadata(anns: string) {
    let annsArr = anns.split(", ");
    return Reflect.metadata(annsArr[0], annsArr[1]);
}

export function ReplaceParameters(stringWithParams: string, params: Map<string, string>): string {
     // replace all {var} occurrences in URL with value of params[var]
    return "";
}

export function GenerateURL(serverURL: string, path: string, pathParams: any): string {
    let url: string = serverURL.replace(/\/$/, "");
    let parsedParameters: Map<string, string> = new Map<string, string>();
    const fieldNames: string[] = Object.getOwnPropertyNames(pathParams);
    fieldNames.forEach((fname) => {
        const ppAnn: string = Reflect.getMetadata(ppMetadataKey, pathParams, fname);
        const ppDecorator: ParamDecorator = ParsePathParamDecorator(ppAnn, fname);
        if (ppDecorator == null) {
            return;
        }
        switch (ppDecorator.Style) {
            case "simple":
                const simpleParams: Map<string, string> = GetSimplePathParams(ppDecorator.ParamName, pathParams[fname]);
                simpleParams.forEach((value, key) => {
                    parsedParameters.set(key, value)
                });
        }
    })
    return ReplaceParameters(url, parsedParameters);
}

function ParsePathParamDecorator(ppAnn: string, fName: string): ParamDecorator {
    // style=simple;explode=false;name=apiID
    let ppDecorator: ParamDecorator = new ParamDecorator("simple", false, fName.toLowerCase());
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

function GetSimplePathParams(paramName: string, paramValue: any): Map<string, string> {
    let pathParams: Map<string, string> = new Map<string, string>();
    if (typeof paramValue === 'string')
        pathParams.set(paramName, paramValue);
    else
        pathParams.set(paramName, JSON.stringify(paramValue));
    return pathParams;
}

class ParamDecorator {
    Style: string
    Explode: boolean
    ParamName: string
    Serialization?: string
    constructor(Style: string, Explode: boolean, ParamName: string, Serialization?: string) {
        this.Style = Style;
        this.Explode = Explode;
        this.ParamName = ParamName;
        this.Serialization = Serialization;
    }
};