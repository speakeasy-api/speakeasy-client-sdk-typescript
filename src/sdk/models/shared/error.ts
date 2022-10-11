import {Metadata} from "../../../internal/utils/utils";

export type Error = {
    @Metadata("json, name=message")
    Message: string;
    @Metadata("json, name=status_code")
    StatusCode: number;
    
}



