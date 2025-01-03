import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('LocalizedNameInput')
@ObjectType('LocalizedName')
export class LocalizedNameType {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType('NationalIdInput')
@ObjectType('NationalId')
export class NationalIdType {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType('CountryInput')
@ObjectType('Country')
class CountryType {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType('NationalityInput')
@ObjectType('Nationality')
export class NationalityType {
  @Field(() => CountryType)
  country: CountryType;

  @Field(() => Int)
  countryId: number;
}

@InputType('MaritalStatusInput')
@ObjectType('MaritalStatus')
export class MaritalStatusType {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class UserType {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedNameType)
  localizedName: LocalizedNameType;

  @Field(() => NationalIdType)
  nationalId: NationalIdType;

  @Field(() => [NationalityType])
  nationalities: NationalityType[];

  @Field(() => MaritalStatusType)
  maritalStatus: MaritalStatusType;

  @Field(() => Int)
  dependants: number;
}
