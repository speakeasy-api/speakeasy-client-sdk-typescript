import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemaDiffValueChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=From" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=To" })
  to: string;
}


// SchemaDiff
/** 
 * A SchemaDiff represents a diff of two Schemas.
**/
export class SchemaDiff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions: string[];

  @SpeakeasyMetadata({ data: "json, name=deletions" })
  deletions: string[];

  @SpeakeasyMetadata({ data: "json, name=modifications", elemType: SchemaDiffValueChange })
  modifications: Record<string, SchemaDiffValueChange>;
}
