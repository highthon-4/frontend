import styled from "styled-components";
import AdvisorHero, {ADVISOR_TEXT_MAP} from "../../common/AdvisorHero";
import {AdvisorType} from "../../../models/advisor";
import Flex from "../../common/Flex";

type Props = {
  type: AdvisorType;
};

const AdvisorSection = ({type}: Props) => {
  return (
    <Container>
      <Flex direction="column" align="center" gap={12}>
        <p style={{fontSize: "24px", fontWeight: "bold", color: "white"}}>
          {ADVISOR_TEXT_MAP[type].title}
        </p>
        <p style={{fontSize: "18px", color: "white"}}>
          {ADVISOR_TEXT_MAP[type].description}
        </p>
      </Flex>
      <AdvisorHero
        type={type}
        customStyle={{width: "100%", height: "580px", objectFit: "cover"}}
      />
    </Container>
  );
};

export default AdvisorSection;

const Container = styled.div`
  min-width: 400px;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #1c1f26;
`;
