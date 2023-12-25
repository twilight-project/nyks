import { useMemo } from "react";
import Version2StateDefault1 from "./Version2StateDefault1";
import styles from "./MintForm.module.css";
const MintForm = ({
  dimensionCode,
  productCode,
  propPosition,
  propTop,
  propLeft,
  propObjectFit,
  propObjectFit1,
}) => {
  const navItemsStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  const arrowne1IconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const iconArrowStyle = useMemo(() => {
    return {
      objectFit: propObjectFit1,
    };
  }, [propObjectFit1]);

  return (
    <div className={styles.navItems} style={navItemsStyle}>
      <Version2StateDefault1
        text="Mint"
        version2StateDefaultOverflow="hidden"
        textFontSize="1.11em"
        textLetterSpacing="-0.02em"
        textLineHeight="140%"
        textFontFamily="'Andale Mono'"
        textColor="#fff"
        textTextTransform="uppercase"
        hrBorder="1px dashed #fff"
      />
      <Version2StateDefault1
        text="Ecosystem"
        version2StateDefaultOverflow="hidden"
        textFontSize="1.11em"
        textLetterSpacing="-0.02em"
        textLineHeight="140%"
        textFontFamily="'Andale Mono'"
        textColor="#fff"
        textTextTransform="uppercase"
        hrBorder="1px dashed #fff"
      />
      <Version2StateDefault1
        text="Security"
        version2StateDefaultOverflow="hidden"
        textFontSize="1.11em"
        textLetterSpacing="-0.02em"
        textLineHeight="140%"
        textFontFamily="'Andale Mono'"
        textColor="#fff"
        textTextTransform="uppercase"
        hrBorder="1px dashed #fff"
      />
      <Version2StateDefault1
        text="Governance"
        version2StateDefaultOverflow="hidden"
        textFontSize="1.11em"
        textLetterSpacing="-0.02em"
        textLineHeight="140%"
        textFontFamily="'Andale Mono'"
        textColor="#fff"
        textTextTransform="uppercase"
        hrBorder="1px dashed #fff"
      />
      <div className={styles.leadIcon}>
        <Version2StateDefault1
          text="Docs"
          version2StateDefaultOverflow="hidden"
          textFontSize="1.11em"
          textLetterSpacing="-0.02em"
          textLineHeight="140%"
          textFontFamily="'Andale Mono'"
          textColor="#fff"
          textTextTransform="uppercase"
          hrBorder="1px dashed #fff"
        />
        <img
          className={styles.arrowne1Icon1}
          alt=""
          src={dimensionCode}
          style={arrowne1IconStyle}
        />
      </div>
      <div className={styles.leadIcon}>
        <Version2StateDefault1
          text="TestNet"
          version2StateDefaultOverflow="hidden"
          textFontSize="1.11em"
          textLetterSpacing="-0.02em"
          textLineHeight="140%"
          textFontFamily="'Andale Mono'"
          textColor="#fff"
          textTextTransform="uppercase"
          hrBorder="1px dashed #fff"
        />
        <img
          className={styles.arrowne1Icon1}
          alt=""
          src={productCode}
          style={iconArrowStyle}
        />
      </div>
    </div>
  );
};

export default MintForm;
