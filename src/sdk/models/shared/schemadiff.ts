import { Metadata } from "../../../internal/utils/utils";

export class SchemaDiffValueChange {
  @Metadata("json, name=From")
  From: string;
  @Metadata("json, name=To")
  To: string;
}

export class SchemaDiff {
  @Metadata("json, name=additions")
  Additions: string[];
  @Metadata("json, name=deletions")
  Deletions: string[];
  @Metadata("json, name=modifications")
  Modifications: Map<string, SchemaDiffValueChange>;
}
