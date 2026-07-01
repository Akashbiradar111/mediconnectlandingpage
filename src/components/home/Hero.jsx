import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import colors from "../../constants/colors";
import doctorsImage from "../../assets/images/doctors.png";

const trustItems = [
  {
    icon: VerifiedUserOutlinedIcon,
    title: "Trusted by",
    caption: "1M+ patients",
  },
  {
    icon: WorkspacePremiumOutlinedIcon,
    title: "Verified",
    caption: "Healthcare experts",
  },
  {
    icon: LockOutlinedIcon,
    title: "Secure & Confidential",
    caption: "Your data is protected",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "24/7 Care",
    caption: "We are here for you",
  },
];

const floatingCards = [
  {
    icon: PersonSearchRoundedIcon,
    title: "Find Doctors",
    subtitle: "Verified specialists",
    sx: {
      left: { xs: "2%", sm: "-1%", md: "-4%" },
      top: { xs: "2%", sm: "10%", md: "16%" },
      animationDelay: "180ms",
    },
  },
  {
    icon: VideocamOutlinedIcon,
    title: "Consult Online",
    subtitle: "Connect in few seconds",
    sx: {
      right: { xs: "1%", sm: "-3%", md: "-4%" },
      top: { xs: "5%", sm: "-1%", md: "2%" },
      animationDelay: "260ms",
    },
  },
  {
    icon: ScienceOutlinedIcon,
    title: "Lab Tests",
    subtitle: "Book tests at home",
    sx: {
      left: { xs: "20%", sm: "24%", md: "16%" },
      bottom: { xs: "0%", sm: "5%", md: "8%" },
      animationDelay: "340ms",
    },
  },
];

const primaryButtonSx = {
  minHeight: 44,
  px: 2.2,
  borderRadius: "10px",
  bgcolor: colors.primary,
  fontSize: "0.84rem",
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    bgcolor: colors.primaryDark,
    boxShadow: "none",
  },
};

const secondaryButtonSx = {
  minHeight: 44,
  px: 2.2,
  borderRadius: "10px",
  borderColor: colors.primary,
  color: colors.primaryDark,
  bgcolor: colors.white,
  fontSize: "0.84rem",
  fontWeight: 700,
  textTransform: "none",
  "&:hover": {
    borderColor: colors.primaryDark,
    bgcolor: colors.primaryLight,
  },
};

const iconBadgeSx = {
  width: 32,
  height: 32,
  borderRadius: "10px",
  display: "grid",
  placeItems: "center",
  color: colors.primary,
  bgcolor: "rgba(15, 157, 138, 0.08)",
  flexShrink: 0,
};

const FloatingCard = ({ icon: Icon, title, subtitle, sx }) => (
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      zIndex: 3,
      alignItems: "center",
      gap: 1,
      px: { xs: 1.2, sm: 1.4 },
      py: 1,
      minWidth: { xs: 152, sm: 168 },
      borderRadius: "14px",
      border: `1px solid ${colors.border}`,
      boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
      animation: "fadeUp 720ms ease both, floatCard 4s ease-in-out infinite",
      bgcolor: colors.white,
      display: { xs: "none", sm: "flex" },
      ...sx,
    }}
  >
    <Box sx={iconBadgeSx}>
      <Icon sx={{ fontSize: 18 }} />
    </Box>
    <Box>
      <Typography sx={{ fontSize: "0.8rem", fontWeight: 800, lineHeight: 1.15 }}>
        {title}
      </Typography>
      <Typography sx={{ mt: 0.2, fontSize: "0.68rem", color: colors.textSecondary }}>
        {subtitle}
      </Typography>
    </Box>
  </Paper>
);

