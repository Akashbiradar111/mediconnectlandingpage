import { Box, Button, Container, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import colors from "../../constants/colors";

const footerGroups = [
  {
    title: "Platform",
    links: [
      "Hospital Management",
      "Telemedicine",
      "Pharmacy System",
      "Lab Management",
      "Health Insurance",
      "Appointment and Scheduling",
      "Remote monitoring",
      "AI & Analytics",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Integration",
      "Case studies",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Press",
      "Partners",
      "Blog",
      "Contact Us",
    ],
  },
];

const socials = [
  { label: "X", icon: XIcon },
  { label: "YouTube", icon: YouTubeIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
];

const Brand = () => (
  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.15 }}>
    <Box
      sx={{
        position: "relative",
        width: 34,
        height: 34,
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
      }}
    >
      <FavoriteRoundedIcon
        sx={{
          color: colors.primary,
          fontSize: 34,
          filter: "drop-shadow(0 5px 12px rgba(15, 157, 138, 0.16))",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 4,
          right: 1,
          width: 14,
          height: 14,
          borderRadius: "999px",
          display: "grid",
          placeItems: "center",
          bgcolor: colors.primary,
        }}
      >
        <AddRoundedIcon sx={{ color: colors.white, fontSize: 10 }} />
      </Box>
    </Box>

    <Box sx={{ pt: 0.2 }}>
      <Typography
        sx={{
          fontSize: "1.02rem",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: colors.primaryDark,
        }}
      >
        MediConnect
      </Typography>
      <Typography
        sx={{
          mt: 0.24,
          fontSize: "0.62rem",
          fontWeight: 700,
          lineHeight: 1,
          color: "#78b7a8",
        }}
      >
        Healthcare Ecosystem
      </Typography>
    </Box>
  </Box>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.white,
        pt: { xs: 5, md: 6 },
        pb: { xs: 3, md: 1.8 },
      }}
    >
      <Container maxWidth={false} sx={{ width: "min(1440px, calc(100% - 32px))" }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3.2, sm: 3.6, lg: 2.8 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "1.15fr 0.95fr 0.85fr 0.85fr 1.05fr",
            },
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ maxWidth: 240 }}>
            <Brand />
            <Typography
              sx={{
                mt: 2.2,
                fontSize: "0.88rem",
                lineHeight: 1.7,
                color: "#8a8a8a",
              }}
            >
              One Integrated platform for all your healthcare needs. Empowering
              hospitals, Doctors and patients with AI and Technology.
            </Typography>
          </Box>

          {footerGroups.map((group) => (
            <Box key={group.title}>
              <Typography
                sx={{
                  fontSize: "1.28rem",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: "#1b1b1b",
                }}
              >
                {group.title}
              </Typography>

              <Box sx={{ mt: 2.15, display: "grid", gap: 1.2 }}>
                {group.links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    sx={{
                      maxWidth: 185,
                      fontSize: "0.98rem",
                      lineHeight: 1.45,
                      color: "#7d7d7d",
                      transition: "color 160ms ease",
                      "&:hover": {
                        color: colors.primary,
                      },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}

          <Box sx={{ maxWidth: 290 }}>
            <Typography
              sx={{
                fontSize: "1.28rem",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#1b1b1b",
              }}
            >
              Newsletter
            </Typography>

            <Typography
              sx={{
                mt: 2.15,
                fontSize: "0.9rem",
                lineHeight: 1.5,
                color: "#8a8a8a",
              }}
            >
              Subscribe to get latest updates!
            </Typography>

            <Box
              component="form"
              onSubmit={(event) => event.preventDefault()}
              sx={{
                mt: 1.2,
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) 44px",
                width: "100%",
                maxWidth: 270,
              }}
            >
              <Box
                component="input"
                type="email"
                aria-label="Enter Your Email ID"
                placeholder="Enter Your Email ID"
                sx={{
                  width: "100%",
                  minWidth: 0,
                  height: 40,
                  px: 1.35,
                  border: "1px solid #e6e6e6",
                  borderRight: "none",
                  borderRadius: "6px 0 0 6px",
                  backgroundColor: colors.white,
                  color: colors.textPrimary,
                  fontSize: "0.86rem",
                  outline: "none",
                  "&::placeholder": {
                    color: "#a3a3a3",
                    opacity: 1,
                  },
                }}
              />

              <Button
                type="submit"
                aria-label="Subscribe"
                sx={{
                  minWidth: 44,
                  width: 44,
                  height: 40,
                  borderRadius: "0 6px 6px 0",
                  bgcolor: colors.primary,
                  color: colors.white,
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: colors.primaryDark,
                    boxShadow: "none",
                  },
                }}
              >
                <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
              </Button>
            </Box>

            <Typography
              sx={{
                mt: 3.1,
                fontSize: "1.28rem",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#1b1b1b",
              }}
            >
              Our Socials
            </Typography>

            <Box sx={{ mt: 1.65, display: "flex", alignItems: "center", gap: 1.45 }}>
              {socials.map(({ label, icon: Icon }) => (
                <Box
                  key={label}
                  component="a"
                  href="#"
                  aria-label={label}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6f6f6f",
                    transition: "color 160ms ease, transform 160ms ease",
                    "&:hover": {
                      color: colors.primary,
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 4, md: 2.6 },
            pt: 2.2,
            borderTop: "1px solid #ededed",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "0.92rem",
              lineHeight: 1.6,
              color: "#787878",
            }}
          >
            @ {currentYear} Healthcare. All Rights Reserved. Privacy policy, Terms of
            Service, HIPAA Notice, Cookie Settings, Accessibility.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
