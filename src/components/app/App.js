import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import ElemList from "../elem/ElemList";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppStyled>
        <ElemList />
      </AppStyled>
    </Suspense>
  );
}

export default App;
