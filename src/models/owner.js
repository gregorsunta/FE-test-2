export class Owner {
  constructor(
    name,
    surname,
    uniqueMasterCitizenNumber, // EMŠO ownerja
    phoneNumber,
  ) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.UMCN = uniqueMasterCitizenNumber;
  }
}
