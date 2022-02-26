import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBarDetail from './AppBarDetail';

export class FormUserDetails extends Component {
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
            <AppBarDetail label="Personal Info" goBack={this.back}/>
            <TextField
              placeholder="First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Middle Name"
              label="Middle Name"
              onChange={handleChange("middleName")}
              defaultValue={values.middleName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Business Type"
              label="Business Type"
              onChange={handleChange("businessType")}
              defaultValue={values.businessType}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Business Name"
              label="Business Name"
              onChange={handleChange("businessName")}
              defaultValue={values.businessName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Date of Birth"
              label="Date of Birth"
              onChange={handleChange("dateofBirth")}
              defaultValue={values.dateofBirth}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="PAN Number"
              label="PAN Number"
              onChange={handleChange("PANNumber")}
              defaultValue={values.PANNumber}
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
              position="sticky"
              onClick={this.continue}
            >
              Next
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
