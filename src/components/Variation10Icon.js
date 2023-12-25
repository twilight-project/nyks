import { useMemo } from "react";
import styles from "./Variation10Icon.module.css";
const Variation10Icon = ({
  variation10Variation10,
  variation10IconWidth,
  variation10IconHeight,
  variation10IconPosition,
  variation10IconTop,
  variation10IconRight,
  variation10IconBottom,
  variation10IconLeft,
  variation10IconMaxWidth,
  variation10IconOverflow,
  variation10IconMaxHeight,
}) => {
  const variation10IconStyle = useMemo(() => {
    return {
      width: variation10IconWidth,
      height: variation10IconHeight,
      position: variation10IconPosition,
      top: variation10IconTop,
      right: variation10IconRight,
      bottom: variation10IconBottom,
      left: variation10IconLeft,
      maxWidth: variation10IconMaxWidth,
      overflow: variation10IconOverflow,
      maxHeight: variation10IconMaxHeight,
    };
  }, [
    variation10IconWidth,
    variation10IconHeight,
    variation10IconPosition,
    variation10IconTop,
    variation10IconRight,
    variation10IconBottom,
    variation10IconLeft,
    variation10IconMaxWidth,
    variation10IconOverflow,
    variation10IconMaxHeight,
  ]);

  return (
    <img
      className={styles.variation10Icon}
      alt=""
      src={variation10Variation10}
      style={variation10IconStyle}
    />
  );
};

export default Variation10Icon;
