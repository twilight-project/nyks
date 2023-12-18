import SizeSmallStateDefault1 from "./SizeSmallStateDefault1";
import TransformativeSecurityContaine from "./TransformativeSecurityContaine";
import MintForm from "./MintForm";
import VariationFullLockupColour1 from "./VariationFullLockupColour1";
import styles from "./StayInTheLoopForm.module.css";
const StayInTheLoopForm = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.newsletter}>
        <div className={styles.section01}>
          <div className={styles.content}>
            <div className={styles.inOrderTo3}>Stay in the Loop</div>
            <div className={styles.inOrderTo4}>
              sign up with your email to receive regular news updates.
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.inOrderTo5}>Your Email Address</div>
            <SizeSmallStateDefault1
              text="Sign Up"
              icon="/undefined82.png"
              sizeSmallStateDefaultBorder="1px solid #fff"
              sizeSmallStateDefaultFlexShrink="unset"
              textLineHeight="120%"
              textColor="#fff"
              textTextAlign="left"
              textLetterSpacing="unset"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.all}>
          <div className={styles.content1}>
            <TransformativeSecurityContaine
              dimensionCode="/undefined83.png"
              dimensionCodeImageUrl="/undefined84.png"
              dimensionCodeText="/undefined85.png"
            />
            <MintForm
              dimensionCode="/undefined86.png"
              productCode="/undefined86.png"
            />
          </div>
        </div>
        <div className={styles.base}>
          <div className={styles.text3}>
            <div className={styles.text4}>
              © Twilight 2023. All Rights Reserved.
            </div>
            <div className={styles.text5}>{`Terms & Conditions`}</div>
          </div>
          <VariationFullLockupColour1
            logo="/undefined38.png"
            logo1="/undefined39.png"
            variationFullLockupColourWidth="5.98em"
            variationFullLockupColourHeight="1.33em"
            variationFullLockupColourPosition="absolute"
            variationFullLockupColourTop="2.22em"
            variationFullLockupColourRight="7.97em"
            variationFullLockupColourLeft="unset"
            logoIconHeight="72.08%"
            logoIconWidth="15.8%"
            logoIconRight="84.2%"
            logoIconBottom="21.25%"
            logoIconWidth1="78.62%"
            logoIconRight1="-0.09%"
            logoIconLeft="21.47%"
          />
        </div>
      </div>
    </div>
  );
};

export default StayInTheLoopForm;
