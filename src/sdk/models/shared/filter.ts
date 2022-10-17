import { Metadata } from "../../../internal/utils/utils";

export class Filter {
  @Metadata("json, name=key")
  Key: string;
  @Metadata("json, name=operator")
  Operator: string;
  @Metadata("json, name=value")
  Value: string;

  constructor(Key: string, Operator: string, Value: string) {
    this.Key = Key;
    this.Operator = Operator;
    this.Value = Value;
  }
}
