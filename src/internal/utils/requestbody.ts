const requestMetadataKey = "request";

export function SerializeRequestBody(request: any): [string, unknown] {
  const fieldNames: string[] = Object.getOwnPropertyNames(request);
  let [mediaType, requestBody]: [string, unknown] = ["", ""];
  fieldNames.forEach((fname) => {
    const requestAnn: string = Reflect.getMetadata(
      requestMetadataKey,
      request,
      fname
    );
    if (requestAnn == null) return;
    const requestDecorator: RequestDecorator =
      ParseRequestDecorator(requestAnn);
    switch (requestDecorator.MediaType) {
      case "multipart/form-data":
      case "multipart/mixed":
        [mediaType, requestBody] = [
          requestDecorator.MediaType,
          EncodeMultipartFormData(request[fname]),
        ];
        break;
      case "application/json":
      case "text/json":
      default:
        [mediaType, requestBody] = [requestDecorator.MediaType, request[fname]];
    }
  });
  return [mediaType, requestBody];
}

function ParseRequestDecorator(requestAnn: string): RequestDecorator {
  // example "media_type=multipart/form-data"
  const requestDecorator: RequestDecorator = new RequestDecorator(
    "application/octet-stream"
  );
  const [mediaTypeKey, mediaTypeVal]: string[] = requestAnn.split("=");
  if (mediaTypeKey === "media_type") requestDecorator.MediaType = mediaTypeVal;
  return requestDecorator;
}

class RequestDecorator {
  MediaType: string;
  constructor(MediaType: string) {
    this.MediaType = MediaType;
  }
}
