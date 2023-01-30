import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  CurrencyDollarIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why TransfiPay?",
  desc: "TransfiPay is better than the traditional payment rails for businesses.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Vast integration",
      desc: "TransfiPay easily integrates with your existing finance solutions.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Speed and tracking",
      desc: "With TransfiPay you can always track your invoice status and have the fastest delivery of funds.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Cost effective",
      desc: "TransfiPay's cutting edge tech built on a modern payment rails ensures that you and your customers pay the lowest fees for transactions.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Multi currency support",
      desc: "With payment support across multiple countries ensures your business can process invoice across multiple currencies and geographies.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Developer integration support",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "JS SDK and React component",
      desc: "Integrate payments on your site with our SDKs",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Webhook and callbacks",
      desc: "Stay up to date about every payment and reminders with our on chain webhooks.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Analytics & management",
      desc: "Manage your app/pricing with our complete analytics offering.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