const Hero = () => {
  return (
    <Box component="section" sx={{ pt: { xs: 2.5, md: 3.5 }, pb: { xs: 2, md: 2.5 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Box
          sx={{
            position: "relative",
            overflow: "visible",
            px: 0,
            py: 0,
            background: "transparent",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: { xs: -60, md: -18 },
              top: { xs: -30, md: 24 },
              width: { xs: 160, md: 250 },
              height: { xs: 160, md: 250 },
              borderRadius: "50%",
              bgcolor: "rgba(15, 157, 138, 0.06)",
              filter: "blur(30px)",
            }}
          />

          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gap: { xs: 4.5, lg: 1.5 },
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.96fr) minmax(0, 1.04fr)" },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2, animation: "fadeUp 700ms ease both" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.7,
                  px: 1.25,
                  py: 0.7,
                  borderRadius: "999px",
                  bgcolor: "rgba(15, 157, 138, 0.08)",
                  border: "1px solid rgba(15, 157, 138, 0.14)",
                  color: colors.primaryDark,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                }}
              >
                <AutoAwesomeRoundedIcon sx={{ fontSize: 15 }} />
                AI-Powered Healthcare Ecosystem
              </Box>

              <Typography
                component="h1"
                sx={{
                  mt: 2.1,
                  maxWidth: 560,
                  fontSize: { xs: "2.35rem", sm: "3.2rem", lg: "3.72rem" },
                  lineHeight: { xs: 1.08, lg: 1.1 },
                  letterSpacing: "-0.04em",
                  fontWeight: 800,
                  color: colors.textPrimary,
                }}
              >
                One Platform for the Entire{" "}
                <Box component="span" sx={{ color: colors.primary }}>
                  Healthcare
                </Box>{" "}
                Ecosystem
              </Typography>

              <Typography
                sx={{
                  mt: 1.8,
                  maxWidth: 500,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                  color: colors.textSecondary,
                }}
              >
                Connect patients, doctors, hospitals, laboratories, pharmacies,
                insurance, and healthcare providers through one secure AI-powered
                platform.
              </Typography>

              <Box
                sx={{
                  mt: 2.6,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<CalendarMonthOutlinedIcon />}
                  sx={primaryButtonSx}
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<VideocamOutlinedIcon />}
                  sx={secondaryButtonSx}
                >
                  Consult Online
                </Button>
              </Box>

              <Box
                sx={{
                  mt: 2.8,
                  display: "grid",
                  gap: { xs: 1.2, md: 1.5 },
                  gridTemplateColumns: {
                    xs: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(4, minmax(0, 1fr))",
                  },
                }}
              >
                {trustItems.map(({ icon: Icon, title, caption }) => (
                  <Box
                    key={title}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                    }}
                  >
                    <Icon sx={{ fontSize: 18, color: colors.primary }} />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.74rem",
                          fontWeight: 800,
                          lineHeight: 1.15,
                          color: colors.textPrimary,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.2,
                          fontSize: "0.68rem",
                          lineHeight: 1.45,
                          color: colors.textMuted,
                        }}
                      >
                        {caption}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 300, sm: 380, lg: 470 },
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                animation: "fadeUp 820ms ease both",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: { xs: "12% 10%", md: "10% 12%" },
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(15, 157, 138, 0.12), rgba(15, 157, 138, 0.04) 42%, rgba(255, 255, 255, 0) 74%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: "18%",
                  right: "14%",
                  bottom: { xs: 12, md: 18 },
                  height: { xs: 30, md: 38 },
                  borderRadius: "999px",
                  background: "rgba(15, 157, 138, 0.12)",
                  filter: "blur(20px)",
                  zIndex: 1,
                }}
              />

              <Box
                component="img"
                src={doctorsImage}
                alt="Doctor consulting an elderly patient"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 320, sm: 390, md: 470, lg: 530 },
                  height: "auto",
                  position: "relative",
                  zIndex: 2,
                  objectFit: "contain",
                  transform: { xs: "translateY(6px)", md: "translate(8px, 8px)" },
                  filter: "drop-shadow(0 18px 28px rgba(15, 23, 42, 0.1))",
                }}
              />

              {floatingCards.map((card) => (
                <FloatingCard key={card.title} {...card} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
