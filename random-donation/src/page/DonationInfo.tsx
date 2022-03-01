import React from "react";
import styled from "styled-components";
import InfoDetail from "../component/DonationInfo/InfoDetail";
import InfoTitle from "../component/DonationInfo/InfoTitle";

import { device } from "../services/devices";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  font-size: 15px;

  @media ${device.tablet} {
    font-size: 16px;
    display: block;
    overflow: auto;
  }
`;
const DonationInfo = (): JSX.Element => {
  return (
    <Container>
      <InfoTitle />
      <InfoDetail />
    </Container>
  );
};

export default DonationInfo;
