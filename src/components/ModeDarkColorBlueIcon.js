import { useMemo } from "react";
import styles from "./ModeDarkColorBlueIcon.module.css";
const ModeDarkColorBlueIcon = ({
  modeDarkColorBlue1ModeDar,
  modeDarkColorBlueIconWidth,
  modeDarkColorBlueIconHeight,
  modeDarkColorBlueIconObjectFit,
  modeDarkColorBlueIconPosition,
  modeDarkColorBlueIconLeft,
  modeDarkColorBlueIconTop,
  modeDarkColorBlueIconTransform,
}) => {
  const modeDarkColorBlueIconStyle = useMemo(() => {
    return {
      width: modeDarkColorBlueIconWidth,
      height: modeDarkColorBlueIconHeight,
      objectFit: modeDarkColorBlueIconObjectFit,
      position: modeDarkColorBlueIconPosition,
      left: modeDarkColorBlueIconLeft,
      top: modeDarkColorBlueIconTop,
      transform: modeDarkColorBlueIconTransform,
    };
  }, [
    modeDarkColorBlueIconWidth,
    modeDarkColorBlueIconHeight,
    modeDarkColorBlueIconObjectFit,
    modeDarkColorBlueIconPosition,
    modeDarkColorBlueIconLeft,
    modeDarkColorBlueIconTop,
    modeDarkColorBlueIconTransform,
  ]);

  return (
    <img
      className={styles.modedarkColorblueIcon}
      alt=""
      src={modeDarkColorBlue1ModeDar}
      style={modeDarkColorBlueIconStyle}
    />
  );
};

export default ModeDarkColorBlueIcon;
