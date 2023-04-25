import {
  clinic1,
  Appointment,
  MedicalCondition,
  Animal,
} from './src/models/index.js';

// vpis nove živali v register

// P.S. pri številkah uporabim string format zaradi začetnih ničel, pretvorbo iz string v number imam narejeno v classih
const piko = new Animal(
  '4123',
  'Piko',
  'cat',
  new Date('2020/4/16'),
  'Aleks',
  'Novak',
  '042356255',
);
const spidi = new Animal(
  '5022',
  'Spidi',
  'dog',
  new Date('2022/12/11'),
  'Aleks',
  'Novak',
  '042356255',
);
const thor = new Animal(
  '8534',
  'Thor',
  'dog',
  new Date('2018/22/01'),
  'Franc',
  'Mogočni',
  '086522399',
);

clinic1.addAnimal(piko);
// ali
clinic1.addMultipleAnimals(thor, spidi);

//////////////////////////////////////////////////////////////////////////////////////////

// iskanje živali

// 1. poiščem vse živali preko imena in priimka lastnika
clinic1.findAnimalsByOwnerFullName('Aleks', 'Novak');

// ali 2. poiščem vse živali preko telefonske številke lastnika
clinic1.findAnimalsByOwnerPhoneNumber('086522399');

//  ali 3. poiščem točno eno žival preko id čipa
clinic1.findAnimalById('8534');

//////////////////////////////////////////////////////////////////////////////////////////

// vpis zdravstvenega stanja / bolezni etc

const cold = new MedicalCondition(
  'A cold',
  '25.4.2023',
  'A lot of rest and liquids',
);
const influenza = new MedicalCondition(
  'Canine influenza',
  '20.2.2021',
  'A lot of rest and liquids. Prescribing some medical drugs.',
);
const parasites = new MedicalCondition(
  'External parasites',
  '20.2.2018',
  'Removing ticks regularly and spraying tick bites with prescribed sterile solution',
);

// .1 direktno
piko.addMedicalRecord(cold);

// ali 2. da najprej poiščem žival preko id-ja
clinic1.findAnimalById('8534').addMultipleMedicalRecords(influenza, parasites);

//////////////////////////////////////////////////////////////////////////////////////////

// vpis pregledov

const newAppointment = new Appointment(new Date('18/8/2023'), 'A hard cough');

clinic1.findAnimalById('5022').addAppointment(newAppointment);
