import React, { memo } from "react";
import useLazyLoad from "./useLazyLoad";
import Loader from "../loader";
import { Wrapper, Img } from "./styled";

type Props = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

const Image: React.FC<Props> = ({ src, ...rest }) => {
  const { loading, imgSrc } = useLazyLoad(src);
  return loading ? (
    <Loader />
  ) : (
    <Wrapper>
      <Img src={imgSrc} {...rest} />
    </Wrapper>
  );
};

export default memo(Image);
