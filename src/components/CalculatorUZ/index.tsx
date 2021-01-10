import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
// import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import "./styles.css";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: "#2155fb"[500],
    backgroundColor: "#2155fb",
    "&:hover": {
      backgroundColor: "#2155fb"[100],
    },
  },
}))(Button);

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

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(month: string, income_all: number) {
  return {
    month,
    income_all,
    income: [
      { id: "1", title: "Pensja", value: 5000 },
      { id: "2", title: "Premia", value: 1000 },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  // dialog add koniec
  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  const handleClose = () => {
    setopenDialog(false);
  };
  // dialog add koniec

  return (
    <React.Fragment>
      <StyledTableRow className={classes.root}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.month}
        </StyledTableCell>
        <StyledTableCell align="right">{row.income_all}</StyledTableCell>
        {/* <TableCell align="right">{row.income_all}</TableCell> */}
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </StyledTableRow>

      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Dochód brutto
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Nr</StyledTableCell>
                    <StyledTableCell>Tytuł</StyledTableCell>
                    <StyledTableCell align="right">Wartość</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        aria-label="add to shopping cart"
                        onClick={handleClickOpen}
                      >
                        <AddCircleOutlineOutlinedIcon />
                      </IconButton>

                      <Dialog
                        open={openDialog}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">
                          Dodaj dane
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Aby obliczyć swój dochód netto oraz zobaczyć ile pieniędzy odprowadzane jest
                            na daną składkę, uzupełnij poniższe pola dla i wciśnij przycisk 'Oblicz'.
                          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="titleDialog"
                            label="Tytuł"
                            type="text"
                            fullWidth
                          />
                          <TextField
                            margin="dense"
                            id="valueDialog"
                            label="Wartość"
                            type="number"
                            inputProps={{ step: "300", min: "0" }}
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Anuluj
                          </Button>
                          <Button onClick={handleClose} color="primary">
                            Dodaj
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>

                <TableBody>
                  {row.income.map((incomeRow) => (
                    <StyledTableRow key={incomeRow.id}>
                      <StyledTableCell component="th" scope="row">
                        {incomeRow.id}
                      </StyledTableCell>
                      <StyledTableCell>{incomeRow.title}</StyledTableCell>
                      <StyledTableCell align="right">
                        {incomeRow.value}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton aria-label="add to shopping cart">
                          <RemoveCircleOutlineOutlinedIcon />
                        </IconButton>
                        {/* {Math.round(incomeRow.value * row.price * 100) / 100} */}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Styczeń", 6000),
  createData("Luty", 5800),
  createData("Marzec", 6600),
  createData("Kwiecień", 4500),
  createData("Maj", 4700),
  createData("Czerwiec", 6000),
  createData("Lipice", 5800),
  createData("Sierpień", 6600),
  createData("Wrzesień", 4500),
  createData("Październik", 4700),
  createData("Listopad", 4700),
  createData("Grudzień", 4700),
];

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     formControl: {
//       margin: theme.spacing(1),
//       // minWidth: 250,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   })
// );
export default function CalculatorUZ(props: any) {
  
  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
          <div className="form-row">
            <div className="row justify-content-center">
              <form>
                <div className="form-group">
                  <label htmlFor="taxThreshold">
                    <b>Próg podatkowy:</b>
                  </label>
                  <select className="form-control" id="taxThreshold">
                    <option>Pierwszy</option>
                    <option>Drugi</option>
                  </select>
                </div>

                <label htmlFor="contribution">
                  <b>Składka:</b>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="pensionablePay"
                    id="contribution1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="contribution1">
                    Emerytalna
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="socialPension"
                    id="contribution2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="contribution2">
                    Rentowa
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Sickness"
                    id="contribution3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="contribution3">
                    Chorobowa
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="accidentInsurance"
                    id="contribution4"
                    value="option4"
                  />
                  <label className="form-check-label" htmlFor="contribution4">
                    Wypadkowa
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="healthInsurance"
                    id="contribution5"
                    value="option5"
                  />
                  <label className="form-check-label" htmlFor="contribution5">
                    Zdrowotna
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="labourFund"
                    id="contribution6"
                    value="option6"
                  />
                  <label className="form-check-label" htmlFor="contribution6">
                    Fundusz pracy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="employmentFundContribution"
                    id="contribution7"
                    value="option7"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="contribution7"
                    style={{ marginBottom: "8px" }}
                  >
                    FGŚP
                  </label>
                </div>

              </form>
            </div>
            <ColorButton
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Oblicz
          </ColorButton>
          </div>
        </div>

        <div className="col-9">
          <div className="table-responsive">
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Miesiąc</TableCell>
                    <TableCell align="right">Dochód brutto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.month} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
