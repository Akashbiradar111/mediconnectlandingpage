import {
  Box,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import colors from "../../constants/colors";

const serviceCards = [
  {
    title: "Doctor Consultation",
    description: "Book appointments with verified doctors across specialities.",
    icon: LocalHospitalOutlinedIcon,
  },
  {
    title: "Lab Tests",
    description: "Book lab tests at home with certified laboratories.",
    icon: ScienceOutlinedIcon,
  },
  {
    title: "Online Pharmacy",
    description: "Order medicines online and get them delivered to your doorstep.",
    icon: LocalPharmacyOutlinedIcon,
  },
  {
    title: "Health Records",
    description: "Access prescriptions, reports and medical history securely.",
    icon: DescriptionOutlinedIcon,
  },
  {
    title: "Insurance Claims",
    description: "Verify coverage, file claims and track approvals.",
    icon: ShieldOutlinedIcon,
  },
  {
    title: "Remote Monitoring",
    description: "Track your vitals and stay connected with your care team.",
    icon: MonitorHeartOutlinedIcon,
  },
];

const ServicesSection = () => {
  return (
    <Box component="section" sx={{ pb: { xs: 7, md: 8.5 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Typography
          sx={{
            color: colors.primaryDark,
            fontSize: { xs: "0.72rem", md: "0.76rem" },
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Everything you need for better healthcare
        </Typography>

        <Typography
          component="h2"
          sx={{
            mt: 1.1,
            maxWidth: 760,
            color: colors.textPrimary,
            fontSize: { xs: "1.9rem", sm: "2.3rem", lg: "2.7rem" },
            lineHeight: { xs: 1.2, md: 1.18 },
            letterSpacing: "-0.04em",
            fontWeight: 800,
          }}
        >
          Access care, diagnostics, medicines, records, insurance, and AI-powered
          health services from a{" "}
          <Box
            component="span"
            sx={{
              color: colors.primaryDark,
            }}
          >
            single platform.
          </Box>
        </Typography>

        <Box
          sx={{
            mt: { xs: 2.8, md: 3.5 },
            display: "grid",
            gap: { xs: 1.2, md: 1.5 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(6, minmax(0, 1fr))",
            },
          }}
        >
          {serviceCards.map(({ icon: Icon, title, description }) => (
            <Paper
              key={title}
              elevation={0}
              sx={{
                minHeight: 192,
                p: { xs: 2, md: 1.8 },
                borderRadius: "16px",
                border: `1px solid ${colors.border}`,
                bgcolor: colors.white,
                boxShadow: "0 8px 18px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "rgba(15, 157, 138, 0.18)",
                  boxShadow: "0 12px 22px rgba(15, 23, 42, 0.06)",
                },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "rgba(15, 157, 138, 0.08)",
                  color: colors.primary,
                  border: "1px solid rgba(15, 157, 138, 0.12)",
                }}
              >
                <Icon sx={{ fontSize: 20 }} />
              </Box>

              <Typography
                sx={{
                  mt: 1.8,
                  color: colors.textPrimary,
                  fontSize: "0.95rem",
                  lineHeight: 1.25,
                  fontWeight: 800,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,
                  color: colors.textSecondary,
                  fontSize: "0.76rem",
                  lineHeight: 1.55,
                  maxWidth: 148,
                }}
              >
                {description}
              </Typography>

              <Box sx={{ mt: "auto", display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  aria-label={`Open ${title}`}
                  sx={{
                    width: 28,
                    height: 28,
                    bgcolor: "#F7F9FA",
                    color: colors.textMuted,
                    "&:hover": {
                      bgcolor: colors.primaryLight,
                      color: colors.primaryDark,
                    },
                  }}
                >
                  <ChevronRightRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
