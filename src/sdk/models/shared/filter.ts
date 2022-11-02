import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  Key: string;

  @Metadata({ data: "json, name=operator" })
  Operator: string;

  @Metadata({ data: "json, name=value" })
  Value: string;
}
