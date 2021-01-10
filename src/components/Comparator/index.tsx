import React from "react";
import "./styles.css"
// interface Props {

// }

export default function Comparator(props: any) {
  return (
    <div className="container-fluid page">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td colSpan={5} />
                <th>Umowa o pracę</th>
                <th>Umowa zlecenie</th>
                <th>Umowa B2B</th>
              </tr>
              <tr>
                <tr>
                  <th className="months" rowSpan={9}>Cały rok</th>
                </tr>
                <tr>
                  <th>Wypłata (netto)</th>
                </tr>
                <tr>
                  <th>Ubezpieczenie emerytalne</th>
                </tr>
                <tr>
                  <th>Ubezpieczenie rentowe</th>
                </tr>
                <tr>
                  <th>Ubezpieczenie chorobowe</th>
                </tr>
                <tr>
                  <th>Ubezpieczenie zdrowotne</th>
                </tr>
                <tr>
                  <th>Zaliczna na podatek dochodowy</th>
                </tr>
                <tr>
                  <th>FP</th>
                </tr>
                <tr>
                  <th>FGŚP</th>
                </tr>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}
