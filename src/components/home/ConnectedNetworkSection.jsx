import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import colors from "../../constants/colors";

const networkItems = [
  {
    title: "Patients",
    description: "Manage your health and access care",
    icon: PersonalInjuryOutlinedIcon,
  },
  {
    title: "Doctors",
    description: "Doctor care and consultations",
    icon: MedicalServicesOutlinedIcon,
  },
  {
    title: "Hospitals",
    description: "Streamline operations and patient care",
    icon: LocalHospitalOutlinedIcon,
  },
  {
    title: "Laboratories",
    description: "Accurate tests and timely reports",
    icon: ScienceOutlinedIcon,
  },
  {
    title: "Pharmacies",
    description: "Dispense and deliver medicine with ease",
    icon: LocalPharmacyOutlinedIcon,
  },
  {
    title: "Insurance",
    description: "Simplify policies and claims",
    icon: ShieldOutlinedIcon,
  },
];

const ConnectedNetworkSection = () => {
  return (
    <Box component="section" sx={{ pb: { xs: 6, md: 7 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Box
          sx={{
            position: "relative",
            px: 0,
            py: 0,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: colors.primaryDark,
              fontSize: { xs: "0.72rem", md: "0.76rem" },
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            One connected healthcare network
          </Typography>

          <Typography
            component="h2"
            sx={{
              mt: 1.1,
              mx: "auto",
              maxWidth: 560,
              textAlign: "center",
              color: colors.textPrimary,
              fontSize: { xs: "1.9rem", sm: "2.25rem", lg: "2.55rem" },
              lineHeight: { xs: 1.2, md: 1.18 },
              letterSpacing: "-0.04em",
              fontWeight: 800,
            }}
          >
            Built to connect every participant in the healthcare journey
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              mx: "auto",
              maxWidth: 640,
              textAlign: "center",
              color: colors.textSecondary,
              fontSize: { xs: "0.88rem", md: "0.95rem" },
              lineHeight: 1.7,
            }}
          >
            From booking to recovery, we make healthcare simple, accessible and
            personalized for you.
          </Typography>

          <Box
            sx={{
              position: "relative",
              mt: { xs: 3.5, md: 4.5 },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                position: "absolute",
                left: "8%",
                right: "8%",
                top: 24,
                borderTop: "1px solid rgba(126, 138, 152, 0.22)",
              }}
            />

            <Box
              sx={{
                display: "grid",
                gap: { xs: 2.2, sm: 2, md: 2.5, lg: 0 },
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                  lg: "repeat(6, minmax(0, 1fr))",
                },
              }}
            >
              {networkItems.map(({ icon: Icon, title, description }) => (
                <Box
                  key={title}
                  sx={{
                    position: "relative",
                    px: { xs: 0.8, lg: 0.6 },
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      mx: "auto",
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: colors.white,
                      border: `1px solid rgba(15, 157, 138, 0.14)`,
                      boxShadow: "0 8px 18px rgba(15, 23, 42, 0.05)",
                      color: colors.primaryDark,
                    }}
                  >
                    <Icon sx={{ fontSize: 22 }} />
                  </Box>

                  <Typography
                    sx={{
                      mt: 1.35,
                      color: colors.textPrimary,
                      fontSize: "0.88rem",
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    {title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.55,
                      mx: "auto",
                      maxWidth: 136,
                      color: colors.textSecondary,
                      fontSize: "0.72rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: { xs: 3.6, md: 4.2 }, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                minHeight: 40,
                px: 2.2,
                borderRadius: "10px",
                bgcolor: colors.primary,
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: colors.primaryDark,
                  boxShadow: "none",
                },
              }}
            >
              Explore Ecosystem
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ConnectedNetworkSection;
