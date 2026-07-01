import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import colors from "../../constants/colors";
import navLinks from "../../data/navLinks";

const pageWidthSx = {
  width: "min(1140px, calc(100% - 32px))",
};

const actionButtonSx = {
  minHeight: 48,
  px: 2.25,
  borderRadius: "14px",
  fontSize: "0.95rem",
};

const Brand = ({ compact = false }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.4 }}>
    <Box
      sx={{
        position: "relative",
        width: compact ? 42 : 48,
        height: compact ? 42 : 48,
        borderRadius: compact ? "14px" : "16px",
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(145deg, #32cbb5 0%, #0f9d8a 52%, #0b7167 100%)",
        boxShadow: "0 16px 30px rgba(15, 157, 138, 0.26)",
      }}
    >
      <FavoriteRoundedIcon
        sx={{ color: colors.white, fontSize: compact ? 24 : 28 }}
      />
      <Box
        sx={{
          position: "absolute",
          top: compact ? 5 : 6,
          right: compact ? 5 : 6,
          width: compact ? 14 : 16,
          height: compact ? 14 : 16,
          borderRadius: "999px",
          display: "grid",
          placeItems: "center",
          bgcolor: "rgba(255, 255, 255, 0.18)",
          border: "1px solid rgba(255, 255, 255, 0.26)",
        }}
      >
        <AddRoundedIcon
          sx={{ color: colors.white, fontSize: compact ? 10 : 12 }}
        />
      </Box>
    </Box>

    <Box>
      <Typography
        sx={{
          fontSize: compact ? "1rem" : "1.12rem",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: colors.textPrimary,
        }}
      >
        MediConnect
      </Typography>
      <Typography
        sx={{
          mt: 0.35,
          fontSize: compact ? "0.69rem" : "0.74rem",
          fontWeight: 600,
          lineHeight: 1,
          color: colors.textMuted,
        }}
      >
        Healthcare Ecosystem
      </Typography>
    </Box>
  </Box>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((open) => !open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${colors.border}`,
          boxShadow: "0 1px 0 rgba(15, 23, 42, 0.04)",
        }}
      >
        <Container maxWidth={false} sx={pageWidthSx}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 74, md: 86 },
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Brand />

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 3.25,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {navLinks.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.25,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: colors.textPrimary,
                    cursor: "pointer",
                    transition: "color 180ms ease",
                    "&:hover": {
                      color: colors.primary,
                    },
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18 }} />
                  )}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.25,
              }}
            >
              <Button
                variant="outlined"
                startIcon={<PersonOutlineOutlinedIcon />}
                sx={{
                  ...actionButtonSx,
                  borderColor: colors.border,
                  color: colors.primary,
                  bgcolor: "#F8FCFB",
                  "&:hover": {
                    borderColor: colors.primary,
                    bgcolor: colors.primaryLight,
                  },
                }}
              >
                Sign up
              </Button>

              <Button
                variant="contained"
                startIcon={<PersonOutlineOutlinedIcon />}
                sx={{
                  ...actionButtonSx,
                  bgcolor: colors.primary,
                  "&:hover": {
                    bgcolor: colors.primaryDark,
                  },
                }}
              >
                Login
              </Button>
            </Box>

            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                width: 46,
                height: 46,
                border: `1px solid ${colors.border}`,
                borderRadius: "14px",
                color: colors.textPrimary,
              }}
              aria-label="Open navigation menu"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "min(320px, 92vw)",
            p: 2.5,
            bgcolor: colors.white,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Brand compact />
          <IconButton onClick={toggleDrawer} aria-label="Close navigation menu">
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my: 2.5 }} />

        <List disablePadding sx={{ display: "grid", gap: 0.5 }}>
          {navLinks.map((item) => (
            <ListItemButton
              key={item.label}
              sx={{
                px: 1.5,
                py: 1.2,
                borderRadius: "14px",
                color: colors.textPrimary,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: 700,
                }}
              >
                {item.label}
                {item.dropdown && (
                  <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18 }} />
                )}
              </Box>
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: "auto", pt: 3, display: "grid", gap: 1.2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<PersonOutlineOutlinedIcon />}
            sx={{
              ...actionButtonSx,
              borderColor: colors.border,
              color: colors.primary,
            }}
          >
            Sign up
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<PersonOutlineOutlinedIcon />}
            sx={{
              ...actionButtonSx,
              bgcolor: colors.primary,
              "&:hover": {
                bgcolor: colors.primaryDark,
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
