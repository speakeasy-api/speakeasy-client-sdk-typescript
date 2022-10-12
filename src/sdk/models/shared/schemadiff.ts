import {Metadata} from "../../../internal/utils/utils";
import * as shared from "../shared";

export class SchemaDiffModificationsValueChange {
    @Metadata("json, name=From")
    From: string;
    @Metadata("json, name=To")
    To: string;
    
    constructor(From: string, To: string) {
		this.From = From;
		this.To = To;
	}
}

export class SchemaDiff {
    @Metadata("json, name=additions")
    Additions: string[];
    @Metadata("json, name=deletions")
    Deletions: string[];
    @Metadata("json, name=modifications")
    Modifications: Map<string, SchemaDiffModificationsValueChange>;
    
    constructor(Additions: string[], Deletions: string[], Modifications: Map<string, shared.SchemaDiffModificationsValueChange>) {
		this.Additions = Additions;
		this.Deletions = Deletions;
		this.Modifications = Modifications;
	}
}



