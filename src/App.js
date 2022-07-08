import React, { useState } from "react";
//
import Global from "../src/assets/style/global";
import Router from "./router";
import RootContext from "./context/Context";

function App() {
  const [curtLangId, setCurLangId] = useState(1);

  let language = [
    {
      id: 0,
      code: "uz",
      text_uz: "Uz",
      text_ru: "Уз",
    },
    {
      id: 1,
      code: "ru",
      text_uz: "Ru",
      text_ru: "Ру",
    },
  ];

  return (
    <RootContext.Provider value={{ lang: language, curtLangId, setCurLangId }}>
      <Global />
      <Router />
    </RootContext.Provider>
  );
}

export default App;
