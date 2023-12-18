import { useMemo } from "react";
import styles from "./VariationWordmarkColourWhiIcon.module.css";
const VariationWordmarkColourWhiIcon = ({
  variationWordmarkColourWh,
  variationWordmarkColourWhWidth,
  variationWordmarkColourWhHeight,
  variationWordmarkColourWhPosition,
  variationWordmarkColourWhTop,
  variationWordmarkColourWhRight,
  variationWordmarkColourWhBottom,
  variationWordmarkColourWhLeft,
  variationWordmarkColourWhMaxWidth,
  variationWordmarkColourWhOverflow,
  variationWordmarkColourWhMaxHeight,
}) => {
  const variationWordmarkColourWhiIconStyle = useMemo(() => {
    return {
      width: variationWordmarkColourWhWidth,
      height: variationWordmarkColourWhHeight,
      position: variationWordmarkColourWhPosition,
      top: variationWordmarkColourWhTop,
      right: variationWordmarkColourWhRight,
      bottom: variationWordmarkColourWhBottom,
      left: variationWordmarkColourWhLeft,
      maxWidth: variationWordmarkColourWhMaxWidth,
      overflow: variationWordmarkColourWhOverflow,
      maxHeight: variationWordmarkColourWhMaxHeight,
    };
  }, [
    variationWordmarkColourWhWidth,
    variationWordmarkColourWhHeight,
    variationWordmarkColourWhPosition,
    variationWordmarkColourWhTop,
    variationWordmarkColourWhRight,
    variationWordmarkColourWhBottom,
    variationWordmarkColourWhLeft,
    variationWordmarkColourWhMaxWidth,
    variationWordmarkColourWhOverflow,
    variationWordmarkColourWhMaxHeight,
  ]);

  return (
    <img
      className={styles.variationwordmarkColourwhiIcon}
      alt=""
      src={variationWordmarkColourWh}
      style={variationWordmarkColourWhiIconStyle}
    />
  );
};

export default VariationWordmarkColourWhiIcon;
