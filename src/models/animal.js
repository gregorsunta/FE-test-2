export class Animal {
  constructor(
    id,
    name,
    species,
    dateOfBirth,
    ownerName,
    ownerSurname,
    ownerPhoneNumber,
    appointments = [],
    medicalRecords = [],
  ) {
    // tukaj pride v poštev typescript, ali pa kakšen library za validacijo

    this._id = parseInt(id);
    this.name = name;
    this.species = species;
    this.dateOfBirth = dateOfBirth;
    this.ownerName = ownerName;
    this.ownerSurname = ownerSurname;
    this.ownerPhoneNumber = parseInt(ownerPhoneNumber);
    this._medicalRecords = medicalRecords;
    this._appointments = appointments;
  }
  get id() {
    // uporabim zato da je _id 'varen' pred spreminjanjem obstoječih stanj po pomoti
    return this._id;
  }
  get medicalRecords() {
    // enako kot id
    return this._medicalRecords;
  }
  get appointments() {
    // enako kot id
    return this._appointments;
  }
  addAppointment(appointment) {
    return this.appointments.push(appointment);
  }
  removeAppointment(appointmentToRemove) {
    return (this.appointments = this.appointments.filter(
      (appointment) => appointment !== appointmentToRemove,
    ));
  }
  addMedicalRecord(record) {
    return this.medicalRecords.push(record);
  }
  addMultipleMedicalRecords(...records) {
    return records.forEach((record) => this.medicalRecords.push(record));
  }
  // + setterji za validacijo dodatnih sprememb
}
