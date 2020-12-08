import React from "react";

export default function About() {
  return (
    <div className="container-fluid page">
      <div className="row">
        <div className="col">
          <h1>O kalkulatorze</h1>

          <div>
            Nasz kalkulator pozwala na przeliczenie kwot wynagrodzeń z brutto na
            netto dla umów:

            <ul>
              <li>Umowa o pracę</li>
              <li>Umowa zlecenie</li>
            </ul>

            oraz na przeliczenie wynagrodzenia netto dla umowy B2B po
            wprowadzeniu przychodów i kosztów związanych z prowadzoną
            działalnością.<br/>
            Dzięki naszej aplikacji dostaniesz błyskawiczną informację, jak
            pensja ostatecznie wyląduje na Twoim koncie. Ten kalkulator obliczy
            również wszystkie składki, które są odprowadzane z Twojej pensji.
            Kalkulator i porównywarka są szczególnie przydatne w momencie
            podjęcia nowej pracy lub zmiany pracy. Dzięki nam szybko dowiesz się
            jaka umowa jest dla Ciebie najkorzystniejsza.
          </div>
        </div>
      </div>
    </div>
  );
};
