import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>TransfiPay</title>
        <meta
          name="description"
          content="TransfiPay helps your business with the fastest, cheapest and end to end solutions for cross border and foreign payments.
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="TransfiPay benefits"
        title="Future of finance to accept payments globally">
        TransfiPay is designed for the future of finance and payments for businesses.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <div id="developers"><Benefits imgPos="right" data={benefitTwo} /></div> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <div id="testimonials">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our early users have to say">
        </SectionTitle>
        <Testimonials />
        </div>
      <div id="faq">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answers to most frequently asked merchant and customer questions.
        </SectionTitle>
        <Faq />
      </div>
      <Cta />
      <Footer />
    </>
  );
}
