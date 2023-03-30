import { Tenant } from "src/authentication/entities/tenant";

export class CreateProblemDto {
//     @Type(() => NationalDto)
//   @Expose()
  tenant: Tenant


    constructor(public subject: string, public description: string) {}
}
