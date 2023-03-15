import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GenerateOpenApiSpecDiff extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current_schema" })
  currentSchema: string;

  @SpeakeasyMetadata()
  @Expose({ name: "new_schema" })
  newSchema: string;
}
