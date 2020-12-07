import React from "react";
import NavBar from "E:/PL- informatyka/Vsemestr/Systemy przetwarzania w chmurze/kalkom_v2/src/components/NavBar/Nav";
import { PageContent } from "./PageContent";
import "./MainPage.css";

const StartPage = () => {
  return (
    <div>
        <NavBar />
        <PageContent />
    </div>
  );
};

export default StartPage;
