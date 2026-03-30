import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zahid Basha | Performance Marketer | Meta Ads Expert</title>
        <meta
          name="description"
          content="Zahid Basha - Digital Marketing Specialist specializing in Meta Ads & Real Estate Lead Generation. ₹2.3 Cost Per Lead | ₹1.5L+ Ad Spend Managed"
        />
        <meta
          name="keywords"
          content="meta ads, lead generation, digital marketing, real estate marketing, performance marketing, facebook ads, zahid basha, dubai marketing"
        />
        <meta name="author" content="Zahid Basha" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
