import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";



// Error
/** 
 * The `Status` type defines a logical error model
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
