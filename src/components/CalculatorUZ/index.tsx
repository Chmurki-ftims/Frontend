import React from "react";

// interface Props {

// }

export default function CalculatorUZ(props: any) {
  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
          <div className="form-row">
            <div className="row justify-content-center">
              <form>
                <div className="form-group">
                  <label htmlFor="taxThreshold">Próg podatkowy:</label>
                  <select className="form-control" id="taxThreshold">
                    <option>Pierwszy</option>
                    <option>Drugi</option>
                  </select>
                </div>
               
                <label htmlFor="contribution">Składka:</label>
                <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="pensionablePay"
                  id="contribution1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="contribution1">
                  Emerytalna
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="socialPension"
                  id="contribution2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="contribution2">
                  Rentowa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="Sickness"
                  id="contribution3"
                  value="option3"
                />
                <label className="form-check-label" htmlFor="contribution3">
                  Chorobowa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="accidentInsurance"
                  id="contribution4"
                  value="option4"
                />
                <label className="form-check-label" htmlFor="contribution4">
                  Wypadkowa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="healthInsurance"
                  id="contribution5"
                  value="option5"
                />
                <label className="form-check-label" htmlFor="contribution5">
                  Zdrowotna
                </label>
              </div>
              <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="labourFund"
                    id="contribution6"
                    value="option6"
                  />
                  <label className="form-check-label" htmlFor="contribution6">
                    Fundusz pracy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="employmentFundContribution"
                    id="contribution7"
                    value="option7"
                  />
                  <label className="form-check-label" htmlFor="contribution7">
                    FGŚP
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
                  <label htmlFor="income">Dochoód:</label>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
