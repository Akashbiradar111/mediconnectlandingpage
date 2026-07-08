import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "../../constants/colors";
import PatientReviewsSection from "./PatientReviewsSection";

const featureCards = [
  {
    title: "AI Health Insights",
    description: "Receive personalized health recommendations and smarter next steps.",
    icon: "hugeicons:ai-dna",
    image: "/image1.png",
    points: [
      "Instant symptom analysis",
      "Health risk assessment",
      "Personalized recommendations",
    ],
  },
  {
    title: "Connected Medical Records",
    description: "Keep prescriptions, reports, and consultations in one place.",
    icon: "tabler:clipboard-text",
    image: "/image2.png",
    points: [
      "All records in one place",
      "Easy access anytime",
      "Simple sharing with doctors",
    ],
  },
  {
    title: "Rapid Emergency Support",
    description: "Stay ready with faster coordination for urgent care situations.",
    icon: "tabler:ambulance",
    image: "/image3.png",
    points: [
      "Emergency-ready access",
      "Faster care coordination",
      "Support when it matters",
    ],
  },
  {
    title: "Continuous Care",
    description: "From appointments to follow-ups, stay connected to your care team.",
    icon: "tabler:user-heart",
    image: "/image4.png",
    points: [
      "Follow-up reminders",
      "Healthy lifestyle guidance",
      "Ongoing patient support",
    ],
  },
  
];

const stats = [
  { value: "1M+", label: "Patients Supported" },
  { value: "50K+", label: "Appointments Completed" },
  { value: "500+", label: "Healthcare Providers" },
  { value: "99.9%", label: "Platform Availability" },
];

const featureIconWrapSx = {
  width: 38,
  height: 38,
  borderRadius: "8px",
  display: "grid",
  placeItems: "center",
  bgcolor: colors.primaryLight,
  color: colors.primaryDark,
  border: "1px solid rgba(15, 157, 138, 0.12)",
};

const iconWrapSx = {
  width: 44,
  height: 44,
  borderRadius: "12px",
  display: "grid",
  placeItems: "center",
  bgcolor: colors.primaryLight,
  color: colors.primaryDark,
  border: "1px solid rgba(15, 157, 138, 0.12)",
};

const WhyChooseUsSection = () => {
  return (
    <Box component="section" sx={{ pb: { xs: 7, md: 8.5 } }}>
      <Container maxWidth={false} sx={{ width: "min(1440px, calc(100% - 32px))" }}>
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
          Why Choose Us?
        </Typography>

        <Typography
          component="h2"
          sx={{
            mt: 1.1,
            mx: "auto",
            maxWidth: 620,
            textAlign: "center",
            color: colors.textPrimary,
            fontSize: { xs: "1.9rem", sm: "2.25rem", lg: "2.55rem" },
            lineHeight: { xs: 1.2, md: 1.18 },
            letterSpacing: "-0.04em",
            fontWeight: 800,
          }}
        >
          Healthcare Powered by Intelligence
        </Typography>

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            display: "grid",
            gap: { xs: 1.4, md: 1.6 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
          {featureCards.map(({ title, description, icon, image, points }) => (
            <Paper
              key={title}
              elevation={0}
              sx={{
                p: { xs: 2, md: 2.1 },
                borderRadius: "18px",
                border: `1px solid ${colors.border}`,
                boxShadow: "0 10px 22px rgba(15, 23, 42, 0.05)",
              }}
            >
              <Box
                sx={{
                  mb: 1.8,
                  width: 237,
                  maxWidth: "100%",
                  height: 210,
                  mx: "auto",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: 237,
                    maxWidth: "100%",
                    height: 210,
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Box sx={featureIconWrapSx}>
                <Icon icon={icon} width={20} height={20} />
              </Box>

              <Typography
                sx={{
                  mt: 1.7,
                  color: colors.textPrimary,
                  fontSize: "0.94rem",
                  lineHeight: 1.3,
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
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>

              <Box sx={{ mt: 1.5, display: "grid", gap: 0.7 }}>
                {points.map((point) => (
                  <Box key={point} sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: colors.primary,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        color: colors.textMuted,
                        fontSize: "0.72rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <Typography
            sx={{
              color: colors.primaryDark,
              fontSize: { xs: "0.72rem", md: "0.76rem" },
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Our Impact in Numbers
          </Typography>

          <Typography
            component="h3"
            sx={{
              mt: 1,
              maxWidth: 430,
              color: colors.textPrimary,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              lineHeight: 1.2,
              letterSpacing: "-0.04em",
              fontWeight: 800,
            }}
          >
            Healthcare you can trust, backed by{" "}
            <Box component="span" sx={{ color: colors.primaryDark }}>
              real results
            </Box>
          </Typography>

          <Box
            sx={{
              mt: { xs: 2.8, md: 3.2 },
              display: "grid",
              gap: { xs: 1.4, md: 1.6 },
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
          >
            {stats.map(({ value, label }, index) => (
              <Paper
                key={label}
                elevation={0}
                sx={{
                  p: { xs: 2, md: 2.2 },
                  borderRadius: "18px",
                  border: `1px solid ${colors.border}`,
                  boxShadow: "0 10px 22px rgba(15, 23, 42, 0.04)",
                }}
              >
                <Box
                  sx={{
                    ...iconWrapSx,
                    width: 40,
                    height: 40,
                    bgcolor: index % 2 === 0 ? colors.primarySoft : "rgba(15, 157, 138, 0.06)",
                  }}
                >
                  <Icon icon="hugeicons:ai-dna" width={18} height={18} />
                </Box>

                <Typography
                  sx={{
                    mt: 2.8,
                    color: colors.textPrimary,
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  {value}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.8,
                    color: colors.textSecondary,
                    fontSize: "0.74rem",
                    lineHeight: 1.5,
                  }}
                >
                  {label}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        <PatientReviewsSection />
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
