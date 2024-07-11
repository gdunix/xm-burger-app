import React, { memo } from "react";
import Image from "@/components/image";

type Props = {
  src: string;
  name: string;
  onClick?: () => void;
};

const BurgerImg: React.FC<Props> = ({ src, name }) => {
  return <Image src={`https://react-interview.xm.com/img/${src}`} alt={name} />;
};

export default memo(BurgerImg);
