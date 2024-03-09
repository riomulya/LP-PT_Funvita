import Contact from "../components/Contact";
import { Hero } from "../components/Layout/Hero";
import { Services } from "../components/Layout/Services";
import TheFooter from "../components/Layout/TheFooter";


export default function Home() {


  return (
    <main>
      {/* <Head>
        <link rel="icon" href="/app/logo-pt.png" />
      </Head> */}
      {/* <main> */}
      {/* <Navbar /> */}
      <Hero />
      <Services />
      {/* </main> */}
      <Contact />
      <TheFooter />
    </main>
  );
}
