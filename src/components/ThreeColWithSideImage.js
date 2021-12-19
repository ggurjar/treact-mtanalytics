import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "./Headings";
import { SectionDescription } from "./Typography";
import defaultCardImage from "../images/shield-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";
import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";
import FastIconImage from "../images/fast-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";
import SimpleIconImage from "../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Data Engineering, Data Warehousing, Cloud Architecture with Insfrastructure Implementation / Team Extension, and Data Driven Dashboard Applications Development." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security."
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "● Liaise with the support team and take them through the configuration. ● Walkthrough all data source and external interfaces ● Transition the codebase – this will include walkthroughs, documentation, Cloud environment ● Handover all supplementary documentation including user guides, admin guides, etc ● The last step is to shadow the support team and provide support when required"
    },
    { 
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Post project development, We will enable your Cloud-based solution and transition this into a support package. This can either be managed by our client support team or a 3rd Party support team."
    },
    { 
      imageSrc: ReliableIconImage,
      title: "Reliable",
      description: "Our experienced consultants help deliver your project to successful completion and mentor your internal stakeholder teams by adopting a structured process approach. Agile is our preferred approach and works best if there is a strong working relationship between the business, its users, and the development team. Our approach is based on many years of experience in developing systems through exploration, business analysis, and prototyping."
    },
    { 
      imageSrc: FastIconImage, 
      title: "Fast",
      description: "We as a team utilize the skills of people on the ground in the US for business analytics, client liaison, technical architecture and development offshore support, for build and testing prior to client deployment. Teams are structured to exploit technical knowledge and maintain experience within the group, whether working on projects or in agile."
    },
    { 
      imageSrc: SimpleIconImage,
      title: "Easy",
      description: "Our business model is focused on maximizing and utilizing the experience of the senior team, with a flexible and agile approach to upscaling and downscaling FTEs as and when necessary for projects, which delivers cost savings passed on to the client. This is made possible by careful segmentation and simplification of requirements, enabling a streamlined approach to development, where the skills of the IT professional are focused on coding and leaving the nuances of requirement analysis and project management to the respective business leads."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
