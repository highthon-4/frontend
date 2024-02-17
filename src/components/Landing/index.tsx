import styled from "styled-components";
import Flex from "../common/Flex";
import {palette} from "../../styles/palette";
import leftText from "../../assets/images/landing/leftText.svg";
import rightText from "../../assets/images/landing/rightText.svg";
import flyingPerson from "../../assets/images/landing/flyingPerson.svg";
import startText from "../../assets/images/landing/start.svg";
import {useHover} from "../../hooks/useHover";
import {useNavigate} from "react-router-dom";

const Landing = () => {
  const [ref, hovered] = useHover();
  const navigate = useNavigate();

  return (
    <Container
      direction="column"
      customStyle={{
        width: "100%",
        height: "100vh",
        backgroundColor: palette.gray.gray1100,
        padding: "0 50px",
        boxSizing: "border-box",
      }}
      justify="center"
      align="center"
      gap={32}
    >
      <p
        style={{
          color: "white",
          fontSize: "32px",
          marginRight: "auto",
          fontWeight: "bold",
        }}
      >
        꿈, 그 여정을 동반할 AI.
      </p>
      <MiddleContainer
        customStyle={{
          width: "100%",
          position: "relative",
        }}
        justify="between"
      >
        <img src={leftText} alt="leftText" style={{zIndex: 1}} />
        <div ref={ref} onClick={() => navigate("/login")}>
          <FlyingPersonImg src={flyingPerson} alt="flyingPerson" />
        </div>
        {hovered && (
          <StartButton>
            <img src={startText} alt="start" />
          </StartButton>
        )}

        <img src={rightText} alt="rightText" style={{zIndex: 3}} />
      </MiddleContainer>
      <p
        style={{
          color: "white",
          fontSize: "32px",
          marginLeft: "auto",
          fontWeight: "bold",
        }}
      >
        작은 고민도 당신의 꿈을 위한 소중한 고민이니깐.
      </p>
    </Container>
  );
};

const Container = styled(Flex)``;

const MiddleContainer = styled(Flex)``;

const StartButton = styled.button`
  z-index: 3;
  position: absolute;
  left: 53%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const FlyingPersonImg = styled.img`
  position: absolute;
  left: 53%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  &:hover {
    filter: brightness(60%);
    cursor: pointer;
  }
`;

export default Landing;
