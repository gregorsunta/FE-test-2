// naredim nek temporary object, ki bo shranjeval lastnike in živali
// ta sistem bo primeren samo za shranjevanje v memoriju

export class Clinic {
  constructor(owners = [], animals = [], appointments = []) {
    this._owners = owners;
    this._animals = animals;
    this._appointments = appointments;
  }
  // uporabim zato da so _propertije nekoliko bolj na varnem
  get owners() {
    return [...this._owners];
  }

  get animals() {
    return [...this._animals];
  }

  get appointments() {
    return [...this._appointments];
  }

  // metode za dodajanje objectov in odstranitev objectov

  // doda nov owner v kliniko
  // vrne novo število vseh ownerjev
  addOwner(owner) {
    return this._owners.push(owner);
  }

  // doda več novih lastnikov v kliniko
  // ne vrne ničesar
  addMultipleOwners(...ownersToAdd) {
    ownersToAdd.forEach((owner) => this.addOwner(owner));
  }

  // doda žival v kliniko
  // vrne novo število animals
  addAnimal(animalToAdd) {
    return this._animals.push(animalToAdd);
  }

  // enako kot this.addAnimal samo, da sprejme več argumentov (živali)
  // ne vrne ničesar
  addMultipleAnimals(...animals) {
    animals.forEach((animal) => this.addAnimal(animal));
  }

  // doda nov appointment v kliniko
  // vrne posodobljeno število appointmentov
  addAppointment(appointment) {
    return this._appointments.push(appointment);
  }

  // vrne posodobljen array živali
  removeAnimalById(animalId) {
    return (this._animals = this.animals.filter(
      (animal) => animal.id !== animalId,
    ));
  }

  // vrne posodobljen array ownerjev
  removeOwnerByUMCN(ownerUMCN) {
    return (this._owners = this.owners.filter(
      (owner) => owner.UMCN !== ownerUMCN,
    ));
  }

  // vrne posodobljen array appointmentov
  removeAppointmentById(appointmentId) {
    return (this._appointments = this.appointments.filter(
      (appointment) => appointment.id !== appointmentId,
    ));
  }

  // izbriše žival in vse njene zapisane termine
  removeEntitiesByAnimalId(animalId) {
    const appointments = this.filterAppointmentsByAnimalId(animalId);
    appointments.forEach((appointment) => {
      this.removeAppointmentById(appointment.id);
    });
    this.removeAnimalById(animalId);
  }

  // izbriše ownerja, vse njegove živali in vse zapisane termine
  removeEntitiesByOwnerUMCN(ownerUMCN) {
    const animalIds = this.filterAnimalsByOwnerUMCN(ownerUMCN).map(
      (animal) => animal.id,
    );
    animalIds.forEach((animalId) => this.removeEntitiesByAnimalId(animalId));
    this.removeOwnerByUMCN(ownerUMCN);
  }

  // find metode, ki najdejo maksimalno en object

  findOwnerByUMCN(ownerUMCN) {
    return this.owners.find((owner) => owner.UMCN === ownerUMCN);
  }

  findAnimalById(id) {
    return this.animals.find((animal) => animal.id === id);
  }

  findOwnerByAnimalId(animalId) {
    const ownerUMCN = this.findAnimalById(animalId).ownerUMCN;
    return this.findOwnerByUMCN(ownerUMCN);
  }

  findAppointmentById(id) {
    return this.appointments.find((appointment) => appointment.id === id);
  }

  // filter metode, ki lahko najdejo več objectov

  // vrne array lastnikov preko imena in priimka
  filterOwnersByFullName(name, surname) {
    return this.owners.filter(
      (owner) => owner.name === name && owner.surname === surname,
    );
  }

  // vrne array živali VSEH lastnikov z ISTIM imenom in priimkom
  filterAnimalsBySameOwnerFullName(name, surname) {
    return this.filterOwnersByFullName(name, surname)
      .map((owner) => this.filterAnimalsByOwnerUMCN(owner.UMCN))
      .flat();
  }

  // vrne array živali preko EMŠO lastnika
  filterAnimalsByOwnerUMCN(UMCN) {
    return this.animals.filter((animal) => animal.ownerUMCN === UMCN);
  }

  // vrne array živali preko telefonske številke lastnika
  filterAnimalsByOwnerPhoneNumber(phoneNumber) {
    const ownerUMCN = this.owners.find(
      (owner) => owner.phoneNumber === phoneNumber,
    ).UMCN;
    return this.filterAnimalsByOwnerUMCN(ownerUMCN);
  }

  // najde pripisane appointmente preko id čipa živali
  filterAppointmentsByAnimalId(animalId) {
    return this.appointments.filter(
      (appointment) => appointment.animalId === animalId,
    );
  }
}
