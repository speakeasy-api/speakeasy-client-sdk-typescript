import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export class GenerateOpenApiSpecDiff extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_schema" })
  CurrentSchema: string;
  @Metadata({ data: "json, name=new_schema" })
  NewSchema: string;
  
}



