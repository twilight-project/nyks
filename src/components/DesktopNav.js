import { useMemo } from "react";
import VariationFullLockupColour1 from "./VariationFullLockupColour1";
import SizeSmallStateDefault1 from "./SizeSmallStateDefault1";
import styles from "./DesktopNav.module.css";
const DesktopNav = ({ desktopNavPosition, desktopNavFlexShrink }) => {
  const desktopNavStyle = useMemo(() => {
    return {
      position: desktopNavPosition,
      flexShrink: desktopNavFlexShrink,
    };
  }, [desktopNavPosition, desktopNavFlexShrink]);

  return (
    <div className={styles.desktopNav} style={desktopNavStyle}>
      <VariationFullLockupColour1
        logo="/undefined38.png"
        logo1="/undefined39.png"
        variationFullLockupColourWidth="107.6px"
        variationFullLockupColourHeight="24px"
        variationFullLockupColourPosition="absolute"
        variationFullLockupColourTop="calc(50% - 12px)"
        variationFullLockupColourRight="unset"
        variationFullLockupColourLeft="181px"
        logoIconHeight="72.08%"
        logoIconWidth="15.8%"
        logoIconRight="84.2%"
        logoIconBottom="21.25%"
        logoIconWidth1="78.62%"
        logoIconRight1="-0.09%"
        logoIconLeft="21.47%"
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
          <div className={styles.products}>
            <div className={styles.text5}>Market</div>
            <img className={styles.arrowIcon2} alt="" src="/undefined40.png" />
          </div>
          <div className={styles.products}>
            <div className={styles.text6}>What We Offer</div>
            <img className={styles.arrowIcon2} alt="" src="/undefined41.png" />
          </div>
          <div className={styles.vr1} />
          <div className={styles.leadIcon}>
            <div className={styles.text5}>Docs</div>
            <img
              className={styles.arrowne1Icon2}
              alt=""
              src="/undefined42.png"
            />
          </div>
          <div className={styles.leadIcon}>
            <div className={styles.text5}>TestNet</div>
            <img
              className={styles.arrowne1Icon2}
              alt=""
              src="/undefined42.png"
            />
          </div>
        </div>
        <SizeSmallStateDefault1
          text="Join Discord"
          icon="/undefined43.png"
          sizeSmallStateDefaultBorder="1px solid #fff"
          sizeSmallStateDefaultFlexShrink="unset"
          textLineHeight="120%"
          textColor="#fff"
          textTextAlign="left"
          textLetterSpacing="unset"
        />
      </div>
    </div>
  );
};

export default DesktopNav;
