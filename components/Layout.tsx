import React from "react";
import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>NFT - Next.js | {pageTitle}</title>
      </Head>
      <div className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
