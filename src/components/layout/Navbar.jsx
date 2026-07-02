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
  width: "min(1440px, calc(100% - 32px))",
};

const actionButtonSx = {
  minHeight: 40,
  px: 1.8,
  borderRadius: "10px",
  fontSize: "0.82rem",
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "none",
};

const Brand = ({ compact = false }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: compact ? 1 : 1.15 }}>
    <Box
      sx={{
        position: "relative",
        width: compact ? 28 : 32,
        height: compact ? 28 : 32,
        display: "grid",
        placeItems: "center",
      }}
    >
      <FavoriteRoundedIcon
        sx={{
          color: colors.primary,
          fontSize: compact ? 28 : 32,
          filter: "drop-shadow(0 6px 12px rgba(15, 157, 138, 0.16))",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: compact ? 3 : 4,
          right: compact ? 0 : 1,
          width: compact ? 12 : 13,
          height: compact ? 12 : 13,
          borderRadius: "999px",
          display: "grid",
          placeItems: "center",
          bgcolor: colors.primary,
        }}
      >
        <AddRoundedIcon
          sx={{ color: colors.white, fontSize: compact ? 9 : 10 }}
        />
      </Box>
    </Box>

    <Box>
      <Typography
        sx={{
          fontSize: compact ? "0.98rem" : "1.02rem",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: colors.textPrimary,
        }}
      >
        MediConnect
      </Typography>
      <Typography
        sx={{
          mt: 0.25,
          fontSize: compact ? "0.59rem" : "0.62rem",
          fontWeight: 700,
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
          bgcolor: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${colors.border}`,
          boxShadow: "none",
        }}
      >
        <Container maxWidth={false} sx={pageWidthSx}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 68, md: 72 },
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Brand />

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 2.5,
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
                    fontSize: "0.82rem",
                    fontWeight: 700,
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
                  bgcolor: colors.white,
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
                width: 40,
                height: 40,
                border: `1px solid ${colors.border}`,
                borderRadius: "10px",
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
        anchor="left"
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
                py: 1.1,
                borderRadius: "10px",
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
