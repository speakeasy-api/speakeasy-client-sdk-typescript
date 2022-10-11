import {Metadata} from "../../../internal/utils/utils";

export type SchemaDiffModificationsValueChange = {
    @Metadata("json, name=From")
    From: string;
    @Metadata("json, name=To")
    To: string;
    
}

export type SchemaDiff = {
    @Metadata("json, name=additions")
    Additions: string[];
    @Metadata("json, name=deletions")
    Deletions: string[];
    @Metadata("json, name=modifications")
    Modifications: Map<string, SchemaDiffModificationsValueChange>;
    
}



