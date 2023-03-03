import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1200px;
`;

const CircleCiPipelineSuccess = () => {
    return (
      <>
        <h1>Workflow Success</h1>
        <Img src="./img/circleci-success.png" />
      </>
    );
};

export default CircleCiPipelineSuccess;