import { Button, ButtonProps, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../ContextProvider";

type SignupButtonProps = {
  label: string;
} & ButtonProps;

const SignupButton: React.FC<SignupButtonProps & ButtonProps> = ({ label, ...others }) => {
  const { toggleSignupModalOpen } = useContext(AppContext);

  return (
    <Button size="medium" variant="contained" color="primary" onClick={toggleSignupModalOpen} {...others}>
      <Typography color="neutral.100" variant="body2">
        {label}
      </Typography>
    </Button>
  );
};

export default SignupButton;
