import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";
import { SxProps, Theme, useTheme } from "@mui/material";

const styles = (theme: Theme): Record<string, SxProps | undefined> => ({
  icon: {
    height: "20px",
    width: "20px",
    [theme.breakpoints.down("md")]: {
      height: "16px",
    },
  },
});

interface Props {
  isOpen: boolean;
}

const ExpandIcon = ({ isOpen }: Props) => {
  const theme = useTheme();
  const classes = styles(theme);

  return !isOpen ? (
    <ExpandMoreSharpIcon sx={classes.icon} />
  ) : (
    <ExpandLessIcon sx={classes.icon} />
  );
};

export default ExpandIcon;
