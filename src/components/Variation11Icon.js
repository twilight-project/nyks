import { useMemo } from "react";
import styles from "./Variation11Icon.module.css";
const Variation11Icon = ({
  variation111Variation11,
  variation11IconWidth,
  variation11IconHeight,
  variation11IconPosition,
  variation11IconTop,
  variation11IconRight,
  variation11IconLeft,
  variation11IconMaxWidth,
  variation11IconOverflow,
  variation11IconMaxHeight,
  variation11IconObjectFit,
  variation11IconTransform,
}) => {
  const variation11IconStyle = useMemo(() => {
    return {
      width: variation11IconWidth,
      height: variation11IconHeight,
      position: variation11IconPosition,
      top: variation11IconTop,
      right: variation11IconRight,
      left: variation11IconLeft,
      maxWidth: variation11IconMaxWidth,
      overflow: variation11IconOverflow,
      maxHeight: variation11IconMaxHeight,
      objectFit: variation11IconObjectFit,
      transform: variation11IconTransform,
    };
  }, [
    variation11IconWidth,
    variation11IconHeight,
    variation11IconPosition,
    variation11IconTop,
    variation11IconRight,
    variation11IconLeft,
    variation11IconMaxWidth,
    variation11IconOverflow,
    variation11IconMaxHeight,
    variation11IconObjectFit,
    variation11IconTransform,
  ]);

  return (
    <img
      className={styles.variation11Icon}
      alt=""
      src={variation111Variation11}
      style={variation11IconStyle}
    />
  );
};

export default Variation11Icon;
