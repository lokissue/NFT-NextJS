import React, {useState} from "react";
import AppLink from "./AppLink";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import buttonStyles from "../styles/Buttons.module.css"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const [isConnected, setIsConnected] = useState(false);
    // const [buttonTItle, setButtonTitle] = useState("Wallet");

    const toggleWallet = () => {
        setIsConnected(!isConnected);
    }

  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          {/* <a className={styles.logo}>2020 Kitties</a> */}
          <a className={styles.logo}>
              <span style={{color: "#f0932b"}}>2022</span>
              <span style={{marginLeft: "0.2em", color: "#22a6b3"}}>Kitty</span>
          </a>
        </Link>
        <nav>
          <button className={`${buttonStyles['wallet-button']}` + (isConnected ? ` ${buttonStyles['wallet-button-disconnect']}` : " ")} onClick={toggleWallet}>{isConnected ? "Disconnect" : "Connect"}</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
