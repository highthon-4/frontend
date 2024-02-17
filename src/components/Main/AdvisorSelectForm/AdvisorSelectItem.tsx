import styled from "styled-components";
import {AdvisorType} from "../../../models/advisor";
import AdvisorHero, {ADVISOR_TEXT_MAP} from "../../common/AdvisorHero";
import Flex from "../../common/Flex";

type Props = {
  type: AdvisorType;
  onChangeType: (type: AdvisorType) => void;
};

const AdvisorSelectItem = ({type, onChangeType}: Props) => {
  return (
    <Container onClick={() => onChangeType(type)}>
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

export default AdvisorSelectItem;
