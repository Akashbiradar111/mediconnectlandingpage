import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import colors from "../../constants/colors";

const networkItems = [
  {
    title: "Patients",
    description: "Manage your health and access care",
  },
  {
    title: "Doctors",
    description: "Doctor care and consultations",
  },
  {
    title: "Hospitals",
    description: "Streamline operations and patient care",
  },
  {
    title: "Laboratories",
    description: "Accurate tests and timely reports",
  },
  {
    title: "Pharmacies",
    description: "Dispense and deliver medicine with ease",
  },
  {
    title: "Insurance",
    description: "Simplify policies and claims",
  },
];

const ConnectedNetworkSection = () => {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Paper
          elevation={0}
          sx={{
            px: { xs: 2, sm: 3, md: 4.5, lg: 5.5 },
            py: { xs: 4.5, md: 5.5, lg: 6.5 },
            borderRadius: { xs: "28px", md: "34px" },
            border: `1px solid ${colors.border}`,
            bgcolor: colors.white,
            boxShadow: colors.shadow,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: colors.primaryDark,
              fontSize: { xs: "0.78rem", md: "0.84rem" },
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
              mt: 1.8,
              mx: "auto",
              maxWidth: 700,
              textAlign: "center",
              color: colors.textPrimary,
              fontSize: { xs: "2rem", sm: "2.55rem", lg: "3rem" },
              lineHeight: { xs: 1.18, md: 1.16 },
              letterSpacing: "-0.04em",
              fontWeight: 800,
            }}
          >
            Built to connect every participant in the healthcare journey
          </Typography>

          <Typography
            sx={{
              mt: 1.8,
              mx: "auto",
              maxWidth: 720,
              textAlign: "center",
              color: colors.textSecondary,
              fontSize: { xs: "0.98rem", md: "1.04rem" },
              lineHeight: 1.75,
            }}
          >
            From booking to recovery, we make healthcare simple, accessible and
            personalized for you.
          </Typography>

          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              display: "grid",
              gap: { xs: 1.5, md: 0 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
                lg: "repeat(6, minmax(0, 1fr))",
              },
            }}
          >
            {networkItems.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  position: "relative",
                  px: { xs: 1.2, sm: 1.4, lg: 1.1 },
                  py: { xs: 2, sm: 2.2, lg: 1.4 },
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    mx: "auto",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: colors.white,
                    border: `1px solid rgba(15, 157, 138, 0.12)`,
                    boxShadow: "0 14px 28px rgba(15, 23, 42, 0.08)",
                    color: colors.primaryDark,
                  }}
                >
                  <PersonalInjuryOutlinedIcon sx={{ fontSize: 28 }} />
                </Box>

                <Typography
                  sx={{
                    mt: 2.1,
                    color: colors.textPrimary,
                    fontSize: "1.02rem",
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    mx: "auto",
                    maxWidth: 150,
                    color: colors.textSecondary,
                    fontSize: "0.84rem",
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </Typography>

                {index < networkItems.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", lg: "flex" },
                      alignItems: "center",
                      position: "absolute",
                      top: 30,
                      left: "calc(100% - 12px)",
                      width: 38,
                      zIndex: 0,
                      color: "#B8C1CB",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        borderTop: "1px dashed rgba(126, 138, 152, 0.45)",
                      }}
                    />
                    <EastRoundedIcon sx={{ fontSize: 14, ml: 0.5 }} />
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: { xs: 4.5, md: 5.5 }, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                minHeight: 56,
                px: 3.25,
                borderRadius: "14px",
                bgcolor: colors.primary,
                "&:hover": {
                  bgcolor: colors.primaryDark,
                },
              }}
            >
              Explore Ecosystem
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ConnectedNetworkSection;
