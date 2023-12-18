import { useMemo } from "react";
import styles from "./VariationFullLockupColour.module.css";
const VariationFullLockupColour = ({
  variationFullLockupColour,
  variationFullLockupColourWidth,
  variationFullLockupColourHeight,
  variationFullLockupColourPosition,
  variationFullLockupColourTop,
  variationFullLockupColourRight,
  variationFullLockupColourLeft,
}) => {
  const variationFullLockupColourStyle = useMemo(() => {
    return {
      width: variationFullLockupColourWidth,
      height: variationFullLockupColourHeight,
      position: variationFullLockupColourPosition,
      top: variationFullLockupColourTop,
      right: variationFullLockupColourRight,
      left: variationFullLockupColourLeft,
    };
  }, [
    variationFullLockupColourWidth,
    variationFullLockupColourHeight,
    variationFullLockupColourPosition,
    variationFullLockupColourTop,
    variationFullLockupColourRight,
    variationFullLockupColourLeft,
  ]);

  return (
    <img
      className={styles.variationfullLockupColour}
      alt=""
      src={variationFullLockupColour}
      style={variationFullLockupColourStyle}
    />
  );
};

export default VariationFullLockupColour;
