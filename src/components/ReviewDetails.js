import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBarDetail from './AppBarDetail';

export class ReviewDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBarDetail label="Summary:Review Details" goBack={this.back}/>
            <TextField
              placeholder="Address"
              label="Address"
              onChange={handleChange("address")}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Landmark"
              label="Landmark"
              onChange={handleChange("landmark")}
              defaultValue={values.landmark}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Pin Code"
              label="Pin Code"
              onChange={handleChange("pinCode")}
              defaultValue={values.pinCode}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Locality"
              label="Locality"
              onChange={handleChange("locality")}
              defaultValue={values.locality}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="City"
              label="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="State"
              label="State"
              onChange={handleChange("state")}
              defaultValue={values.state}
              margin="normal"
              fullWidth
            />
            
            <br />
            <Button
              style={{
                backgroundColor: "#24c8a6",
                fontSize: "16px",
                color:"#ffffff",
                textTransform:"capitalize",
                fontWeight:400
              }}
              variant="contained"
              onClick={this.continue}
            >
              Finish Application
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ReviewDetails;
