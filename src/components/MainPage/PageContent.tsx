import React from "react";

export const PageContent = (props: any) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>O kalkulatorze</h1>
          <p>
            Nasz kalkulator pozwala na przeliczenie kwot wynagrodzeń z brutto na
            netto dla umów:<br></br>
            <span className="points">• Umowa o pracę,</span>
            <br></br>
            <span className="points">• Umowa zlecenie,</span>
            <br></br>
            oraz na przeliczenie wynagrodzenia netto dla umowy B2B po
            wprowadzeniu przychodów i kosztów związanych z prowadzoną
            działalnością.<br></br>
            Dzięki naszej aplikacji dostaniesz błyskawiczną informację, jak
            pensja ostatecznie wyląduje na Twoim koncie. Ten kalkulator obliczy
            również wszystkie składki, które są odprowadzane z Twojej pensji.
            Kalkulator i porównywarka są szczególnie przydatne w momencie
            podjęcia nowej pracy lub zmiany pracy. Dzięki nam szybko dowiesz się
            jaka umowa jest dla Ciebie najkorzystniejsza.
          </p>
        </div>
      </div>
    </div>
  );
};
