import { useState } from "react";
import { Wrapper, TooltipWrapper, Text } from "./styled";

type Props = {
  children: React.ReactNode;
  text: string;
};

const Tooltip: React.FC<Props> = ({ children, text }) => {
  const [visible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  TooltipWrapper.shouldForwardProp = (prop: any) => prop !== "visible";

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {visible && (
        <TooltipWrapper visible={visible}>
          <Text>{text}</Text>
        </TooltipWrapper>
      )}
    </Wrapper>
  );
};

export default Tooltip;
