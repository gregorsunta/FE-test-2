export class MedicalCondition {
  constructor(diagnosis, date, treatment) {
    // tukaj pride v poštev typescript, ali pa kakšen library za validacijo

    this.diagnosis = diagnosis;
    this.treatment = treatment;
    this.date = date;
  }
  setDiagnosis(newDiagnosis) {
    this.diagnosis = newDiagnosis;
  }
  setDate(newDate) {
    this.date = newDate;
  }
  setTreatment(newTreatment) {
    this.treatment = newTreatment;
  }
}
