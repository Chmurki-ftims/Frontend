import React, {useEffect, useState} from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
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
import { UserProps } from "../interfaces";

import UOP from '../../service/uop'

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

// function createData(month: string, income_all: number) {
//   return {
//     month,
//     income_all,
//     income: [
//       { id: "1", title: "Pensja", value: 5000 },
//       { id: "2", title: "Premia", value: 1000 },
//     ],
//   };
// }

function Row(props: {month: string, user_id: string, data: Array<any>, calculated: number | string, onDataChange(): void}) {
  // const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();


  const [title, setTitle] = useState('')
  const [costValue, setCostValue]: [number, any] = useState(0)

  const handleTitleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setTitle(event.target.value as string)
  }

  const handleCostValueChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setCostValue(event.target.value as number)
  }

  // dialog add koniec
  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  const handleClose = () => {
    setCostValue(0)
    setTitle('')
    setopenDialog(false);
  };

  const handleConfirm = () => {
    UOP.create(
      props.user_id ? props.user_id : '',
      months[props.month],
      costValue,
      title
    ).then(data => {
      alert('Dane zostały dodane')
      props.onDataChange()
      handleClose()
    })
  }

  const handleDelete = (id: string) => {
    let answer: boolean = window.confirm('Czy na pewno chcesz wycofać ten wpis?')

    if(answer) {
      UOP.delete(props.user_id, id).then(data => {
        alert('Wycofane :)')
        props.onDataChange()
      })
    }
  }
  // dialog add koniec

  return (
    <>
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
        <StyledTableCell component="th" scope="row"> {props.month} </StyledTableCell>
        <StyledTableCell align="center"> {props.data.reduce((acc: number, curr: any) => acc + curr.value, 0)} </StyledTableCell>
        <StyledTableCell align="center"> {props.calculated} </StyledTableCell>
      </StyledTableRow>

      <TableRow>
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
                            value={title}
                            onChange={handleTitleChange}
                          />
                          <TextField
                            margin="dense"
                            id="valueDialog"
                            label="Wartość"
                            type="number"
                            inputProps={{ step: "300", min: "0" }}
                            fullWidth
                            value={costValue}
                            onChange={handleCostValueChange}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Anuluj
                          </Button>
                          <Button onClick={handleConfirm} color="primary">
                            Dodaj
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {props.data.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell align="right">{item.value}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="add to shopping cart" onClick={() => {handleDelete(item.id)}}>
                          <RemoveCircleOutlineOutlinedIcon />
                        </IconButton>
                        {/* {Math.round(incomeRow.value * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </>
  );
}

// const rows = [
//   createData("Styczeń", 6000),
//   createData("Luty", 5800),
//   createData("Marzec", 6600),
//   createData("Kwiecień", 4500),
//   createData("Maj", 4700),
//   createData("Czerwiec", 6000),
//   createData("Lipice", 5800),
//   createData("Sierpień", 6600),
//   createData("Wrzesień", 4500),
//   createData("Październik", 4700),
//   createData("Listopad", 4700),
//   createData("Grudzień", 4700),
// ];

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

export interface CalculatorUOPProps {
  user: UserProps | null
}

export default function CalculatorUOP(props: CalculatorUOPProps) {
  const [mounted, setMounted] = useState(true)
  const [data, setData]: [Array<any>, any] = useState([])
  const [calculated, setCalculated]: [Array<number | string>, any] = useState(new Array(12).fill('Nie obliczono'))

  const handleCalculate = () => {
    const newCalculated = Object.values(months).map((month: any, index: number) => {
      const brutto = data.filter((item: any) => item.month === month).reduce((acc:number, curr: any) => acc + curr.value, 0)

      if (!!brutto) {
        const skl = brutto*0.1371

        let res = brutto - skl

        if (value === 'no') {
          return res
        }

        res -= 250

        let tax = res*0.17 - 43.76

        tax -= (brutto - skl)*0.0775

        res = brutto - skl - (res+250)*0.09 

        return (res - tax).toFixed(2)

    } return 0})    

    setCalculated(newCalculated)
  }

  const getData = () => {
    if (props.user) {
      UOP.getAll(props.user.id).then(res => {
        setData(res.data.body)
      })
    }
  }

  useEffect(() => {
    if (mounted) {
      getData()
    }

    return () => {setMounted(false)}
  }, [mounted, props.user])

  

  const handleDataChange = () => {
    getData()
  }

  const classes = useStyles();
  //wiek
  const [value, setValue] = useState("yes");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  //


  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
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
                <FormControlLabel value="yes" control={<Radio />} label="Tak" />
                <FormControlLabel value="no" control={<Radio />} label="Nie" />
              </RadioGroup>
            </FormControl>
          </div>
          <ColorButton
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={(event) => {handleCalculate()}}
          >
            Oblicz
          </ColorButton>
          <div className="mt-3">Dochód netto za cały rok: {calculated[0] === 'Nie obliczono' ? 'Nie obliczono' : calculated.reduce((acc: any, curr: any) => acc + Number(curr), 0)}</div>
        </div>

        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <div className="table-responsive">
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow className="head">
                    <StyledTableCell />
                    <StyledTableCell>Miesiąc</StyledTableCell>
                    <StyledTableCell align="center"> Dochód brutto </StyledTableCell>
                    <StyledTableCell align="center"> Dochód netto </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(months).map((month: string, index: number) => (
                    <Row 
                      user_id={props.user ? props.user.id : ''} 
                      key={month} month={month} 
                      data={data.filter((item: any) => item.month === months[month])} 
                      onDataChange={handleDataChange}
                      calculated={calculated[index]} />
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
