import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
`;

const CircleCiSlack = () => {
  return (
    <>
      <h1>Workflow Fail Slack Notification</h1>
      <Img src="../img/circleci-slack-notify.png" />
    </>
  );
};

export default CircleCiSlack;
