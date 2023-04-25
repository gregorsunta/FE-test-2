// naredim nek temporary object, ki bo shranjeval lastnike in živali
// ta sistem bo primeren samo za shranjevanje v memoriju

class Clinic {
  constructor() {
    this._animals = [];
  }
  get animals() {
    // uporabim zato da je _animals 'varen' pred spreminjanjem obstoječih stanj po pomoti
    return this._animals;
  }
  displayAnimals() {
    // ne vrne ničesar, služi samo za prikaz živali v konzoli
    this.animals.forEach((animal) => console.log(animal));
  }
  addAnimal(animal) {
    // vrne na novo dodano žival
    // lahko chainamo dodatne metode direktno - npr. addAnimal().addMedicalREcord
    return this.animals.push(animal);
  }
  addMultipleAnimals(...animalsToAdd) {
    // ne vrne ničesar
    animalsToAdd.forEach((animal) => this.animals.push(animal));
  }
  removeAnimal(animalId) {
    // ne vrne ničesar
    // deluje ampak direktno spreminjam _propertije

    // 1.
    this._animals = this._animals.filter((animal) => animal.id !== animalId);

    // ali 2.
    // const animalIndex = this.animals.findIndex(
    //   (animal) => animal.id === animalId,
    // );
    // if (animalIndex !== -1) {
    //   this._animals.splice(animalIndex, 1);
    // }
  }
  findAnimalsByOwnerFullName(name, surname) {
    return this.animals.filter(
      (animal) => animal.ownerName === name && animal.ownerSurname === surname,
    );
  }
  findAnimalById(id) {
    // vrne točno eno žival
    // v izrednem primeru več istih id-jev vrne prvega - bi moral tudi za ta izredni primer to urediti?
    return this.animals.find((animal) => animal.id === parseInt(id));
  }
  findAnimalsByOwnerPhoneNumber(phoneNumber) {
    // vrne vse živali z isto telefonsko številko lastnika
    return this.animals.filter(
      (animal) => animal.ownerPhoneNumber === parseInt(phoneNumber),
    );
  }
  // + setterji za validacijo dodatnih sprememb
}
// exportam instance in ne direktno Class - naredim singleton
const clinic1 = new Clinic();
export { clinic1 };
