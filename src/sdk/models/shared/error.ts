import { Metadata } from "../../../internal/utils/utils";

export class Error {
  @Metadata("json, name=message")
  Message: string;
  @Metadata("json, name=status_code")
  StatusCode: number;
}
