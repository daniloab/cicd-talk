import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1000px;
`;

const CircleCiPipelineDetailFailing = () => {
  return (
    <>
      <h1>Pipeline Fail</h1>
      <Img src="../img/circleci/circleci-failing.png" />
    </>
  );
};

export default CircleCiPipelineDetailFailing;
