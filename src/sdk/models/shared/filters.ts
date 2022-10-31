import {Metadata} from "../../../internal/utils/utils";
import { Filter } from "./filter";

export class Filters {
    @Metadata("json, name=filters")
    Filters: Filter[];
    @Metadata("json, name=limit")
    Limit: number;
    @Metadata("json, name=offset")
    Offset: number;
    @Metadata("json, name=operator")
    Operator: string;
    
    constructor(Filters: Filter[], Limit: number, Offset: number, Operator: string) {
		this.Filters = Filters;
		this.Limit = Limit;
		this.Offset = Offset;
		this.Operator = Operator;
	}
}



