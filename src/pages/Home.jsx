import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import ServicesSection from "../components/home/ServicesSection";
import ConnectedNetworkSection from "../components/home/ConnectedNetworkSection";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(15, 157, 138, 0.08), transparent 24%), linear-gradient(180deg, #ffffff 0%, #fbfffe 42%, #f4fbf9 100%)",
      }}
    >
      <Navbar />
      <Hero />
      <SearchBar />
      <ServicesSection />
      <ConnectedNetworkSection />
    </Box>
  );
};

export default Home;
