import {Metadata} from "../../../internal/utils/utils";

export class Error {
    @Metadata("json, name=message")
    Message: string;
    @Metadata("json, name=status_code")
    StatusCode: number;
    
    constructor(Message: string, StatusCode: number) {
		this.Message = Message;
		this.StatusCode = StatusCode;
	}
}



