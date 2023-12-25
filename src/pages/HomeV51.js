import DesktopNav from "../components/DesktopNav";
import TwilightCardForm from "../components/TwilightCardForm";
import BitcoinTradingExperienceContai from "../components/BitcoinTradingExperienceContai";
import Container from "../components/Container";
import StayInTheLoopForm from "../components/StayInTheLoopForm";
import styles from "./HomeV51.module.css";
const HomeV51 = () => {
  return (
    <div className={styles.homeV5}>
      <div className={styles.announcementBar}>
        <div className={styles.text6}>
          airdrops, mint, launch , announcements bar
        </div>
      </div>
      <DesktopNav desktopNavPosition="relative" desktopNavFlexShrink="unset" />
      <TwilightCardForm />
      <BitcoinTradingExperienceContai />
      <div className={styles.footer}>
        <img className={styles.backgroundIcon} alt="" src="/undefined78.png" />
        <div className={styles.footer1}>
          <Container />
          <StayInTheLoopForm />
        </div>
      </div>
    </div>
  );
};

export default HomeV51;
