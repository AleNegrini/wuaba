import { Box, Container, Typography } from "@mui/material";

const HomeTestimonial: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 10,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" color="primary.contrastText" variant="h5">
          Lo sapevi che l&apos;80% degli studenti dichiara di ...
        </Typography>
      </Container>
    </Box>
  );
};

export default HomeTestimonial;
