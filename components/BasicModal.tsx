import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '0%',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  maxWidth: 600,
  width: "90%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  px: {xs: 2, md: 6},
  py: {xs: 2, md: 8},
  overflow: "scroll"
};

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string
}

export default function BasicModal({open, setOpen, children, title} : Props) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{overflow: "scroll"}}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}