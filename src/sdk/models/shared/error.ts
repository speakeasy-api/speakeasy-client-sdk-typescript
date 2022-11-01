import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  Message: string;
  @Metadata({ data: "json, name=status_code" })
  StatusCode: number;
  
}



