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
    <Box component="section" sx={{ pt: { xs: 1.5, md: 2.5 }, pb: { xs: 4, md: 5 } }}>
      <Container maxWidth={false} sx={{ width: "min(1140px, calc(100% - 32px))" }}>
        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: { xs: "24px", md: "28px" },
            border: `1px solid ${colors.border}`,
            bgcolor: colors.white,
            boxShadow: colors.shadow,
            animation: "fadeUp 900ms ease both",
          }}
        >
          <Box
            sx={{
              p: { xs: 1.25, md: 1.5 },
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: {
                xs: "1fr",
                md: "220px minmax(0, 1fr) 150px",
              },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                minHeight: 62,
                justifyContent: "space-between",
                px: 2,
                borderRadius: "18px",
                borderColor: colors.border,
                color: colors.textPrimary,
                bgcolor: colors.white,
                "&:hover": {
                  borderColor: colors.primary,
                  bgcolor: colors.primaryLight,
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.1 }}>
                <LocationOnOutlinedIcon sx={{ color: colors.textMuted }} />
                Select Location
              </Box>
              <KeyboardArrowDownRoundedIcon sx={{ color: colors.textMuted }} />
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                minHeight: 62,
                px: 2.1,
                borderRadius: "18px",
                border: `1px solid ${colors.border}`,
                bgcolor: colors.white,
              }}
            >
              <SearchRoundedIcon sx={{ color: colors.textMuted }} />
              <InputBase
                fullWidth
                placeholder="Search Doctors, Specialties, Clinics and Hospitals..."
                sx={{
                  color: colors.textPrimary,
                  fontSize: "0.97rem",
                }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                minHeight: 62,
                borderRadius: "18px",
                bgcolor: colors.primary,
                "&:hover": {
                  bgcolor: colors.primaryDark,
                },
              }}
            >
              Search
            </Button>
          </Box>

          <Box
            sx={{
              borderTop: `1px solid ${colors.border}`,
              px: { xs: 1.25, md: 1.5 },
              py: { xs: 1.25, md: 1.1 },
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1.1,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.92rem",
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
                  px: 1.35,
                  py: 0.75,
                  borderRadius: "999px",
                  border: `1px solid ${colors.border}`,
                  bgcolor: "#FAFCFC",
                  color: colors.textSecondary,
                  fontSize: "0.82rem",
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
