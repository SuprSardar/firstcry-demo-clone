import { Fragment } from "react";

import Header from "../../components/header";
import Slider from "./components/slider";
import PremiumBoutiques from "./components/premium-boutiques";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <PremiumBoutiques />
      <Footer />

      <div data-designer-background />
    </Fragment>
  );
};

export default Home;
