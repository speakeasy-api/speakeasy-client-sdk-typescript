import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GenerateOpenApiSpecDiff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_schema" })
  currentSchema: string;

  @SpeakeasyMetadata({ data: "json, name=new_schema" })
  newSchema: string;
}