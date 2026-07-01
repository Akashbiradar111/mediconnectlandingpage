import { Box, Button, Container, InputBase, Paper, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import colors from "../../constants/colors";

const popularSearches = [
  "Dermatologist",
  "Gynecologist",
  "Paediatrician",
  "Orthopaedic",
  "Dentist",
];

const SearchBar = () => {
  return (
    <Box component="section" sx={{ pt: { xs: 1.5, md: 2 }, pb: { xs: 4, md: 4.5 } }}>
      <Container maxWidth={false} sx={{ width: "min(1440px, calc(100% - 32px))" }}>
        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: "14px",
            border: `1px solid ${colors.border}`,
            bgcolor: colors.white,
            boxShadow: "none",
            animation: "fadeUp 900ms ease both",
          }}
        >
          <Box
            sx={{
              p: 0.75,
              display: "grid",
              gap: 0,
              gridTemplateColumns: {
                xs: "1fr",
                md: "190px minmax(0, 1fr) 118px",
              },
            }}
          >
            <Box
              sx={{
                minHeight: 54,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                px: 1.4,
                borderRadius: "10px",
                borderRight: { md: `1px solid ${colors.border}` },
                borderBottom: { xs: `1px solid ${colors.border}`, md: "none" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.1 }}>
                <LocationOnOutlinedIcon sx={{ color: colors.textMuted, fontSize: 18 }} />
                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: colors.textSecondary,
                  }}
                >
                  Select Location
                </Typography>
              </Box>
              <KeyboardArrowDownRoundedIcon sx={{ color: colors.textMuted, fontSize: 18 }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minHeight: 54,
                px: { xs: 1.4, md: 1.8 },
                bgcolor: colors.white,
                borderBottom: { xs: `1px solid ${colors.border}`, md: "none" },
              }}
            >
              <SearchRoundedIcon sx={{ color: colors.textMuted, fontSize: 18 }} />
              <InputBase
                fullWidth
                placeholder="Search Doctors, Specialties, Clinics and Hospitals..."
                sx={{
                  color: colors.textPrimary,
                  fontSize: "0.82rem",
                }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                minHeight: 40,
                alignSelf: "center",
                mx: { xs: 1, md: 0.75 },
                my: { xs: 1, md: 0 },
                borderRadius: "10px",
                bgcolor: colors.primary,
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: colors.primaryDark,
                  boxShadow: "none",
                },
              }}
            >
              Search
            </Button>
          </Box>

          <Box
            sx={{
              px: 0.1,
              pt: 1.2,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 0.7,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: colors.textPrimary,
              }}
            >
              Popular Searches:
            </Typography>

            {popularSearches.map((item) => (
              <Box
                key={item}
                sx={{
                  px: 1.1,
                  py: 0.48,
                  borderRadius: "999px",
                  border: `1px solid ${colors.border}`,
                  bgcolor: colors.white,
                  color: colors.textSecondary,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SearchBar;
