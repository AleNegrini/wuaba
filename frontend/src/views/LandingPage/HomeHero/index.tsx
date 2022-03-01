import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SignupButton from "../../../components/SignupButton";

const HomeHero: React.FC = () => {
  return (
    <Box
      paddingY={15}
      paddingX={0}
      sx={{ backgroundImage: "linear-gradient(to left, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))" }}
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" container justifyContent="center" spacing={3}>
          <Grid item md={6} sm={8} xs={12}>
            <Paper variant="outlined">
              <img alt="banana" src="public/test_imag1.png" />
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <div>
              <Typography variant="h3" color="white">
                Quante volte avresti voluto parlare con qualcuno che l&apos;ha già fatto?
              </Typography>
              <Typography variant="h3" color="secondary.main">
                ora puoi. con Wuaba.
              </Typography>
              <Typography color="textSecondary" variant="subtitle1" sx={{ py: 3 }}>
                Wuaba nasce con un obiettivo molto semplice:
              </Typography>
              <SignupButton size="large" sx={{ mt: 2 }} variant="contained" label={"Unisciti a Wuaba"} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
