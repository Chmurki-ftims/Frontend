import React from "react";
import NavBar from "../NavBar/Nav";
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
