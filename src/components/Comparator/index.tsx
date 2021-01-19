import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#2155fb",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <div className="container-fluid page">
      <div className="row">
        <div className="col">
          <h1>Porównywarka</h1>

          <div>
            W tabeli znajdują się wartości dochodu netto, tzw. 'na rękę'. Możesz
            zobaczyć jak różni się całoroczny dochód w zależności od umowy.{" "}
            <br />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    Umowa o pracę
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Umowa zlecenie
                  </StyledTableCell>
                  <StyledTableCell align="center">Umowa B2B</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    result for all year from UOP
                  </TableCell>
                  <TableCell align="center">
                    result for all year from UZ
                  </TableCell>
                  <TableCell align="center">
                    result for all year from B2B
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
