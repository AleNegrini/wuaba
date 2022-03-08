import AppBar from "./AppBar";
import React, { useContext } from "react";
import HomeHero from "./HomeHero";
import { AppContext } from "../../components/ContextProvider";
import SignupModal from "../../components/SignupModal";

const LandingPage: React.FC = () => {
  const { isSignupModalOpen, toggleSignupModalOpen } = useContext(AppContext);

  return (
    <>
      <AppBar />
      <HomeHero />
      {/*<HomeTestimonial />*/}
      <SignupModal open={isSignupModalOpen} handleCloseModal={toggleSignupModalOpen} />
    </>
  );
};

export default LandingPage;
