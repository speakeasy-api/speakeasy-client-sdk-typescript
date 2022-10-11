import {Metadata} from "../../../internal/utils/utils";

export type GenerateOpenApiSpecDiff = {
    @Metadata("json, name=current_schema")
    CurrentSchema: string;
    @Metadata("json, name=new_schema")
    NewSchema: string;
    
}



