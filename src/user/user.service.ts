import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly user = {
    firstName: 'John',
    fatherName: 'Doe',
    grandfatherName: 'Smith',
    familyName: 'Johnson',
    localizedName: {
      firstName: 'Jean',
      fatherName: 'Dupont',
      grandfatherName: 'Lemoine',
      familyName: 'Durand',
    },
    nationalId: {
      idNumber: '1234567890',
      expiryDate: '2030-12-31',
    },
    nationalities: [
      {
        country: { id: 1, name: 'CountryA' },
        countryId: 1,
      },
      {
        country: { id: 2, name: 'CountryB' },
        countryId: 2,
      },
    ],
    maritalStatus: {
      id: 1,
      name: 'Single',
    },
    dependants: 2,
  };

  findUserById(id: number) {
    return id === 1 ? this.user : null;
  }
}
