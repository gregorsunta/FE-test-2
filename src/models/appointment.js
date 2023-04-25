export class Appointment {
  constructor(id, animalId, date, reason) {
    // tukaj pride v poštev typescript, ali pa kakšen library za validacijo
    this._id = id;
    this._animalId = animalId;
    this._date = date;
    this._reason = reason;
  }
  // setterji za validacijo dodatnih sprememb
  set date(newDate) {
    this._date = newDate;
  }
  set reason(newReason) {
    this._reason = newReason;
  }
  get id() {
    return this._id;
  }
  get animalId() {
    return this._animalId;
  }
  get date() {
    return this._date;
  }
  get reason() {
    return this._reason;
  }
}
