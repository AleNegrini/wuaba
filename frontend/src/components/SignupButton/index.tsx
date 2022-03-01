import { Button, ButtonProps } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../ContextProvider";

type SignupButtonProps = {
  label: string;
} & ButtonProps;

const SignupButton: React.FC<SignupButtonProps & ButtonProps> = ({ label, ...others }) => {
  const { toggleSignupModalOpen } = useContext(AppContext);

  return (
    <Button size="medium" variant="contained" color="secondary" onClick={toggleSignupModalOpen} {...others}>
      {label}
    </Button>
  );
};

export default SignupButton;
