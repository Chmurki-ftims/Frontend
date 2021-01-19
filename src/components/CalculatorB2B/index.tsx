import React from "react";
import "./styles.css";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
// import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
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
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

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

function createData(month: string, costs_all: number, revenue_all: number) {
  return {
    month,
    costs_all,
    revenue_all,
    revenue: [
      { id: "1", title: "Faktura 1", value: 3000 },
      { id: "2", title: "Faktura 2", value: 1000 },
    ],
    costs: [
      { id: "1", title: "Koszt 1", value: 1000, vat: 8 },
      { id: "2", title: "Koszt 2", value: 500, vat: 8 },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  // dialog income add koniec
  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  const handleClose = () => {
    setopenDialog(false);
  };
  // dialog income add koniec

  // dialog VAT add koniec
  const [openDialogVat, setopenDialogVat] = React.useState(false);

  const handleClickOpenVat = () => {
    setopenDialogVat(true);
  };

  const handleCloseVat = () => {
    setopenDialogVat(false);
  };
  // dialog VAT add koniec

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
        <StyledTableCell align="center">{row.costs_all}</StyledTableCell>
        <StyledTableCell align="center">{row.revenue_all}</StyledTableCell>
        <StyledTableCell align="center">result</StyledTableCell>
      </StyledTableRow>

      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Przychód
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
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
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.revenue.map((revenueRow) => (
                    <TableRow key={revenueRow.id}>
                      <TableCell component="th" scope="row">
                        {revenueRow.id}
                      </TableCell>
                      <TableCell>{revenueRow.title}</TableCell>
                      <TableCell align="right">{revenueRow.value}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="add to shopping cart">
                          <RemoveCircleOutlineOutlinedIcon />
                        </IconButton>
                        {/* {Math.round(revenueRow.value * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>

      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Koszty
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nr</StyledTableCell>
                    <StyledTableCell>Tytuł</StyledTableCell>
                    <StyledTableCell align="right">Wartość</StyledTableCell>
                    <StyledTableCell align="right">VAT</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        aria-label="add to shopping cart"
                        onClick={handleClickOpenVat}
                      >
                        <AddCircleOutlineOutlinedIcon />
                      </IconButton>
                      <Dialog
                        open={openDialogVat}
                        onClose={handleCloseVat}
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
                          <TextField
                            margin="dense"
                            id="valueDialog"
                            label="VAT"
                            type="number"
                            inputProps={{ step: "1", min: "0" }}
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseVat} color="primary">
                            Anuluj
                          </Button>
                          <Button onClick={handleCloseVat} color="primary">
                            Dodaj
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.costs.map((costsRow) => (
                    <TableRow key={costsRow.id}>
                      <TableCell component="th" scope="row">
                        {costsRow.id}
                      </TableCell>
                      <TableCell>{costsRow.title}</TableCell>
                      <TableCell align="right">{costsRow.value}</TableCell>
                      <TableCell align="right">{costsRow.vat}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="add to shopping cart">
                          <RemoveCircleOutlineOutlinedIcon />
                        </IconButton>
                        {/* {Math.round(costsRow.value * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Styczeń", 6000, 1400),
  createData("Luty", 5800, 1800),
  createData("Marzec", 6600, 500),
  createData("Kwiecień", 4500, 1000),
  createData("Maj", 4700, 2000),
  createData("Czerwiec", 6000, 1444),
  createData("Lipice", 5800, 1596),
  createData("Sierpień", 6600, 1234),
  createData("Wrzesień", 4500, 784),
  createData("Październik", 4700, 1452),
  createData("Listopad", 4700, 2666),
  createData("Grudzień", 4700, 1000),
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function CalculatorB2B(props: any) {
  const classes = useStyles();
  //praca w miejscu zamieszkania
  const [value, setValue] = React.useState("Tak");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  //

  //podatek
  const [taxType, setTaxType] = React.useState("");

  const handleChangeTaxType = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setTaxType(event.target.value as string);
  };
  //

  //ubezpieczenie
  const [insurance, setInsurance] = React.useState({
    sicknessInsurance: false,
    healthInsurance: false,
  });

  const handleChangeInsurance = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInsurance({ ...insurance, [event.target.name]: event.target.checked });
  };

  const { sicknessInsurance, healthInsurance } = insurance;
  const error =
    [sicknessInsurance, healthInsurance].filter((v) => v).length !== 2;
  //
  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
          <div className="form-row">
            <div className="row justify-content-center">
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <FormGroup>
                  <InputLabel id="legend">
                    Podatek
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={taxType}
                    onChange={handleChangeTaxType}
                    label="taxType"
                  >
                    <MenuItem value={"liniowy"}>liniowy</MenuItem>
                    <MenuItem value={"progresywny"}>progresywny </MenuItem>
                  </Select>

                  <FormLabel component="legend">
                    Czy pracujesz w miejscu zamieszkania?
                  </FormLabel>
                  <RadioGroup
                    aria-label="work-place"
                    name="work-place1"
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

                  <FormLabel component="legend">Składka:</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={sicknessInsurance}
                        onChange={handleChangeInsurance}
                        name="sicknessInsurance"
                      />
                    }
                    label="Chorobowe"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={healthInsurance}
                        onChange={handleChangeInsurance}
                        name="healthInsurance"
                      />
                    }
                    label="Zdrowotne"
                  />
                </FormGroup>
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
                    <StyledTableCell align="center">Koszty</StyledTableCell>
                    <StyledTableCell align="center">Przychód</StyledTableCell>
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
