import React from "react";
import Card from "./Card/Card";
import Progressbar from "./Progressbar/Progressbar";
import styles from "./Landing.module.css";

const Landing = () => {
  const [screenWidth] = React.useState(window.innerWidth);
  return (
    <div className={styles.LandingContainer}>
      <div className={styles.Landing}>
        <div className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.contentHeader}>
              Stake Your <span>$Token</span> And Earn 20% Interest On Staked
              Token
            </h1>
            <p className={styles.contentDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat ullamco laboris nisi ut
              aliquip ex ea commodo
            </p>
            <div className={styles.contentCards}>
              <Card
                header="APY in Percentage"
                body="24% APY"
                style={screenWidth <= 900 ? { borderTopLeftRadius: "8px" } : {}}
              />
              <Card
                header="Current Token Price"
                body="1.384 USDT"
                style={
                  screenWidth <= 900 ? { borderTopRightRadius: "8px" } : {}
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.stakingSection}>
          <div className={styles.stakingWrapper}>
            <div className={styles.contentCards}>
              <Card
                header="Min Staking Amount"
                body="50 USDT"
                style={screenWidth > 900 ? { borderTopLeftRadius: "8px" } : {}}
              />
              <Card
                header="Max Staking Amount"
                body="500 USDT"
                style={screenWidth > 900 ? { borderTopRightRadius: "8px" } : {}}
              />
            </div>
            <div className={styles.stakingCard}>
              <div className={styles.stakingCardField}>
                <div className={styles.stakingCardFieldHeader}>
                  Your Wallet Address
                </div>
                <div className={styles.stakingCardFieldBody}>0x8f5d...8995</div>
              </div>
              <div className={styles.stakingCardField}>
                <div className={styles.stakingCardFieldHeader}>
                  Total Stakable Token
                </div>
                <div className={styles.stakingCardFieldBody}>53746 TOKEN</div>
              </div>
              <div className={styles.stakingCardField}>
                <div className={styles.stakingCardFieldHeader}>
                  Total Stakable Token USD
                </div>
                <div className={styles.stakingCardFieldBody}>$532345</div>
              </div>
              <div className={styles.stakingCardField}>
                <div className={styles.stakingCardFieldHeader}>Unstake Fee</div>
                <div className={styles.stakingCardFieldBody}>15%</div>
              </div>
              <div className={styles.stakingCardField}>
                <div className={styles.stakingCardFieldHeader}>
                  Lock Deadline
                </div>
                <div className={styles.stakingCardFieldBody}>30 Days</div>
              </div>
              <div className={styles.stakingCardVerticalField}>
                <div className={styles.stakingCardFieldHeader}>Pool Filled</div>
                <Progressbar bgcolor="#00c88c" progress="45" height={20} />
              </div>
              <div className={styles.stakingCardVerticalField}>
                <div className={styles.stakingCardFieldHeader}>
                  Stake Your Token
                </div>
                <div className={styles.stakingTokenFieldBody}>
                  <input placeholder="Enter Amount of Tokens" />
                  <div>MAX</div>
                </div>
              </div>
              <div className={styles.stakingButtons}>
                <button>STAKE</button>
                <button>UNSTAKE</button>
              </div>
              <button className={styles.emergencyWithdrawButton}>
                EMERGENCY WITHDRAW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
