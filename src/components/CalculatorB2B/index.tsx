import React, {useState, useEffect} from "react";
import "./styles.css";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

import {
  Box,
  Collapse,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup
} from '@material-ui/core'

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import B2B from '../../service/b2b'
import B2BKoszty from '../../service/b2b_koszty'
import { UserProps } from "../interfaces";
import { getAllJSDocTags } from "typescript";

const months:any = {
  'Styczeń': 0,
  'Luty': 1,
  'Marzec': 2,
  'Kwiecień': 3,
  'Maj': 4,
  'Czerwiec': 5,
  'Lipice': 6,
  'Sierpień': 7,
  'Wrzesień': 8,
  'Październik': 9,
  'Listopad': 10,
  'Grudzień': 11,
}

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

function Row(props: { month: string, user_id: string, b2b: Array<any>, b2bkoszty: Array<any>, onDataChange(): void }) {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const [titleB2B, setTitleB2B] = useState('')
  const [valueB2B, setValueB2B] = useState(0)

  const handletitleB2BChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setTitleB2B(event.target.value as string)
  }

  const handleValueB2BChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setValueB2B(event.target.value as number)
  }

  const [titleB2BKoszty, setTitleB2BKoszty] = useState('')
  const [valueB2BKoszty, setValueB2BKoszty] = useState(0)
  const [VAT, setVAT] = useState(0)

  const handleTitleB2BKosztyChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setTitleB2BKoszty(event.target.value as string)
  }

  const handleValueB2BKosztyChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setValueB2BKoszty(event.target.value as number)
  }

  const handleVATChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setVAT(event.target.value as number)
  }

  // dialog income add koniec
  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  const handleClose = () => {
    setTitleB2B('')
    setValueB2B(0)
    setopenDialog(false);
  };

  const handleB2BConfirm = () => {
    B2B.create(
      props.user_id,
      titleB2B,
      months[props.month],
      valueB2B
    ).then(res => {
      props.onDataChange()
      alert('Dane zostały dodane')
      handleClose()
    })
  }
  // dialog income add koniec

  // dialog VAT add koniec
  const [openDialogVat, setopenDialogVat] = React.useState(false);

  const handleClickOpenVat = () => {
    setopenDialogVat(true);
  };

  const handleCloseVat = () => {
    setTitleB2BKoszty('')
    setValueB2BKoszty(0)
    setVAT(0)
    setopenDialogVat(false);
  };

  const handleConfirmVat = () => {
    B2BKoszty.create(
      props.user_id,
      months[props.month],
      valueB2BKoszty,
      titleB2BKoszty,
      VAT
    ).then(data => {
      props.onDataChange()
      alert('Dane zostały dodane')
      handleCloseVat()
    })
  }
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
          {props.month}
        </StyledTableCell>
        <StyledTableCell align="center"> {props.b2b.reduce((acc: number, curr: any) => acc + curr.value, 0)} </StyledTableCell>
        <StyledTableCell align="center"> {props.b2bkoszty.reduce((acc: number, curr: any) => acc + curr.value, 0)} </StyledTableCell>
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
                            value={titleB2B}
                            onChange={handletitleB2BChange}
                          />
                          <TextField
                            margin="dense"
                            id="valueDialog"
                            label="Wartość"
                            type="number"
                            inputProps={{ step: "300", min: "0" }}
                            fullWidth
                            value={valueB2B}
                            onChange={handleValueB2BChange}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Anuluj
                          </Button>
                          <Button onClick={handleB2BConfirm} color="primary">
                            Dodaj
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {props.b2b.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell align="right">{item.value}</TableCell>
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
                            value={titleB2BKoszty}
                            onChange={handleTitleB2BKosztyChange}
                          />
                          <TextField
                            margin="dense"
                            id="valueDialog"
                            label="Wartość"
                            type="number"
                            inputProps={{ step: "300", min: "0" }}
                            fullWidth
                            value={valueB2BKoszty}
                            onChange={handleValueB2BKosztyChange}
                          />
                          <TextField
                            margin="dense"
                            id="valueDialog"
                            label="VAT"
                            type="number"
                            inputProps={{ step: "1", min: "0" }}
                            fullWidth
                            value={VAT}
                            onChange={handleVATChange}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseVat} color="primary">
                            Anuluj
                          </Button>
                          <Button onClick={handleConfirmVat} color="primary">
                            Dodaj
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {props.b2bkoszty.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell align="right">{item.value}</TableCell>
                      <TableCell align="right">{item.VAT}</TableCell>
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

export interface CalculatorB2BProps {
  user: UserProps | null
}

export default function CalculatorB2B(props: CalculatorB2BProps) {
  const [mounted, setMounted] = useState(true)
  const [B2BData, setB2Bdata]: [Array<any>, any] = useState([])
  const [B2BKosztyData, setB2BKosztyData]: [Array<any>, any] = useState([])

  const getData = () => {
    if (props.user) {
      B2B.getAll(props.user.id).then(res => {
        console.log(res.data.body)
        setB2Bdata(res.data.body)
      })

      B2BKoszty.getAll(props.user.id).then(res => {
        console.log(res.data.body)
        setB2BKosztyData(res.data.body)
      })
    }
  }

  const handleDataChange = () => {
    getData()
  }

  useEffect(() => {
    if (mounted) {
      getData()
    }

    return () => {setMounted(false)}
  }, [mounted])

  const classes = useStyles();
  //praca w miejscu zamieszkania
  const [value, setValue] = React.useState("Tak");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  //

  //podatek
  const [taxType, setTaxType] = React.useState("");

  const handleChangeTaxType = (event: React.ChangeEvent<{ value: unknown }>) => {
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
                  {Object.keys(months).map((month: any) => (
                    <Row 
                      key={month} 
                      month={month} 
                      user_id={props.user ? props.user.id : ''} 
                      b2b={B2BData.filter((item: any) => item.month === months[month])} 
                      b2bkoszty={B2BKosztyData.filter((item: any) => item.month === months[month])} 
                      onDataChange={handleDataChange}/>
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
