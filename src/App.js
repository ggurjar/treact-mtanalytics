import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "./components/AnimationRevealPage";
import Hero from "./components/TwoColumnWithInput.js";
import Features from "./components/ThreeColWithSideImage.js";
import MainFeature from "./components/TwoColWithButton.js";
import MainFeature2 from "./components/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "./components/TwoColWithSteps.js";
import Pricing from "./components/ThreePlans.js";
// import Testimonial from "./components/TwoColumnWithImageAndRating.js";
import FAQ from "./components/SingleCol.js";
import GetStarted from "./components/GetStarted";
import Footer from "./components/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "./images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "./images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "./images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default function App() {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  return (
    <AnimationRevealPage>
    <Hero roundedHeaderButton={true} />
    <Features
      subheading={<Subheading>Features</Subheading>}
      heading={
        <>
          We have Amazing <HighlightedText>Services.</HighlightedText>
        </>
      }
    />
    <MainFeature
      subheading={<Subheading>Quality Work</Subheading>}
      imageSrc={heroScreenshotImageSrc}
      imageBorder={true}
      imageDecoratorBlob={true}
    />
    <FeatureWithSteps
      subheading={<Subheading>STEPS</Subheading>}
      heading={
        <>
          Easy to <HighlightedText>Get Started.</HighlightedText>
        </>
      }
      textOnLeft={false}
      imageSrc={macHeroScreenshotImageSrc}
      imageDecoratorBlob={true}
      decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
    />
    <MainFeature2
      subheading={<Subheading>VALUES</Subheading>}
      heading={
        <>
          We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
        </>
      }
      imageSrc={prototypeIllustrationImageSrc}
      showDecoratorBlob={false}
      features={[
        {
          Icon: MoneyIcon,
          title: "Affordable",
          description: "We promise to offer you the best rate we can - at par with the industry standard.",
          iconContainerCss: tw`bg-green-300 text-green-800`
        },
        {
          Icon: BriefcaseIcon,
          title: "Professionalism",
          description: "We assure you that our crafts are engineered and created by professional python geeks and javascript developers.",
          iconContainerCss: tw`bg-red-300 text-red-800`
        }
      ]}
    />
    <Pricing
      subheading={<Subheading>Pricing</Subheading>}
      heading={
        <>
          Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
        </>
      }
      plans={[
        {
          name: "Skeleton",
          price: "$24.99",
          duration: "Hourly",
          mainFeature: "For Individuals",
          features: ["01 Senior Javascript Developer", "01 Junior Javascript Developer", "01 Senior Data Engineer", "01 Senior Business Analyst"]
        },
        {
          name: "Body",
          price: "$37.99",
          duration: "Hourly",
          mainFeature: "For Small Businesses",
          features: ["With CI/CD Implementation", "01 Senior UI/UX Developer","01 Senior Javascript Developer", "02 Junior Javascript Developers (on $24.99 HOURLY)","01 Senior Data Engineer", "02 Junior Data Engineers (on $24.99 HOURLY)","01 Senior Business Analyst","01 Junior Business Analyst (on $24.99 HOURLY)","01 Project Manager","Priority Assistance"],
          featured: true
        },
        {
          name: "Athlete",
          price: "$57.99",
          duration: "Hourly",
          mainFeature: "For Large Companies",
          features: ["02 Senior Javascript Developers", "01 Senior UI/UX Developer","02 Junior UI/UX Developers (on $24.99 HOURLY)","05 Junior Javascript Developers (on $24.99 HOURLY)", "01 Senior Data Engineer", "05 Junior Data Engineers (on $24.99 HOURLY)","01 Senior Business Analyst","01 Project Manager","CI/CD Implementation with no extra cost","Personal Optimal Assistance"]
        }
      ]}
    />
    {/* <Testimonial
      subheading={<Subheading>Testimonials</Subheading>}
      heading={
        <>
          Our Clients <HighlightedText>Love Us.</HighlightedText>
        </>
      }
      testimonials={[
        {
          stars: 5,
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          heading: "Amazing User Experience",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          customerName: "Charlotte Hale",
          customerTitle: "Director, Delos Inc."
        },
        {
          stars: 5,
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          heading: "Love the Developer Experience and Design Principles !",
          quote:
            "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, EventsNYC"
        }
      ]}
    /> */}
    <FAQ
      subheading={<Subheading>FAQS</Subheading>}
      heading={
        <>
          You have <HighlightedText>Questions ?</HighlightedText>
        </>
      }
      faqs={[
        {
          question: "Are all the plans easily customizable ?",
          answer:
            "Yes, they all are."
        },
        {
          question: "How long do you usually support an standalone template for ?",
          answer:
            "All plans are set for 3 months renewable period and can be stopped after a completion of every 3 months."
        },
        {
          question: "What kind of payment methods do you accept ?",
          answer:
            "Currently, we support Credit Card payments, and Direct Bank Transfers."
        },
        {
          question: "Is there a discounted subscription service to drive the wheels better ?",
          answer:
            "Yes for Small Businesses and Large companies"
        },
        {
          question: "Do you really support on Communication Channels ?",
          answer:
            "We support on Emails, and Microsoft Teams"
        }
      ]}
    />
    <GetStarted/>
    <Footer />
  </AnimationRevealPage>
  );
}
