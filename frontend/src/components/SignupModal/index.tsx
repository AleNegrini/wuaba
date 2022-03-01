import { Box, Button, Container, Modal, Paper, Typography } from "@mui/material";
import React from "react";

type SignupModalProps = {
  open: boolean;
  handleCloseModal?: () => void;
};

const SignupModal: React.FC<SignupModalProps> = ({ open, handleCloseModal }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleCloseModal}
    >
      <Box
        sx={{
          minHeight: "100%",
          p: 3,
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={12}>
            <Box display="flex" paddingBottom={2} paddingX={3} paddingTop={3}>
              <div>
                <Typography variant="h5">Deactivate account</Typography>
                <Typography color="textSecondary" sx={{ mt: 1 }} variant="body2">
                  Are you sure you want to deactivate your account? All of your data will be permanently removed. This
                  action cannot be undone.
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                px: 3,
                py: 1.5,
              }}
            >
              <Button sx={{ mr: 2 }} variant="outlined" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                sx={{
                  backgroundColor: "error.main",
                  "&:hover": {
                    backgroundColor: "error.dark",
                  },
                }}
                variant="contained"
              >
                Deactivate
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Modal>
  );
};

export default SignupModal;
