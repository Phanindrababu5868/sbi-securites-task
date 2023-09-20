import SIPCalculator from "./SIPCalculator/page";
import MutualFundHome from "./MutualFundHome/page";
import MutualFundCategories from "./MutualFundCategories/page";
import InvestmentIdeas from "./InvestmentIdeas/page";
import MagicOfCompounding from "./MagicOfCompounding/page";
const MutualFunds = () => {
  return (
    <>
      <MutualFundHome />
      <MutualFundCategories />
      <SIPCalculator />
      <InvestmentIdeas />
      <MagicOfCompounding />
    </>
  );
};

export default MutualFunds;
