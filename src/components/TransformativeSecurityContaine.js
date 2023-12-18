import { useMemo } from "react";
import styles from "./TransformativeSecurityContaine.module.css";
const TransformativeSecurityContaine = ({
  dimensionCode,
  dimensionCodeImageUrl,
  dimensionCodeText,
  propFlexShrink,
  propPosition,
  propTop,
  propLeft,
  propObjectFit,
  propObjectFit1,
  propObjectFit2,
}) => {
  const leftStyle = useMemo(() => {
    return {
      flexShrink: propFlexShrink,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propFlexShrink, propPosition, propTop, propLeft]);

  const discordIconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const twitterIconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit1,
    };
  }, [propObjectFit1]);

  const githubIconStyle = useMemo(() => {
    return {
      objectFit: propObjectFit2,
    };
  }, [propObjectFit2]);

  return (
    <div className={styles.left} style={leftStyle}>
      <div className={styles.text}>
        <div className={styles.inOrderToContainer}>
          <p className={styles.twilightCreates}>{`Twilight creates   `}</p>
          <p className={styles.twilightCreates}>
            {" "}
            transformative security for your Bitcoin.
          </p>
        </div>
        <div className={styles.inOrderToContainer1}>
          <p
            className={styles.twilightCreates}
          >{`Our goal is to leverage technology `}</p>
          <p className={styles.twilightCreates}>
            and bring Bitcoin’s legacy values to life.
          </p>
        </div>
      </div>
      <div className={styles.socials}>
        <img
          className={styles.discordIcon1}
          alt=""
          src={dimensionCode}
          style={discordIconStyle}
        />
        <img
          className={styles.twitterIcon1}
          alt=""
          src={dimensionCodeImageUrl}
          style={twitterIconStyle}
        />
        <img
          className={styles.githubIcon1}
          alt=""
          src={dimensionCodeText}
          style={githubIconStyle}
        />
      </div>
    </div>
  );
};

export default TransformativeSecurityContaine;
