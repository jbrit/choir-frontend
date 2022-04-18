import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


interface RehearsalsDataTableProps {
  rows: {
    name: string;
    date: string;
    attended: boolean;
    startTime: string;
    endTime: string
  }[]
}

export default function RehearsalsDataTable({rows} : RehearsalsDataTableProps) {
  return (
    <TableContainer sx={{mt: 2}} component="div">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Start time</TableCell>
            <TableCell align="left">End Time</TableCell>
            <TableCell align="left">Attended</TableCell>
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
              <TableCell component="th" align="left">{row.date}</TableCell>
              <TableCell component="th" align="left">{row.startTime}</TableCell>
              <TableCell component="th" align="left">{row.endTime}</TableCell>
              <TableCell component="th" align="left">{row.attended ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}