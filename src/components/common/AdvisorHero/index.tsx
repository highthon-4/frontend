import { AdvisorType } from "../../../models/advisor";
import idealAdvisor from "../../../assets/images/advisor/idealAdvisor.svg";
import realisticAdvisor from "../../../assets/images/advisor/realisticAdvisor.svg";
import sensuousAdvisor from "../../../assets/images/advisor/sensuousAdvisor.svg";

export const ADVISOR_SVG_MAP: Record<AdvisorType, string> = {
  realistic: idealAdvisor,
  ideal: realisticAdvisor,
  sensuous: sensuousAdvisor,
};

export const ADVISOR_TEXT_MAP: Record<
  AdvisorType,
  { title: string; description: string }
> = {
  sensuous: {
    title: "감각적인 사람",
    description: "감각적으로 부드러운 답변을 제공해요",
  },
  ideal: {
    title: "현실적인 사람",
    description: "현실적인 방향으로 조언을 건네요",
  },
  realistic: {
    title: "이상적인 사람",
    description: "냉철한 이성으로 방법을 제시해요",
  },
};

type Props = {
  type: AdvisorType;
  customStyle?: React.CSSProperties;
};

const AdvisorHero = ({ type, customStyle }: Props) => {
  return (
    <img alt={type} src={ADVISOR_SVG_MAP[type]} style={{ ...customStyle }} />
  );
};

export default AdvisorHero;
