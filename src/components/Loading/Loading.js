import React from "react";
import { LoadingWrapper, LoadingText, Loader } from "./styles";

const Loading = ({message}) => {
  return (
    <LoadingWrapper>
      <Loader />
      <LoadingText>{message}</LoadingText>
    </LoadingWrapper>
  )
}

export { Loading }
