import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import ServicesSection from "../components/home/ServicesSection";
import ConnectedNetworkSection from "../components/home/ConnectedNetworkSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HealthCtaSection from "../components/home/HealthCtaSection";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <Navbar />
      <Hero />
      <SearchBar />
      <ServicesSection />
      <ConnectedNetworkSection />
      <WhyChooseUsSection />
      <HealthCtaSection />
    </Box>
  );
};

export default Home;
