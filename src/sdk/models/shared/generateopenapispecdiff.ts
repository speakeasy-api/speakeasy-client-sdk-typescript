import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateOpenApiSpecDiff extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_schema" })
  currentSchema: string;

  @Metadata({ data: "json, name=new_schema" })
  newSchema: string;
}
