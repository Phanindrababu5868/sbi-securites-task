import CardCarousel from "./Testimonials/page";

import InvetmentCarousel from "./Articals/page";
import Awards from "./Awards/page";
import Services from "./Services/page";
import OpenAct from "./openAct/page";
import TradingPlatform from "./TradingPlatforms/page";

const cards = [
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
];

const HomePage = () => {
  return (
    <>
      <Services />
      <TradingPlatform />
      <CardCarousel cards={cards} />
      <Awards />
      <OpenAct />
      <InvetmentCarousel cards={cards} />
    </>
  );
};

export default HomePage;
