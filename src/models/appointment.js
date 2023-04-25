export class Appointment {
  constructor(date, reason) {
    // tukaj pride v poštev typescript, ali pa kakšen library za validacijo

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
}
