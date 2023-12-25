import { useMemo } from "react";
import styles from "./Version2StateDefault1.module.css";
const Version2StateDefault1 = ({
  text,
  version2StateDefaultOverflow,
  textFontSize,
  textLetterSpacing,
  textLineHeight,
  textFontFamily,
  textColor,
  textTextTransform,
  hrBorder,
}) => {
  const version2StateDefault1Style = useMemo(() => {
    return {
      overflow: version2StateDefaultOverflow,
    };
  }, [version2StateDefaultOverflow]);

  const text3Style = useMemo(() => {
    return {
      fontSize: textFontSize,
      letterSpacing: textLetterSpacing,
      lineHeight: textLineHeight,
      fontFamily: textFontFamily,
      color: textColor,
      textTransform: textTextTransform,
    };
  }, [
    textFontSize,
    textLetterSpacing,
    textLineHeight,
    textFontFamily,
    textColor,
    textTextTransform,
  ]);

  const hr1Style = useMemo(() => {
    return {
      border: hrBorder,
    };
  }, [hrBorder]);

  return (
    <div
      className={styles.version2Statedefault}
      style={version2StateDefault1Style}
    >
      <div className={styles.nav}>
        <div className={styles.text1} style={text3Style}>
          {text}
        </div>
      </div>
      <div className={styles.hr2} style={hr1Style} />
      <div className={styles.hr3} />
    </div>
  );
};

export default Version2StateDefault1;
