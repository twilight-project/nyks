import TransformativeSecurityContaine from "./TransformativeSecurityContaine";
import Version2StateDefault from "./Version2StateDefault";
import MintForm from "./MintForm";
import VariationFullLockupColour from "./VariationFullLockupColour";
import styles from "./TransformativeSecurityCard.module.css";
const TransformativeSecurityCard = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.all}>
        <div className={styles.content}>
          <TransformativeSecurityContaine
            dimensionCode="/undefined3.png"
            dimensionCodeImageUrl="/undefined4.png"
            dimensionCodeText="/undefined5.png"
            propFlexShrink="unset"
            propPosition="absolute"
            propTop="0em"
            propLeft="7.89em"
            propObjectFit="cover"
            propObjectFit1="cover"
            propObjectFit2="cover"
          />
          <div className={styles.navItems}>
            <Version2StateDefault
              text="Mint"
              version2StateDefaultOverflow="hidden"
              textColor="#fff"
              textFontSize="1.33em"
              textLetterSpacing="-0.01em"
              textLineHeight="130%"
              textFontFamily="'Atlas Grotesk'"
              textTextTransform="unset"
              hrBorder="1px dashed #fff"
            />
            <Version2StateDefault
              text="Ecosystem"
              version2StateDefaultOverflow="hidden"
              textColor="#fff"
              textFontSize="1.33em"
              textLetterSpacing="-0.01em"
              textLineHeight="130%"
              textFontFamily="'Atlas Grotesk'"
              textTextTransform="unset"
              hrBorder="1px dashed #fff"
            />
            <Version2StateDefault
              text="Security"
              version2StateDefaultOverflow="hidden"
              textColor="#fff"
              textFontSize="1.33em"
              textLetterSpacing="-0.01em"
              textLineHeight="130%"
              textFontFamily="'Atlas Grotesk'"
              textTextTransform="unset"
              hrBorder="1px dashed #fff"
            />
            <Version2StateDefault
              text="Governance"
              version2StateDefaultOverflow="hidden"
              textColor="#fff"
              textFontSize="1.33em"
              textLetterSpacing="-0.01em"
              textLineHeight="130%"
              textFontFamily="'Atlas Grotesk'"
              textTextTransform="unset"
              hrBorder="1px dashed #fff"
            />
            <div className={styles.leadIcon}>
              <Version2StateDefault
                text="Docs"
                version2StateDefaultOverflow="hidden"
                textColor="#fff"
                textFontSize="1.33em"
                textLetterSpacing="-0.01em"
                textLineHeight="130%"
                textFontFamily="'Atlas Grotesk'"
                textTextTransform="unset"
                hrBorder="1px dashed #fff"
              />
              <img
                className={styles.arrowne1Icon1}
                alt=""
                src="/undefined6.png"
              />
            </div>
            <div className={styles.leadIcon}>
              <Version2StateDefault
                text="TestNet"
                version2StateDefaultOverflow="hidden"
                textColor="#fff"
                textFontSize="1.33em"
                textLetterSpacing="-0.01em"
                textLineHeight="130%"
                textFontFamily="'Atlas Grotesk'"
                textTextTransform="unset"
                hrBorder="1px dashed #fff"
              />
              <img
                className={styles.arrowne1Icon1}
                alt=""
                src="/undefined6.png"
              />
            </div>
          </div>
          <MintForm
            dimensionCode="/undefined6.png"
            productCode="/undefined6.png"
            propPosition="absolute"
            propTop="0em"
            propLeft="69.44em"
            propObjectFit="cover"
            propObjectFit1="cover"
          />
        </div>
        <div className={styles.base}>
          <div className={styles.text8}>
            <div className={styles.text9}>
              © Twilight 2023. All Rights Reserved.
            </div>
            <div className={styles.text10}>{`Terms & Conditions`}</div>
          </div>
          <VariationFullLockupColour
            variationFullLockupColour="/undefined7.png"
            variationFullLockupColourWidth="5.98em"
            variationFullLockupColourHeight="1.33em"
            variationFullLockupColourPosition="absolute"
            variationFullLockupColourTop="2.22em"
            variationFullLockupColourRight="7.97em"
            variationFullLockupColourLeft="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default TransformativeSecurityCard;
