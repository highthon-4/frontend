import styled from "styled-components";
import AdvisorSelectItem from "./AdvisorSelectItem";
import {AdvisorType} from "../../../models/advisor";

type Props = {
  onChangeType: (type: AdvisorType) => void;
};

const AdvisorSelectForm = ({onChangeType}: Props) => {
  return (
    <Container>
      <AdvisorSelectItem type="sensuous" onChangeType={onChangeType} />
      <AdvisorSelectItem type="ideal" onChangeType={onChangeType} />
      <AdvisorSelectItem type="realistic" onChangeType={onChangeType} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default AdvisorSelectForm;
