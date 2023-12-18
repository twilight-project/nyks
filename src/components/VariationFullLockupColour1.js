import { useMemo } from "react";
import VariationWordmarkColourWhiIcon from "./VariationWordmarkColourWhiIcon";
import styles from "./VariationFullLockupColour1.module.css";
const VariationFullLockupColour1 = ({
  logo,
  logo1,
  variationFullLockupColourWidth,
  variationFullLockupColourHeight,
  variationFullLockupColourPosition,
  variationFullLockupColourTop,
  variationFullLockupColourRight,
  variationFullLockupColourLeft,
  logoIconHeight,
  logoIconWidth,
  logoIconRight,
  logoIconBottom,
  logoIconWidth1,
  logoIconRight1,
  logoIconLeft,
}) => {
  const variationFullLockupColour1Style = useMemo(() => {
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

  const logoIconStyle = useMemo(() => {
    return {
      height: logoIconHeight,
      width: logoIconWidth,
      right: logoIconRight,
      bottom: logoIconBottom,
    };
  }, [logoIconHeight, logoIconWidth, logoIconRight, logoIconBottom]);

  const variationWordmarkColourWhiIconStyle = useMemo(() => {
    return {
      width: logoIconWidth1,
      right: logoIconRight1,
      left: logoIconLeft,
    };
  }, [logoIconWidth1, logoIconRight1, logoIconLeft]);

  return (
    <div
      className={styles.variationfullLockupColour}
      style={variationFullLockupColour1Style}
    >
      <img
        className={styles.logoIcon1}
        alt=""
        src={logo}
        style={logoIconStyle}
      />
      <VariationWordmarkColourWhiIcon
        variationWordmarkColourWh="/undefined48.png"
        variationWordmarkColourWhWidth="78.59%"
        variationWordmarkColourWhHeight="100%"
        variationWordmarkColourWhPosition="absolute"
        variationWordmarkColourWhTop="0%"
        variationWordmarkColourWhRight="0%"
        variationWordmarkColourWhBottom="0%"
        variationWordmarkColourWhLeft="21.41%"
        variationWordmarkColourWhMaxWidth="100%"
        variationWordmarkColourWhOverflow="hidden"
        variationWordmarkColourWhMaxHeight="100%"
      />
    </div>
  );
};

export default VariationFullLockupColour1;
