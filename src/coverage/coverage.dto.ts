import { IsNotEmpty } from 'class-validator';

export class CreateCoverageDto {
 
  @IsNotEmpty()
  payer_id: string;

  @IsNotEmpty()
  insurance_member_id: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  dob: string;

}