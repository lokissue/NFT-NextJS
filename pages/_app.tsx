import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import Web3Provider from 'web3';

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderReloaded = createWeb3ReactRoot('anotherOne');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderReloaded getLibrary={getLibrary}>
        <Component {...pageProps}>
      </Web3ReactProviderReloaded>
    </Web3ReactProvider>
  );
}

export default MyApp;
