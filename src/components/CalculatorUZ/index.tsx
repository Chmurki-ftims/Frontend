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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

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
        <StyledTableCell align="center">{row.income_all}</StyledTableCell>
        <StyledTableCell align="center">result</StyledTableCell>
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
                            Aby obliczyć swój dochód netto oraz zobaczyć ile
                            pieniędzy odprowadzane jest na daną składkę,
                            uzupełnij poniższe pola dla i wciśnij przycisk
                            'Oblicz'.
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      // minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function CalculatorUZ(props: any) {
  const classes = useStyles();
  //wiek
  const [value, setValue] = React.useState("Tak");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  //

  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
          <div className="form-row">
            <div className="row justify-content-center">
              <FormControl
                component="fieldset"
                // variant="outlined"
                className={classes.formControl}
                fullWidth
              >

                <FormLabel component="legend">
                  Czy masz mniej niż 26 lat?
                </FormLabel>
                <RadioGroup
                  aria-label="age"
                  name="age1"
                  value={value}
                  onChange={handleChange}
              >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Tak"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="Nie"
                  />
                </RadioGroup>

                <FormLabel component="legend">
                    Koszt uzyskania przychodu:
                </FormLabel>
                <RadioGroup
                  aria-label="tax_cost"
                  name="tax_cost1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="0.2"
                    control={<Radio />}
                    label="0,2%"
                  />
                  <FormControlLabel
                    value="0.5"
                    control={<Radio />}
                    label="0.5%"
                  />
                </RadioGroup>
              </FormControl>
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
                    <StyledTableCell />
                    <StyledTableCell>Miesiąc</StyledTableCell>
                    <StyledTableCell align="center">Dochód brutto </StyledTableCell>
                    <StyledTableCell align="center"> Dochód netto </StyledTableCell>
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
