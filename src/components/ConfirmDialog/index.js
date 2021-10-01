import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PurpleButton, WhiteButton } from '../Buttons';

const ConfirmDialog = ({ title, children, open, setOpen, onConfirm }) => (
  <Dialog
    open={open}
    onClose={() => setOpen(false)}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <WhiteButton
        onClick={() => setOpen(false)}
      >
        No
      </WhiteButton>
      <PurpleButton
        onClick={() => {
          setOpen(false);
          onConfirm();
        }}
      >
        Yes
      </PurpleButton>
    </DialogActions>
  </Dialog>
);
export default ConfirmDialog;