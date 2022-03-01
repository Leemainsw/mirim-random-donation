import React from "react";
import styled from "styled-components";
import InfoDetail from "../component/DonationInfo/InfoDetail";
import InfoTitle from "../component/DonationInfo/InfoTitle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
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
