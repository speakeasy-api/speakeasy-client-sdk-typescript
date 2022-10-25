import { Metadata } from "../../../internal/utils/utils";

export class GenerateOpenApiSpecDiff {
  @Metadata("json, name=current_schema")
  CurrentSchema: string;
  @Metadata("json, name=new_schema")
  NewSchema: string;
}
