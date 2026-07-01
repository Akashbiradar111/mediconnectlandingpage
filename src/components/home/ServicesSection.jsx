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
    <Box component="section" sx={{ pb: { xs: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Typography
          sx={{
            color: colors.primaryDark,
            fontSize: { xs: "0.78rem", md: "0.84rem" },
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
            mt: 1.7,
            maxWidth: 860,
            color: colors.textPrimary,
            fontSize: { xs: "2rem", sm: "2.55rem", lg: "3rem" },
            lineHeight: { xs: 1.18, md: 1.14 },
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
              fontStyle: "italic",
            }}
          >
            single platform.
          </Box>
        </Typography>

        <Box
          sx={{
            mt: { xs: 3.5, md: 4.5 },
            display: "grid",
            gap: { xs: 1.5, md: 2.2 },
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
                minHeight: 220,
                p: { xs: 2.3, md: 2.5 },
                borderRadius: "20px",
                border: `1px solid ${colors.border}`,
                bgcolor: colors.white,
                boxShadow: "0 18px 34px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(15, 157, 138, 0.18)",
                  boxShadow: "0 22px 42px rgba(15, 23, 42, 0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "15px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: colors.primaryLight,
                  color: colors.primary,
                  border: "1px solid rgba(15, 157, 138, 0.12)",
                }}
              >
                <Icon sx={{ fontSize: 24 }} />
              </Box>

              <Typography
                sx={{
                  mt: 2.2,
                  color: colors.textPrimary,
                  fontSize: "1.15rem",
                  lineHeight: 1.2,
                  fontWeight: 800,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mt: 1.1,
                  color: colors.textSecondary,
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  maxWidth: 155,
                }}
              >
                {description}
              </Typography>

              <Box sx={{ mt: "auto", display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  aria-label={`Open ${title}`}
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#F4F6F7",
                    color: colors.textMuted,
                    "&:hover": {
                      bgcolor: colors.primaryLight,
                      color: colors.primaryDark,
                    },
                  }}
                >
                  <ChevronRightRoundedIcon sx={{ fontSize: 18 }} />
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
