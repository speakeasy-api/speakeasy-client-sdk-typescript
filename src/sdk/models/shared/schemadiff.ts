import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class SchemaDiffValueChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=From" })
  from: string;

  @Metadata({ data: "json, name=To" })
  to: string;
}

export class SchemaDiff extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions" })
  additions: string[];

  @Metadata({ data: "json, name=deletions" })
  deletions: string[];

  @Metadata({ data: "json, name=modifications", elemType: shared.SchemaDiffValueChange })
  modifications: Map<string, SchemaDiffValueChange>;
}
