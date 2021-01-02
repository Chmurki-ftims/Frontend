import React from "react";

export default function CalculatorUOP(props: any) {
  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
          <div className="form-row">
            <div className="row justify-content-center">
              <form>
                <div className="form-group">
                  <label htmlFor="dayJob">Etat:</label>
                  <select className="form-control" id="dayJob">
                    <option>Pełny etat</option>
                    <option>1/2 etatu</option>
                    <option>1/3 etatu</option>
                    <option>2/3 etatu</option>
                    <option>1/4 etatu</option>
                    <option>3/4 etatu</option>
                  </select>
                </div>

                <label htmlFor="contribution">Składka:</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="labourFund"
                    id="contribution1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="contribution1">
                    Fundusz pracy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="employmentFundContribution"
                    id="contribution2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="contribution2">
                    FGŚP
                  </label>
                </div>

                <label htmlFor="age">Czy skończyłeś 26 lat?</label>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Tak, mam więcej niż 26 lat
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    Nie, mam mniej niż 26 lat
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="month">Miesiąc:</label>
                  <select className="form-control" id="month">
                    <option>Styczeń</option>
                    <option>Luty</option>
                    <option>Marzec</option>
                    <option>Kwiecień</option>
                    <option>Maj</option>
                    <option>Czerwiec</option>
                    <option>Lipiec</option>
                    <option>Sierpień</option>
                    <option>Wrzesień</option>
                    <option>Październik</option>
                    <option>Listopad</option>
                    <option>Grudzień</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="income">Dochód:</label>
                  <div className="form-row">
                    {/* <label htmlFor="Cost">Koszty:</label> */}
                    <div className="form-group col-6">
                      {/* <label htmlFor="Title">Tytuł:</label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="title1"
                        placeholder="Tytuł"
                      />
                    </div>
                    <div className="form-group col-6">
                      {/* <label htmlFor="Title">Cost:</label> */}
                      <input
                        type="number"
                        className="form-control"
                        id="value1"
                        placeholder="Wartość"
                        min="0"
                        step="100"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="">kdsvolm</label> */}
                    <button type="button" className="btn btn-primary btn-block">
                      Dodaj
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <button type="button" className="btn btn-primary btn-block">
              Oblicz
            </button>
            <button type="button" className="btn btn-secondary btn-block">
              Zapisz
            </button>
          </div>
        </div>

        <div className="col-9">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <tr className="months">
                    <td rowSpan={2} colSpan={2}></td>
                    <td colSpan={2}>
                      <b>Styczeń</b>
                    </td>
                    <td colSpan={2}>
                      <b>Luty</b>
                    </td>
                    <td colSpan={2}>
                      <b>Marzec</b>
                    </td>
                    <td colSpan={2}>
                      <b>Kwiecień</b>
                    </td>
                    <td colSpan={2}>
                      <b>Maj</b>
                    </td>
                    <td colSpan={2}>
                      <b>Czerwiec</b>
                    </td>
                    <td colSpan={2}>
                      <b>Lipiec</b>
                    </td>
                    <td colSpan={2}>
                      <b>Sierpień</b>
                    </td>
                    <td colSpan={2}>
                      <b>Wrzesień</b>
                    </td>
                    <td colSpan={2}>
                      <b>Październik</b>
                    </td>
                    <td colSpan={2}>
                      <b>Listopad</b>
                    </td>
                    <td colSpan={2}>
                      <b>Grudzień</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                    <td>
                      <b>Tytuł</b>
                    </td>
                    <td>
                      <b>Wartość</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Dochód brutto</b>
                    </td>
                  </tr>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
