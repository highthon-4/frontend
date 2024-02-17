import {FlexContainer} from "./style";
import {FlexJustifyType, FlexAlignType, FlexDirectionType} from "./types";

export interface FlexProps {
  children: React.ReactNode;
  gap?: number;
  justify?: FlexJustifyType;
  align?: FlexAlignType;
  direction?: FlexDirectionType;
  customStyle?: React.CSSProperties;
}

const Flex = ({
  children,
  gap,
  justify,
  align,
  direction,
  customStyle,
}: FlexProps) => {
  return (
    <FlexContainer
      style={{
        ...customStyle,
      }}
      justify={justify}
      align={align}
      gap={gap}
      direction={direction}
      data-testid="flex-test-id"
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;
