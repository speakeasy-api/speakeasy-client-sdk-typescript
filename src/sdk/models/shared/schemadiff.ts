import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export class SchemaDiffValueChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=From" })
  From: string;

  @Metadata({ data: "json, name=To" })
  To: string;
}

export class SchemaDiff extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions" })
  Additions: string[];

  @Metadata({ data: "json, name=deletions" })
  Deletions: string[];

  @Metadata({ data: "json, name=modifications", elemType: shared.SchemaDiffValueChange })
  Modifications: Map<string, SchemaDiffValueChange>;
}
