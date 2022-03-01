import { Button, ButtonProps } from "@mui/material";

type LoginButtonProps = {
  label: string;
} & ButtonProps;

const LoginButton: React.FC<LoginButtonProps> = ({ label, ...others }) => (
  <Button size="medium" variant="outlined" {...others}>
    {label}
  </Button>
);

export default LoginButton;
