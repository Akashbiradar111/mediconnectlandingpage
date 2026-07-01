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
  minHeight: 56,
  px: 3,
  borderRadius: "14px",
  bgcolor: colors.primary,
  "&:hover": {
    bgcolor: colors.primaryDark,
  },
};

const secondaryButtonSx = {
  minHeight: 56,
  px: 3,
  borderRadius: "14px",
  borderColor: colors.primary,
  color: colors.primaryDark,
  bgcolor: colors.white,
  "&:hover": {
    borderColor: colors.primaryDark,
    bgcolor: colors.primaryLight,
  },
};

const iconBadgeSx = {
  width: 44,
  height: 44,
  borderRadius: "14px",
  display: "grid",
  placeItems: "center",
  color: colors.primary,
  bgcolor: colors.primaryLight,
  border: `1px solid rgba(15, 157, 138, 0.12)`,
  flexShrink: 0,
};

const FloatingCard = ({ icon: Icon, title, subtitle, sx }) => (
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      zIndex: 3,
      display: "flex",
      alignItems: "center",
      gap: 1.35,
      px: { xs: 1.5, sm: 1.8 },
      py: 1.35,
      minWidth: { xs: 168, sm: 186 },
      borderRadius: "20px",
      border: `1px solid ${colors.border}`,
      boxShadow: colors.shadowSoft,
      animation: "fadeUp 720ms ease both, floatCard 4s ease-in-out infinite",
      ...sx,
    }}
  >
    <Box sx={{ ...iconBadgeSx, width: 38, height: 38, borderRadius: "12px" }}>
      <Icon sx={{ fontSize: 20 }} />
    </Box>
    <Box>
      <Typography sx={{ fontSize: "0.94rem", fontWeight: 800, lineHeight: 1.1 }}>
        {title}
      </Typography>
      <Typography sx={{ mt: 0.35, fontSize: "0.78rem", color: colors.textSecondary }}>
        {subtitle}
      </Typography>
    </Box>
  </Paper>
);

const Hero = () => {
  return (
    <Box component="section" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 2, md: 1 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: "30px", md: "38px" },
            px: { xs: 2.5, sm: 3.25, md: 4.5, lg: 5.5 },
            py: { xs: 3.5, md: 4.5, lg: 5.2 },
            border: `1px solid ${colors.border}`,
            bgcolor: colors.white,
            boxShadow: colors.shadow,
            background:
              "radial-gradient(circle at top left, rgba(15, 157, 138, 0.14), transparent 34%), linear-gradient(180deg, #ffffff 0%, #fbfffe 100%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: { xs: -100, md: -80 },
              top: { xs: -60, md: -90 },
              width: { xs: 220, md: 320 },
              height: { xs: 220, md: 320 },
              borderRadius: "50%",
              bgcolor: "rgba(15, 157, 138, 0.08)",
              filter: "blur(12px)",
            }}
          />

          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gap: { xs: 5, lg: 2.5 },
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.04fr) minmax(0, 0.96fr)" },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2, animation: "fadeUp 700ms ease both" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.6,
                  py: 1,
                  borderRadius: "999px",
                  bgcolor: colors.primaryLight,
                  border: "1px solid rgba(15, 157, 138, 0.14)",
                  color: colors.primaryDark,
                  fontSize: "0.86rem",
                  fontWeight: 700,
                }}
              >
                <AutoAwesomeRoundedIcon sx={{ fontSize: 18 }} />
                AI-Powered Healthcare Ecosystem
              </Box>

              <Typography
                component="h1"
                sx={{
                  mt: 2.6,
                  maxWidth: 620,
                  fontSize: { xs: "2.7rem", sm: "3.35rem", lg: "4.25rem" },
                  lineHeight: { xs: 1.06, lg: 1.02 },
                  letterSpacing: "-0.045em",
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
                  mt: 2.3,
                  maxWidth: 600,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.85,
                  color: colors.textSecondary,
                }}
              >
                Connect patients, doctors, hospitals, laboratories, pharmacies,
                insurance, and healthcare providers through one secure AI-powered
                platform.
              </Typography>

              <Box
                sx={{
                  mt: 3.2,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
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
                  mt: 4,
                  display: "grid",
                  gap: 1.5,
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
                      alignItems: "flex-start",
                      gap: 1.15,
                      p: 0.25,
                    }}
                  >
                    <Box sx={{ ...iconBadgeSx, width: 40, height: 40 }}>
                      <Icon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.84rem",
                          fontWeight: 800,
                          lineHeight: 1.15,
                          color: colors.textPrimary,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.35,
                          fontSize: "0.75rem",
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
                minHeight: { xs: 360, sm: 420, lg: 540 },
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                animation: "fadeUp 820ms ease both",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: { xs: "8% 6%", md: "6% 8%" },
                  borderRadius: "44% 56% 42% 58% / 44% 36% 64% 56%",
                  background:
                    "radial-gradient(circle at 35% 25%, rgba(15, 157, 138, 0.26), rgba(15, 157, 138, 0.10) 36%, rgba(255, 255, 255, 0) 70%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: "14%",
                  right: "10%",
                  bottom: { xs: 8, md: 14 },
                  height: { xs: 42, md: 52 },
                  borderRadius: "999px",
                  background: "rgba(15, 157, 138, 0.14)",
                  filter: "blur(18px)",
                  zIndex: 1,
                }}
              />

              <Box
                component="img"
                src={doctorsImage}
                alt="Doctor consulting an elderly patient"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 360, sm: 430, md: 510, lg: 564 },
                  height: "auto",
                  position: "relative",
                  zIndex: 2,
                  objectFit: "contain",
                  transform: { xs: "translateY(8px)", md: "translate(12px, 10px)" },
                  filter: "drop-shadow(0 22px 34px rgba(15, 23, 42, 0.12))",
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
