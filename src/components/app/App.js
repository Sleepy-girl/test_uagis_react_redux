import React, { Suspense } from "react";
import LoaderComponent from "../loader/LoaderComponent";
import ElemList from "../elem/ElemList";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <AppStyled>
        <ElemList />
      </AppStyled>
    </Suspense>
  );
}

export default App;
