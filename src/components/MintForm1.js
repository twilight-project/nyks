import VariationFullLockupColour from "./VariationFullLockupColour";
import SizeSmallStateDefault from "./SizeSmallStateDefault";
import styles from "./MintForm1.module.css";
const MintForm1 = () => {
  return (
    <div className={styles.nav}>
      <VariationFullLockupColour
        variationFullLockupColour="/undefined7.png"
        variationFullLockupColourWidth="5.98em"
        variationFullLockupColourHeight="1.33em"
        variationFullLockupColourPosition="absolute"
        variationFullLockupColourTop="calc(50% - 12px)"
        variationFullLockupColourRight="unset"
        variationFullLockupColourLeft="10.06em"
      />
      <img
        className={styles.technicalElementIcon2}
        alt=""
        src="/undefined18.png"
      />
      <img
        className={styles.technicalElementIcon3}
        alt=""
        src="/undefined18.png"
      />
      <div className={styles.navItems}>
        <div className={styles.navItems1}>
          <div className={styles.text12}>Mint</div>
          <div className={styles.text12}>Trade</div>
          <div className={styles.text12}>Deploy</div>
          <div className={styles.text12}>Governance</div>
          <div className={styles.vr2} />
          <div className={styles.leadIcon}>
            <div className={styles.text12}>Docs</div>
            <img
              className={styles.arrowne1Icon4}
              alt=""
              src="/undefined19.png"
            />
          </div>
          <div className={styles.leadIcon}>
            <div className={styles.text12}>TestNet</div>
            <img
              className={styles.arrowne1Icon4}
              alt=""
              src="/undefined19.png"
            />
          </div>
        </div>
        <SizeSmallStateDefault
          text="Join Discord"
          icon="/undefined20.png"
          sizeSmallStateDefaultBorder="1px solid #08081c"
          sizeSmallStateDefaultPosition="unset"
          sizeSmallStateDefaultTop="unset"
          sizeSmallStateDefaultLeft="unset"
          sizeSmallStateDefaultBottom="unset"
          sizeSmallStateDefaultFlexShrink="unset"
          textColor="#08081c"
        />
      </div>
      <div className={styles.navItems2}>
        <div className={styles.navItems3}>
          <div className={styles.products}>
            <div className={styles.text12}>Market</div>
            <img className={styles.arrowIcon2} alt="" src="/undefined21.png" />
          </div>
          <div className={styles.products}>
            <div className={styles.text19}>What We Offer</div>
            <img className={styles.arrowIcon2} alt="" src="/undefined21.png" />
          </div>
          <div className={styles.vr3} />
          <div className={styles.leadIcon}>
            <div className={styles.text12}>Docs</div>
            <img
              className={styles.arrowne1Icon4}
              alt=""
              src="/undefined22.png"
            />
          </div>
          <div className={styles.leadIcon}>
            <div className={styles.text12}>TestNet</div>
            <img
              className={styles.arrowne1Icon4}
              alt=""
              src="/undefined22.png"
            />
          </div>
        </div>
        <SizeSmallStateDefault
          text="Join Discord"
          icon="/undefined2.png"
          sizeSmallStateDefaultBorder="1px solid #fff"
          sizeSmallStateDefaultPosition="unset"
          sizeSmallStateDefaultTop="unset"
          sizeSmallStateDefaultLeft="unset"
          sizeSmallStateDefaultBottom="unset"
          sizeSmallStateDefaultFlexShrink="unset"
          textColor="#fff"
        />
      </div>
    </div>
  );
};

export default MintForm1;
