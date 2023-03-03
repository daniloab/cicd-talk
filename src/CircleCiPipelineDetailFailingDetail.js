import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1000px;
`;

const CircleCiPipelineDetailFailingDetail = () => {
    return (
        <>
            <h1>Workflow Fail Detail</h1>
            <Img src="./img/circleci-failing-detail.png" />
        </>
    );
};

export default CircleCiPipelineDetailFailingDetail;