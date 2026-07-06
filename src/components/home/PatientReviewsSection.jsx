import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import colors from "../../constants/colors";

const reviews = [
  {
    title: "Fast & Reliable Lab Tests",
    quote: "I scheduled my test online and received reports quickly without stress.",
    name: "John Smith",
    role: "Business Analyst",
  },
  {
    title: "Consult Online",
    quote: "Online consultations from home made care much easier for my family.",
    name: "Vikram Rao",
    role: "Accountant",
  },
  {
    title: "Insurance Support",
    quote: "Coverage details and approvals felt simple and much less confusing.",
    name: "Kavya",
    role: "Teacher",
  },
  {
    title: "Hospital Care",
    quote: "Booking and records stayed in sync, so my visit was smooth and quick.",
    name: "Rahul Sharma",
    role: "Software Engineer",
  },
];

const PatientReviewsSection = () => {
  return (
    <Box
      sx={{
        mt: { xs: 5, md: 6 },
        display: "grid",
        gap: { xs: 1.4, lg: 1.2 },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "240px repeat(4, minmax(0, 1fr))",
        },
        alignItems: "start",
      }}
    >
      <Box sx={{ alignSelf: "center", maxWidth: 240 }}>
        <Typography
          sx={{
            color: colors.primaryDark,
            fontSize: { xs: "0.72rem", md: "0.76rem" },
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          What Our Patients Say
        </Typography>

        <Typography
          component="h3"
          sx={{
            mt: 1,
            color: colors.textPrimary,
            fontSize: { xs: "1.8rem", md: "2.1rem" },
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            fontWeight: 800,
          }}
        >
          Trusted by Millions
        </Typography>

        <Typography
          sx={{
            mt: 1,
            maxWidth: 280,
            color: colors.textSecondary,
            fontSize: "0.82rem",
            lineHeight: 1.65,
          }}
        >
          From booking to recovery, we make healthcare simple, accessible, and
          personalized for you.
        </Typography>
      </Box>

      {reviews.map(({ title, quote, name, role }) => (
        <Paper
          key={name}
          elevation={0}
          sx={{
            p: { xs: 2, lg: 1.5 },
            borderRadius: "16px",
            border: `1px solid ${colors.border}`,
            boxShadow: "0 10px 22px rgba(15, 23, 42, 0.04)",
            minHeight: 122,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.6,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.1, color: "#F7B940" }}>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarRoundedIcon key={index} sx={{ fontSize: 14 }} />
              ))}
            </Box>
            <Typography
              sx={{
                color: colors.textSecondary,
                fontSize: "0.74rem",
                lineHeight: 1,
              }}
            >
              5/5
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 0.9,
              color: colors.textPrimary,
              fontSize: "0.88rem",
              lineHeight: 1.35,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 0.65,
              color: colors.textSecondary,
              fontSize: "0.72rem",
              lineHeight: 1.6,
              minHeight: 48,
            }}
          >
            "{quote}"
          </Typography>

          <Box sx={{ mt: "auto", pt: 1.2, display: "flex", alignItems: "center", gap: 0.8 }}>
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: colors.primaryLight,
                color: colors.primaryDark,
                fontSize: "0.68rem",
                fontWeight: 700,
              }}
            >
              {name.charAt(0)}
            </Box>

            <Box>
              <Typography
                sx={{
                  color: colors.textPrimary,
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {name}
              </Typography>

              <Typography
                sx={{
                  mt: 0.2,
                  color: colors.textMuted,
                  fontSize: "0.66rem",
                  lineHeight: 1.2,
                }}
              >
                {role}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default PatientReviewsSection;
