import { useMemo } from "react";
import styles from "./SizeSmallStateDefault1.module.css";
const SizeSmallStateDefault1 = ({
  text,
  icon,
  sizeSmallStateDefaultBorder,
  sizeSmallStateDefaultFlexShrink,
  textLineHeight,
  textColor,
  textTextAlign,
  textLetterSpacing,
}) => {
  const sizeSmallStateDefault1Style = useMemo(() => {
    return {
      border: sizeSmallStateDefaultBorder,
      flexShrink: sizeSmallStateDefaultFlexShrink,
    };
  }, [sizeSmallStateDefaultBorder, sizeSmallStateDefaultFlexShrink]);

  const text2Style = useMemo(() => {
    return {
      lineHeight: textLineHeight,
      color: textColor,
      textAlign: textTextAlign,
      letterSpacing: textLetterSpacing,
    };
  }, [textLineHeight, textColor, textTextAlign, textLetterSpacing]);

  return (
    <div
      className={styles.sizesmallStatedefault}
      style={sizeSmallStateDefault1Style}
    >
      <div className={styles.text1} style={text2Style}>
        {text}
      </div>
      <img className={styles.icon1} alt="" src={icon} />
    </div>
  );
};

export default SizeSmallStateDefault1;
