import ModeDarkColorBlueIcon from "./ModeDarkColorBlueIcon";
import SizeSmallStateDefault from "./SizeSmallStateDefault";
import styles from "./StayInTheLoopContainer.module.css";
const StayInTheLoopContainer = () => {
  return (
    <div className={styles.section}>
      <ModeDarkColorBlueIcon
        modeDarkColorBlue1ModeDar="/undefined1.png"
        modeDarkColorBlueIconWidth="96em"
        modeDarkColorBlueIconHeight="43.22em"
        modeDarkColorBlueIconObjectFit="cover"
        modeDarkColorBlueIconPosition="absolute"
        modeDarkColorBlueIconLeft="calc(50% - 864px)"
        modeDarkColorBlueIconTop="unset"
        modeDarkColorBlueIconTransform="unset"
      />
      <div className={styles.copy}>
        <div className={styles.copyChild} />
        <div className={styles.inOrderTo3}>Stay in the Loop</div>
        <div className={styles.inOrderTo4}>
          sign up with your email to receive regular news updates.
        </div>
        <div className={styles.field}>
          <div className={styles.fieldChild} />
          <div className={styles.inOrderTo5}>Your Email Address</div>
          <SizeSmallStateDefault
            text="Sign Up"
            icon="/undefined2.png"
            sizeSmallStateDefaultBorder="1px solid #fff"
            sizeSmallStateDefaultPosition="absolute"
            sizeSmallStateDefaultTop="0.72em"
            sizeSmallStateDefaultLeft="23.5em"
            sizeSmallStateDefaultBottom="unset"
            sizeSmallStateDefaultFlexShrink="unset"
            textColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default StayInTheLoopContainer;
