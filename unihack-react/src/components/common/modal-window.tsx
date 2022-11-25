import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { SxProps, Theme } from "@mui/material/styles";

interface IProps {
  title?: string;
  modalContent: React.ReactNode;
  fullScreen?: boolean;
  open: boolean;
  onClose: () => void;
}

const styles = (): Record<string, SxProps | undefined> => ({
  closeModalIcon: {
    color: "#000",
    float: "right",
    "&:hover": {
      cursor: "pointer",
    },
  },
  modalContent: {
    width: "100%",
    padding: "0px 40px 40px",
    overflow: "hidden",
  },
});

const ModalWindow: React.FC<IProps> = (props) => {
  const { title, modalContent, fullScreen, open, onClose } = props;
  const classes = styles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      fullScreen={fullScreen}
      maxWidth={false}
      style={{
        zIndex: 10000000,
      }}
    >
      <DialogTitle>
        {title}
        <ClearIcon onClick={onClose} sx={classes.closeModalIcon} />
      </DialogTitle>
      <DialogContent sx={classes.modalContent}>{modalContent}</DialogContent>
    </Dialog>
  );
};

export default ModalWindow;
