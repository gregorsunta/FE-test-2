import {
  Clinic,
  Appointment,
  MedicalRecord,
  Animal,
  Owner,
} from './src/models/index.js';

// nova klinika
const clinic1 = new Clinic();

// vpis novega lastnika
const janez = new Owner(
  'Janez',
  'Novak',
  '0511987500212', //EMŠO
  '086522399', // telefonska
);

clinic1.addOwner(janez);

//////////////////////////////////////////////////////////////////////////////////////////
// vpis nove živali v register

const piko = new Animal(
  janez.UMCN,
  '4123', //id čipa
  'Piko',
  'cat',
  new Date('2020/4/16'),
);
const spidi = new Animal(
  janez.UMCN,
  '5022', //id čipa
  'Spidi',
  'dog',
  new Date('2022/12/11'),
);
const thor = new Animal(
  janez.UMCN,
  '8534', //id čipa
  'Thor',
  'dog',
  new Date('2018/02/01'),
);

clinic1.addAnimal(piko);
// ali
clinic1.addMultipleAnimals(spidi, thor);

//////////////////////////////////////////////////////////////////////////////////////////
// iskanje živali

//  če vem samo ime in priimek, vrnem array vseh živali, ki imajo enak ime in priimek lastnika
clinic1.filterAnimalsBySameOwnerFullName('Janez', 'Novak');

// ali poiščem vse živali določenega lastnika preko telefonske številke lastnika
clinic1.filterAnimalsByOwnerPhoneNumber('086522399');

//  ali poiščem točno eno žival preko id čipa
clinic1.findAnimalById('8534');

//////////////////////////////////////////////////////////////////////////////////////////
// iskanje lastnika

clinic1.findOwnerByAnimalId('5022');

//////////////////////////////////////////////////////////////////////////////////////////
// vpis zdravstvenega stanja / bolezni etc

const cold = new MedicalRecord(
  'A cold',
  new Date('2022/05/12'),
  'A lot of rest and liquids',
);
const influenza = new MedicalRecord(
  'Canine influenza',
  new Date('2022/06/12'),
  'A lot of rest and liquids. Prescribing some medical drugs.',
);
const parasites = new MedicalRecord(
  'External parasites',
  new Date('2022/08/15'),
  'Removing ticks regularly and spraying tick bites with prescribed sterile solution',
);

// direktno
piko.addMedicalRecord(cold);

// ali nekako poiščem žival prej
clinic1.findAnimalById('8534').addMultipleMedicalRecords(influenza, parasites);

//////////////////////////////////////////////////////////////////////////////////////////

// vpis pregledov

const newAppointment = new Appointment(
  '111222333', //'generiran' id
  spidi.id,
  new Date('2023/5/15/09:15:00'),
  'A hard cough',
);

// dodam appointment v kliniko

clinic1.addAppointment(newAppointment);

//////////////////////////////////////////////////////////////////////////////////////////

// zbrišem specifično žival iz 'baze' in ownerja
clinic1.removeAnimalById(thor.id);

// zbrišem ownerja, vse živali povezane z njim in vse njihove termine
clinic1.removeEntitiesByOwnerUMCN(janez.UMCN);
