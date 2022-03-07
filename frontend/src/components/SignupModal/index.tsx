import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SignupButton from "../SignupButton";

type SignupModalProps = {
  open: boolean;
  handleCloseModal?: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 3,
};

const SignupModal: React.FC<SignupModalProps> = ({ open, handleCloseModal }) => {
  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={style}>
        <Container>
          <Paper elevation={12}>
            <Box display="flex" paddingBottom={2} paddingX={2} paddingTop={2} flexDirection="column">
              <Grid container>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant={"h5"} marginBottom={2} align={"center"}>
                    Entra nella community Wuaba
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant={"overline"} paddingBottom={0.5}>
                      Nome
                    </Typography>
                    <TextField placeholder="Mario" size="small" />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant={"overline"} paddingBottom={0.5}>
                      Cognome
                    </Typography>
                    <TextField placeholder="Rossi" size="small" />
                  </Box>
                </Grid>
              </Grid>
              <Grid container paddingTop={2}>
                <Grid item xs={12}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant={"overline"} paddingBottom={0.5}>
                      Email
                    </Typography>
                    <TextField placeholder="mario.rossi@gmail.com" size="small" />
                  </Box>
                </Grid>
              </Grid>
              <Grid container paddingTop={2}>
                <Grid item xs={12}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant={"overline"} paddingBottom={0.5}>
                      Iscriviti come ...
                    </Typography>
                    <FormControl size="small">
                      <InputLabel id="whiz-wonder-select" sx={{ backgroundColor: "white", paddingRight: 1 }}>
                        Whiz / Wonder
                      </InputLabel>
                      <Select labelId="whiz-wonder-select" label="Age" fullWidth>
                        <MenuItem value={"whiz"}>Whiz</MenuItem>
                        <MenuItem value={"wonder"}>Wonder</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              <Grid container paddingTop={4}>
                <Grid item xs={12}>
                  <SignupButton label={"Conferma"} fullWidth />
                </Grid>
              </Grid>
              <Grid container paddingTop={6}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <Link variant="caption" align="center">
                    Registrandomi, accetto l&apos;Informativa sulla privacy e i Termini di servizio.
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Modal>
  );
};

export default SignupModal;
