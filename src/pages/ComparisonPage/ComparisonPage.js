import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ComparisonPage = (props) => {
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("name");

  return (
    <>
      <h1>{gameName}</h1>
    </>
  );
};

export default ComparisonPage;
