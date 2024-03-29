import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [
  createData(1, "Apple", 5, 3),
  createData(2, "Orange", 2, 2),
  createData(3, "Grapes", 3, 1),
  createData(4, "Tomato", 2, 1.6),
  createData(5, "Mango", 1.5, 4)
];

export default function BasicTable() {
   //   api
  //     .get(`/equipment?pageNumber=${page}&pageSize=${this.state.rowsPerpage}`)
  //     .then((res) => {
  //       this.setState({
  //         data: res.data.data,
  //         isLoading: false,
  //       });
  //       console.log("data: " + res.data.data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
