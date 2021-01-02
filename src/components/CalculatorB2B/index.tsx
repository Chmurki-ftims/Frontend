import React from "react";
import "./styles.css";
// interface Props {
//     year: number,
//     taxTyp: string,
//     vat: number

// }

export default function CalculatorB2B(props: any) {
  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
          <div className="form-row">
            <div className="row justify-content-center">
              <form>
                <div className="form-group">
                  <label htmlFor="taxYear">Rok podatkowy:</label>
                  <select className="form-control" id="taxYear">
                    <option>2020</option>
                    <option disabled>2021</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="taxType">Typ podatku:</label>
                  <select className="form-control" id="taxType">
                    <option>Podatek liniowy</option>
                    <option>Podatek progresywny</option>
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
                  name="healthInsurance"
                  id="contribution4"
                  value="option4"
                />
                <label className="form-check-label" htmlFor="contribution4">
                  Zdrowotna
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="deductible"
                  id="contribution5"
                  value="option5"
                />
                <label className="form-check-label" htmlFor="contribution5">
                  Podlegająca odliczeniu
                </label>
              </div>
                <div className="form-group">
                  <label htmlFor="vat">Stawka VAT:</label>
                  <select className="form-control" id="vat">
                    <option>0%</option>
                    <option>5%</option>
                    <option>8%</option>
                    <option>23%</option>
                  </select>
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
                  <label htmlFor="costs">Koszty:</label>
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
                <div className="form-group">
                  <label htmlFor="revenue">Przychód:</label>
                  <div className="form-row">
                    {/* <label htmlFor="Cost">Przychód:</label> */}
                    <div className="form-group col-6">
                      {/* <label htmlFor="Title">Tytuł:</label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="title2"
                        placeholder="Tytuł"
                      />
                    </div>
                    <div className="form-group col-6">
                      {/* <label htmlFor="Title">Cost:</label> */}
                      <input
                        type="number"
                        className="form-control"
                        id="value2"
                        placeholder="Wartość"
                        min="0"
                        step="100"
                      />
                    </div>
                  </div>
                  <div className="form-group">
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
                      <b>Przychód</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Koszty</b>
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
