import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function createData(Assignment_name, start_time, due_time) {
  return { Assignment_name, start_time, due_time };
}

// Dummy 
const rows = [
  createData('Assignment 1', "Nov 9 10:00 am", "Nov 10 10:00 am"),
  createData('Assignment 2', "Nov 9 10:00 am", "Nov 13 10:00 am"),
  createData('Assignment 3', "Nov 9 10:00 am", "Nov 14 10:00 am"),
  createData('Assignment 4', "Nov 9 10:00 am", "Nov 15 10:00 am"),
  createData('Assignment 5', "Nov 9 10:00 am", "Nov 16 10:00 am"),
 

];

export default function AssignmentList() {
  return (
    <TableContainer component={Paper}>

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
              key={row.Assignment_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.Assignment_name}</TableCell>
              <TableCell align="right">{row.start_time}</TableCell>
              <TableCell align="right">{row.due_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>
  );
}
