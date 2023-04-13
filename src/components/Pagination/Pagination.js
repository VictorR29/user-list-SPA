import React from "react";
import { NextBtn, PrevBtn } from "./styles";

const Pagination = ({  handlePagination, currentPage }) => {
  return (
    <>
      {currentPage <= 1 && <NextBtn onClick={() => handlePagination(1)}>Next page</NextBtn>}
      {currentPage > 1 && <PrevBtn onClick={() => handlePagination(-1)}>Prev page</PrevBtn>}
    </>
  );
};

export { Pagination };