import { useMemo } from "react";
import styles from "./Version2StateDefault.module.css";
const Version2StateDefault = ({
  text,
  version2StateDefaultOverflow,
  textColor,
  textFontSize,
  textLetterSpacing,
  textLineHeight,
  textFontFamily,
  textTextTransform,
  hrBorder,
}) => {
  const version2StateDefaultStyle = useMemo(() => {
    return {
      overflow: version2StateDefaultOverflow,
    };
  }, [version2StateDefaultOverflow]);

  const text1Style = useMemo(() => {
    return {
      color: textColor,
      fontSize: textFontSize,
      letterSpacing: textLetterSpacing,
      lineHeight: textLineHeight,
      fontFamily: textFontFamily,
      textTransform: textTextTransform,
    };
  }, [
    textColor,
    textFontSize,
    textLetterSpacing,
    textLineHeight,
    textFontFamily,
    textTextTransform,
  ]);

  const hrStyle = useMemo(() => {
    return {
      border: hrBorder,
    };
  }, [hrBorder]);

  return (
    <div
      className={styles.version2Statedefault}
      style={version2StateDefaultStyle}
    >
      <div className={styles.nav}>
        <div className={styles.text1} style={text1Style}>
          {text}
        </div>
      </div>
      <div className={styles.hr2} style={hrStyle} />
      <div className={styles.hr3} />
    </div>
  );
};

export default Version2StateDefault;
