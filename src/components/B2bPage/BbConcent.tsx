import React from "react";
// interface Props {
//     year: number,
//     taxTyp: string,
//     vat: number

// }

export const BbConcent = (props: any) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <form>
            <div className="form-group">
              <label htmlFor="taxYear">Rok podatkowy:</label>
              <select className="form-control" id="taxYear">
                <option>2020</option>
                <option>2021</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="taxType">Typ podatku:</label>
              <select className="form-control" id="taxType">
                <option>Podatek liniowy</option>
                <option>Podatek progresywny</option>
              </select>
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
          </form>
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Oblicz
          </button>
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Zapisz
          </button>
        </div>

        {/* <div className="col-9">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Miesiąc</th>
                <tr>
                  <th colSpan={2}>Styczen</th>
                </tr>
                <tr>
                  <th scope="col" style={{paddingLeft:'24px', paddingRight:'23px'}}>Tytuł</th>
                  <th scope="col">Wartość</th>
                </tr>
                <th>
                <tr>
                  <th colSpan={2}>Luty</th>
                </tr>
                <tr>
                  <th scope="col" style={{paddingLeft:'24px', paddingRight:'23px'}}>Tytuł</th>
                  <th scope="col">Wartość</th>
                </tr>
                </th>
                <th scope="col">Luty</th>
                <th scope="col">Marzec</th>
                <th scope="col">Kwiecień</th>
                <th scope="col">Maj</th>
                <th scope="col">Czerwiec</th>
                <th scope="col">Lipiec</th>
                <th scope="col">Sierpień</th>
                <th scope="col">Wrzesień</th>
                <th scope="col">Październik</th>
                <th scope="col">Listopad</th>
                <th scope="col">Grudzień</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Przychód</th>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>111</td>
                      <td>111</td>
                    </tr>
                  </tbody>
                </table>

              </tr>
              <tr>
                <th>Koszty</th>

                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>111</td>
                      <td>111</td>
                    </tr>
                  </tbody>
                </table>

              </tr>
            </tbody>
          </table>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan={4}>Miesiąc</th>
              </tr>
              <tr>
                
                <th  colSpan={2} scope="col">Przychód</th>
                <th  colSpan={2} scope="col">Koszty</th>
                
              </tr>
              <tr>
                <th scope="col">Tytuł</th>
                <th scope="col">Koszty</th>
                <th scope="col">Tytuł</th>
                <th scope="col">Koszty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" placeholder="tytuł"/></td>
                <td><input type="text" placeholder="wartość"/></td>
                <td><input type="text" placeholder="tytuł"/></td>
                <td><input type="text" placeholder="wartość"/></td>
              </tr>
              <tr>
                <td>sadf</td>
                <td>asf</td>
                <td>342</td>
                <td>fs</td>
              </tr>
              <tr>
                <td>sadf</td>
                <td>asf</td>
                <td>342</td>
                <td>fs</td>
              </tr>
            </tbody>
          </table>
         </div>*/}
      </div>
    </div>
  );
};
