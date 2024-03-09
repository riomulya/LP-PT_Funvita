import Head from "next/head";
import HideOnScroll from "./components/HideOnScroll";
import { Hero } from "./components/Layout/Hero";
import Navbar from "./components/Layout/Navbar";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/app/logo-pt.png" />
      </Head>
      <main>
        {/* <Navbar /> */}
        <Hero />
      </main>
    </>
  );
}
