import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class LocalizedNameType {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
class NationalIdType {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
class CountryType {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
class NationalityType {
  @Field(() => CountryType)
  country: CountryType;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
class MaritalStatusType {
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
