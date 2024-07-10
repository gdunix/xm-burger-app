import { useState } from "react";
import { Wrapper, TooltipWrapper, Text } from "./styled";

type Props = {
  children: React.ReactNode;
  text: string;
};

const Tooltip: React.FC<Props> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {show && (
        <TooltipWrapper className={show ? 'show' : ''}>
          <Text>{text}</Text>
        </TooltipWrapper>
      )}
    </Wrapper>
  );
};

export default Tooltip;
