import styles from "./TwilightCardForm.module.css";
const TwilightCardForm = () => {
  return (
    <div className={styles.section1}>
      <img
        className={styles.backgroundGradientIcon}
        alt=""
        src="/undefined49.png"
      />
      <div className={styles.scrollbar1} />
      <div className={styles.section11}>
        <div className={styles.content}>
          <div className={styles.inOrderTo3}>Twilight for Bitcoin</div>
          <div className={styles.button}>
            <div className={styles.button1}>
              <div className={styles.text1}>Create your Wallet</div>
            </div>
          </div>
        </div>
        <img className={styles.arrowIcon} alt="" src="/undefined50.png" />
        <div className={styles.content1}>
          <div className={styles.inOrderTo4}>
            Twilight pool enables the only private derivatives trading
            experience for bitcoin.
          </div>
          <div className={styles.inOrderTo5}>
            Sitting at the intersection of light and dark pool environment, you
            earn private yield on your bitcoin and receive instant fill on your
            orders without slippage.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwilightCardForm;
