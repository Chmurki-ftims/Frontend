import React, { useState, useEffect } from "react";
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

import UOZ from "../../service/uoz";
import { UserProps } from "../interfaces";

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

function Row(props: {
  month: string;
  user_id: string;
  data1: Array<any>;
  UZcalculated: number | string;
  onDataChange(): void;
}) {
  // const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const [titleUZ, setTitleUZ] = useState('');
  const [costValueUZ, setCostValueUZ]: [number, any] = useState(0);

  const handleTitleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTitleUZ(event.target.value as string);
  };

  const handleCostValueChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setCostValueUZ(event.target.value as number)
  }


  // dialog add koniec
  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setopenDialog(true);
  };

  const handleClose = () => {
    setCostValueUZ(0);
    setTitleUZ("");
    setopenDialog(false);
  };
    
  const handleConfirmUZ = () => {
    console.log('id', props.user_id)
    UOZ.create(
      props.user_id,
      months[props.month],
      costValueUZ,
      titleUZ
    ).then(data => {
      alert('Dane zostały dodane')
      props.onDataChange()
      handleClose()
      console.log("handelConfirm", props)
    }, err=>{console.log(err)})
  }

  const handleDelete = (id: string) => {
    let answer: boolean = window.confirm('Czy na pewno chcesz wycofać ten wpis?')

    if(answer) {
      UOZ.delete(props.user_id, id).then(data => {
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
      <StyledTableCell align="center"> {props.data1.reduce((acc: number, curr: any) => acc + curr.value, 0)} </StyledTableCell>
      <StyledTableCell align="center"> {props.UZcalculated} </StyledTableCell>
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
                        Aby obliczyć swój dochód netto,
                          uzupełnij poniższe pola i wciśnij przycisk
                          'Oblicz'.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="titleDialog"
                          label="Tytuł"
                          type="text"
                          fullWidth
                          value={titleUZ}
                          onChange={handleTitleChange}
                        />
                        <TextField
                          margin="dense"
                          id="valueDialog"
                          label="Wartość"
                          type="number"
                          inputProps={{ step: "300", min: "0" }}
                          fullWidth
                          value={costValueUZ}
                          onChange={handleCostValueChange}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Anuluj
                        </Button>
                        <Button onClick={handleConfirmUZ} color="primary">
                          Dodaj
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {props.data1.map((item: any) => (
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

export interface CalculatorUOZProps {
  user: UserProps | null
} 

export default function CalculatorUOZ(props: CalculatorUOZProps) {
  const [mounted, setMounted] = useState(true)
  const [UZdata, setUZData]: [Array<any>, any] = useState([])
  const [UZcalculated, setUZCalculated]: [Array<number | string>, any] = useState(new Array(12).fill('Nie obliczono'))

  const handleCalculate = () => {
    const newCalculated = Object.values(months).map((month: any, index: number) => {
      const brutto = UZdata.filter((item: any) => item.month === month).reduce((acc:number, curr: any) => acc + curr.value, 0)

      let skl = brutto*0.1371; 

      let res = brutto - skl; 
    
      let res2 = res; 
      if (valueage === 'yes') {
        res = res - (res*0.09)
        return res.toFixed(2)
      }

      let tax; 
      if (value === "0.2"){
        tax = res * 0.2; 
      }
      else{
        tax = res * 0.5; 
      }
      
      res = res - tax; 

      let progres = res * 0.17;

      progres = progres - res2 * 0.0775;

      let resultfinal = brutto - (brutto * 0.2271) - progres;

      let final = resultfinal.toFixed(2);
      return final;
    })    

    setUZCalculated(newCalculated)
  }

  const getData = () => {
    if (props.user) {
      console.log(props.user.id)
      UOZ.getAll(props.user.id).then(res => {
        console.log(res)
        console.log(res.data.body)
        setUZData(res.data.body)
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
    console.log('hello')
    getData()
  }

  const classes = useStyles();
  //wiek
  const [valueage, setValueAge] = useState("yes");

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueAge((event.target as HTMLInputElement).value);
  };
  //
  const [value, setValue] = useState("0.2");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="container-fluid page">
      <div className="form-row">
        <div className="col-3">
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
                  value={valueage}
                  onChange={handleChangeAge}
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
              onClick={(event) => {handleCalculate()}}
            >
              Oblicz
            </ColorButton>
            <div className="mt-3">Dochód netto za cały rok: {UZcalculated[0] === 'Nie obliczono' ? 'Nie obliczono' : UZcalculated.reduce((acc: any, curr: any) => acc + Number(curr), 0)}</div>
        </div>

        <div className="col-9">
          <div className="table-responsive">
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell />
                    <StyledTableCell>Miesiąc</StyledTableCell>
                    <StyledTableCell align="center">Dochód brutto</StyledTableCell>
                    <StyledTableCell align="center">Dochód netto</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {Object.keys(months).map((month: string, index: number) => (
                    <Row 
                      user_id={props.user ? props.user.id : ''} 
                      key={month} month={month} 
                      data1={UZdata.filter((item: any) => item.month === months[month])} 
                      onDataChange={handleDataChange}
                      UZcalculated={UZcalculated[index]} />
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
