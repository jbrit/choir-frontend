import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SongDataRow from './SongDataRow';


interface SongsDataTableProps {
  rows: {
    name: string;
    artist: string;
    lyrics: string;
  }[]
}

export default function SongsDataTable({rows} : SongsDataTableProps) {
  return (
    <TableContainer sx={{mt: 2}} component="div">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Artist</TableCell>
            <TableCell align="left">Lyrics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" align="left">{row.artist}</TableCell>
              <SongDataRow lyrics={row.lyrics} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}