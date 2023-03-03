import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
`;

const CircleCiSlackHold = () => {
  return (
    <>
      <h1>Workflow Production</h1>
      <Img src="../img/circleci/circleci-hold-slack.png" />
    </>
  );
};

export default CircleCiSlackHold;
