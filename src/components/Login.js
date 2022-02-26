import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export class Login extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar position="static" style={{
                backgroundColor: "#337ab6",
              }}>
              <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                  Get Started
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                mt: 3,
                minWidth: { md: 350 },
              }}
            >
              <Box component="span" sx={{ fontSize: 22, mt: 1,color: "#333" }}>
                Let's get Started
              </Box>
              <Box
                component="span"
                sx={{ color: "#333", fontSize: 14, mt: 1 }}
              >
                Apply, Track & Manage your Credit Line
              </Box>
            </Box>
            <TextField
              placeholder="Email Address"
              label="Email Address"
              onChange={handleChange("emailAddress")}
              defaultValue={values.emailAddress}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="OTP"
              label="OTP"
              onChange={handleChange("otp")}
              defaultValue={values.otp}
              margin="normal"
              fullWidth
            />
            <br />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                mt: 0,
                minWidth: { md: 350 },
              }}
            >
              <Box
                component="span"
                sx={{ color: "#333", fontSize: 14, mt: 1 }}
              >
                Didn't Receive OTP? Resend
              </Box>
            </Box>
            <br/>
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
              Start Now
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Login;
