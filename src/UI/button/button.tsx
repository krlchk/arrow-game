import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";

interface IButtonProps extends MaterialButtonProps {
  children: string;
}

export const Button = (props: IButtonProps) => {
  const { children } = props;
  return (
    <MaterialButton
      sx={{
        borderRadius: "1rem",
        minWidth: "100px",
        padding: "0 16px",
        lineHeight: " 36px",
        border: "none",
      }}
      variant="contained"
      size="large"
      {...props}
    >
      {children}
    </MaterialButton>
  );
};
