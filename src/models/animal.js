export class Animal {
  constructor(
    ownerUMCN,
    id, //id čipa
    name,
    species,
    dateOfBirth,
    medicalRecords = [],
  ) {
    // tukaj bi prišel v poštev typescript, ali pa kakšen library za validacijo

    this._ownerUMCN = ownerUMCN;
    this._id = id;
    this.name = name;
    this.species = species;
    this.dateOfBirth = dateOfBirth;
    this._medicalRecords = medicalRecords;
  }
  // uporabim zato da je _id 'varen' pred spreminjanjem obstoječih stanj po pomoti
  get ownerUMCN() {
    return this._ownerUMCN;
  }
  get id() {
    return this._id;
  }
  get medicalRecords() {
    return this._medicalRecords;
  }

  addMedicalRecord(record) {
    return this.medicalRecords.push(record);
  }

  addMultipleMedicalRecords(...records) {
    return records.forEach((record) => this.medicalRecords.push(record));
  }
}
