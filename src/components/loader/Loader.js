import React from "react";
import Loader from "react-loader-spinner";
import { LoaderStyled } from "./LoaderStyled";
import { colors } from "../../stylesheet/vars";

function LoaderComponent() {
  return (
    <LoaderStyled>
      <Loader
        type="ThreeDots"
        color={colors.circleGreen}
        height={50}
        width={50}
      />
    </LoaderStyled>
  );
}

export default LoaderComponent;
