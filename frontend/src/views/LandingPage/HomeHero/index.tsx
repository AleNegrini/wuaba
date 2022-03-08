import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import SignupButton from "../../../components/SignupButton";
import HomeHeroImage from "../../../resources/images/herov1.png";

const HomeHero: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", height: "97vh" }}>
      <Container maxWidth="lg" sx={{ paddingY: 20 }}>
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
          <Grid item md={6} sm={8} xs={12}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="h3" color="textPrimary">
                Quante volte avresti voluto parlare con qualcuno che
              </Typography>
              <Typography variant="h3" color="primary">
                l&apos;ha già fatto?
              </Typography>
              <Box display="flex" pt={4} flexWrap="wrap">
                <Typography variant="h2" color="textPrimary" pr={1}>
                  ora puoi. con
                </Typography>
                <Typography variant="h2" color="primary">
                  Wuaba.
                </Typography>
              </Box>
              <Typography color="textSecondary" variant="body1" sx={{ py: 3 }}>
                Hai dei dubbi sul tuo percorso Universitario o professionale? Finalmente puoi chiedere a qualcuno che ci
                è già passato. Con Wuaba è veloce, divertente e smart.
              </Typography>
              <Box display={"flex"}>
                <TextField
                  id="hero-email"
                  size={"small"}
                  label={"Inserisci la tua mail"}
                  sx={{ flexGrow: 1, marginRight: 2, backgroundColor: "white" }}
                />
                <SignupButton label={"Unisciti a Wuaba"} />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} />
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
