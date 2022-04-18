import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicModal from './BasicModal';


interface SongDataRowProps {
  lyrics: string
}

export default function SongDataRow({lyrics} : SongDataRowProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableCell component="th" align="left">   
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{ padding: '5px 10px', fontSize: 12}}
        >
          View
        </Button>
      </TableCell>
      <BasicModal open={open} setOpen={setOpen} title='Onise Iyanu Lyrics'>   
        <Typography mt={4} variant="body1" component="p">
          {lyrics}
        </Typography>
      </BasicModal>
    </>
  );
}