import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, plainToInstance, Transform } from "class-transformer";


export class SchemaDiffValueChange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "From" })
  from: string;

  @SpeakeasyMetadata()
  @Expose({ name: "To" })
  to: string;
}

// SchemaDiff
/** 
 * A SchemaDiff represents a diff of two Schemas.
**/
export class SchemaDiff extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additions" })
  additions: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "deletions" })
  deletions: string[];

  @SpeakeasyMetadata({ elemType: SchemaDiffValueChange })
  @Expose({ name: "modifications" })
  @Transform(({ value }) => {
    const obj: Record<string, SchemaDiffValueChange> = {};
    for (const key in value) {
      obj[key] = plainToInstance(SchemaDiffValueChange,
        value[key] as SchemaDiffValueChange,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  modifications: Record<string, SchemaDiffValueChange>;
}