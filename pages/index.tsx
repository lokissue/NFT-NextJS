import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className={styles["container"]}>
        <div className={`${styles["content"]} ${styles["left"]}`}>
          <Image
            src="/2020_kitty_head.png"
            alt="kitty-nft"
            width="100%" height="100%" layout="responsive"
          />
        </div>
        <div className={`${styles["content"]} ${styles["right"]}`}>box-2</div>
      </div>
    </Layout>
  );
};

export default Home;

// https://codepen.io/FlorinPop17/pen/vPKWjd
// https://codepen.io/ainalem/pen/EQXjOR
// https://freefrontend.com/css-product-cards/
