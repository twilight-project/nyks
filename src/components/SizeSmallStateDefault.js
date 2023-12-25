import { useMemo } from "react";
import styles from "./SizeSmallStateDefault.module.css";
const SizeSmallStateDefault = ({
  text,
  icon,
  sizeSmallStateDefaultBorder,
  sizeSmallStateDefaultPosition,
  sizeSmallStateDefaultTop,
  sizeSmallStateDefaultLeft,
  sizeSmallStateDefaultBottom,
  sizeSmallStateDefaultFlexShrink,
  textColor,
}) => {
  const sizeSmallStateDefaultStyle = useMemo(() => {
    return {
      border: sizeSmallStateDefaultBorder,
      position: sizeSmallStateDefaultPosition,
      top: sizeSmallStateDefaultTop,
      left: sizeSmallStateDefaultLeft,
      bottom: sizeSmallStateDefaultBottom,
      flexShrink: sizeSmallStateDefaultFlexShrink,
    };
  }, [
    sizeSmallStateDefaultBorder,
    sizeSmallStateDefaultPosition,
    sizeSmallStateDefaultTop,
    sizeSmallStateDefaultLeft,
    sizeSmallStateDefaultBottom,
    sizeSmallStateDefaultFlexShrink,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className={styles.sizesmallStatedefault}
      style={sizeSmallStateDefaultStyle}
    >
      <div className={styles.text1} style={textStyle}>
        {text}
      </div>
      <img className={styles.icon1} alt="" src={icon} />
    </div>
  );
};

export default SizeSmallStateDefault;
