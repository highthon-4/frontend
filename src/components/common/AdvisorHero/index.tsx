import {AdvisorType} from "../../../models/advisor";
import idealAdvisor from "../../../assets/images/advisor/idealAdvisor.svg";
import realisticAdvisor from "../../../assets/images/advisor/realisticAdvisor.svg";
import sensuousAdvisor from "../../../assets/images/advisor/sensuousAdvisor.svg";

const ADVISOR_SVG_MAP: Record<AdvisorType, string> = {
  realistic: realisticAdvisor,
  ideal: idealAdvisor,
  sensuous: sensuousAdvisor,
};

type Props = {
  type: AdvisorType;
  customStyle?: React.CSSProperties;
};

const AdvisorHero = ({type, customStyle}: Props) => {
  return (
    <img alt={type} src={ADVISOR_SVG_MAP[type]} style={{...customStyle}} />
  );
};

export default AdvisorHero;
