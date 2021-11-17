import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';







// Dummy 


export default function AssignmentList({assignments}) {
  const rows = assignments;
  return (

   
    <TableContainer component={Paper}>
 {console.log(assignments)}
      <Table  >

        <TableHead sx = {{bgcolor:'#fffbf2'}}>
          <TableRow  >
            <TableCell  sx ={{fontWeight:'600', color:'primary.light' }} >Assigment Name</TableCell>
            <TableCell sx ={{fontWeight:'600', color:'primary.light' }} align="right">Start Time</TableCell>
            <TableCell sx ={{fontWeight:'600', color:'primary.light'}} align="right">Due Time</TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.Subject}</TableCell>
              <TableCell align="right">{row.StartTime.toString()}</TableCell>
              <TableCell align="right">{row.EndTime.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>
  );
}
