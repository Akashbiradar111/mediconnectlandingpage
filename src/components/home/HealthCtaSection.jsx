import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import colors from "../../constants/colors";
import doctors2NearFooterImage from "../../assets/images/doctors2neartofooter.png";

const primaryButtonSx = {
  minHeight: 44,
  px: 2.2,
  borderRadius: "8px",
  bgcolor: colors.primary,
  fontSize: "0.8rem",
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "none",
  justifyContent: "center",
  "&:hover": {
    bgcolor: colors.primaryDark,
    boxShadow: "none",
  },
};

const secondaryButtonSx = {
  minHeight: 44,
  px: 2.2,
  borderRadius: "8px",
  borderColor: "rgba(15, 157, 138, 0.55)",
  color: colors.primaryDark,
  bgcolor: colors.white,
  fontSize: "0.8rem",
  fontWeight: 700,
  textTransform: "none",
  justifyContent: "center",
  "&:hover": {
    borderColor: colors.primaryDark,
    bgcolor: colors.primaryLight,
  },
};

const HealthCtaSection = () => {
  return (
    <Box component="section" sx={{ pb: { xs: 7, md: 8.5 } }}>
      <Container maxWidth={false} sx={{ width: "min(1440px, calc(100% - 32px))" }}>
        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            gap: { xs: 3, md: 4, lg: 5 },
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.05fr) minmax(320px, 420px)" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 240, sm: 300, lg: 360 },
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "flex-start" },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: "auto 0 0 0",
                height: 80,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.96) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            <Box
              component="img"
              src={doctors2NearFooterImage}
              alt="Doctor guiding a couple through their health plan"
              sx={{
                width: "100%",
                maxWidth: { xs: 360, sm: 430, md: 500, lg: 560 },
                height: "auto",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
              }}
            />
          </Box>

          <Box sx={{ maxWidth: 420 }}>
            <Typography
              component="h2"
              sx={{
                color: colors.textPrimary,
                fontSize: { xs: "2rem", md: "2.5rem" },
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                fontWeight: 800,
              }}
            >
              Ready to take charge of your health?
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                color: colors.textSecondary,
                fontSize: { xs: "0.82rem", md: "0.88rem" },
                lineHeight: 1.6,
              }}
            >
              Book an appointment or consult a doctor online
            </Typography>

            <Box
              sx={{
                mt: 2.2,
                display: "grid",
                gap: 1,
                maxWidth: 280,
              }}
            >
              <Button
                variant="contained"
                startIcon={<CalendarMonthOutlinedIcon sx={{ fontSize: 18 }} />}
                sx={primaryButtonSx}
              >
                Book Appointment
              </Button>

              <Button
                variant="outlined"
                startIcon={<VideocamOutlinedIcon sx={{ fontSize: 18 }} />}
                sx={secondaryButtonSx}
              >
                Consult Online
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HealthCtaSection;
