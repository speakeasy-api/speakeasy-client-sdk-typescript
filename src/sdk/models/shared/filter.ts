import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=operator" })
  operator: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
