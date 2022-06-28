import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#007A53",
    },
    secondary: {
      main: "#51951C"
    }
  },
  overrides: {
    MuiGrid: {
      root: {
        background: "#F5F5F5",
      }
    },
    MuiTabs: {
      root: {
        minHeight: "3.25rem",
        background: "#FFF",
        borderBottom: "1px solid rgba(80, 90, 95, 0.5)",
      },
      indicator: {
        backgroundColor: "#64A70B",
      },
    },

    MuiTab: {
      textColorInherit: {
        color: "rgb(80, 90, 95)",
        opacity: 1,
      },
      wrapper: {
        width: "100%",
        display: "inline-flex",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);