import { alpha, createTheme, responsiveFontSizes } from "@mui/material";
import { ReactComponent as AutoCompleteIcon } from "./icons/AutoCompleteIcon.svg";



let Custmise = createTheme({
  palette: {
    primary: { main: "#5462E6" },
    secondary: { main: "#1F2937" },
    warning: { main: "#FF9900" },
    success: { main: "#33CC00" },
    error: { main: "#E03536" },
    divider: "rgba(255, 255, 255, 0.15)",
    gradient:"linear-gradient(to right bottom, #0c62e1, #0998d4, #33bba1)",
    background: {
      default: "#223f93",
      paper: "#111827",
      card: "#111827",
    },
    text: {
      primary: "#bbbbbb",
      secondary: "#6B7280",
      disabled: "rgba(255,255,255,0.3)",
    },
    action: {
      disabledBackground: "rgba(0, 158, 247, 0.5)",
      hoverOpacity: 0.07,
      hover: alpha("#5462E6", 0.2),
      disabled: "#ffffff55",
      disabledOpacity: 0.3,
      selectedOpacity: 0.5,
    },
  },

  typography: {
    fontSize: 13.5,
    fontFamily: [
      "'Poppins'",
      "'Roboto'",
      "'Oxygen'",
      "'Ubuntu'",
      "'Cantarell'",
      "'sans-serif'",
    ].join(","),
    button: {
      fontFamily: "Poppins",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  spacing: (a) => `${a}rem`,
  shape: { borderRadius: 5 },
});

let Theme = createTheme({
  ...Custmise,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        [Custmise.breakpoints.up("md")]: {
          "*::-webkit-scrollbar": {
            display: "none",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#F43F5E",
            borderRadius: "100vmax",
          },
        },
        a: {
          textDecoration: "none",
          color: "#fff"
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { padding: "0px" },
      },
    },
    MuiButton: {
      defaultProps: {
        fullWidth: true,
        variant: "contained",
        size: "medium",
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          color: "#dddddd",
          boxShadow: Custmise.shadows[3],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "0px",
          "&:-webkit-autofill": {
            WebkitTextFillColor: Custmise.palette.text.primary,
            WebkitBoxShadow: `0 0 0px 1000px ${Custmise.palette.background.paper} inset`,
            boxShadow: `0 0 0px 1000px ${Custmise.palette.background.paper} inset`,
          },
          "&:-webkit-autofill:hover": {
            WebkitTextFillColor: Custmise.palette.text.primary,
            WebkitBoxShadow: `0 0 0px 1000px ${Custmise.palette.background.paper} inset`,
            boxShadow: `0 0 0px 1000px ${Custmise.palette.background.paper} inset`,
          },
          "&:-webkit-autofill:focus": {
            WebkitTextFillColor: Custmise.palette.text.primary,
            WebkitBoxShadow: `0 0 0px 1000px ${Custmise.palette.background.paper} inset`,
            boxShadow: `0 0 0px 1000px ${Custmise.palette.background.paper} inset`,
          },
          "&::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            margin: 0,
          },
          "&::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            margin: 0,
          },
          "&::-webkit-calendar-picker-indicator": {
            filter: "invert(0.5)",
          },
          "&::placeholder": {
            color: "#6B7280",
          },
        },
      },
    },
    MuiInput: {
      defaultProps: { disableUnderline: true, fullWidth: true },
      styleOverrides: {
        root: {
          gap: Custmise.spacing(1),
          padding: Custmise.spacing(1),
          borderRadius: Custmise.shape.borderRadius,
          boxSizing: "border-box",
          border: "1px solid #374151",
          "&.Mui-error": {
            border: `1px solid ${Custmise.palette.error.main}`,
          },
        },
        multiline: {
          padding: "0.5rem !important",
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <AutoCompleteIcon />,
        clearIcon: null,
      },
      styleOverrides: {
        endAdornment: { right: "0.6rem", top: "calc(50% - 12px)" },
        inputRoot: {
          padding: `${Custmise.spacing(1)} !important`,
          "& .MuiFilledInput-input": { padding: "0px" },
        },
        input: {
          padding: "0px !important",
        },
      },
    },
    MuiFilledInput: {
      defaultProps: { disableUnderline: true, hiddenLabel: true },
      styleOverrides: {
        root: {
          padding: "0.5em",
          borderRadius: Custmise.shape.borderRadius,
          "&.Mui-error": {
            border: `1px solid ${Custmise.palette.error.main}`,
          },
        },
        input: {
          padding: "0px",
        },
      },
    },
    MuiTextField: {
      defaultProps: { fullWidth: true, variant: "standard", size: "medium" },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "0.83rem",
          lineHeight: 1.43,
          margin: "0px",
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        anchor: "right",
      },
      styleOverrides: {
        paper: {
          background: Custmise.palette.background.default,
          width: "min(450px , 85%)",
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        paper: {
          width: "min(700px , 95%)",
          background: Custmise.palette.background.default,
          padding: Custmise.spacing(4),
        },
        container: {
          backdropFilter: "blur(1px)",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          width: "35px",
          height: "35px",
          backgroundColor: "linear-gradient(180deg, #F43F5E 0%, #0442A3 100%)",
        },
      },
    },
    MuiTableRow: {
      defaultProps: { hover: true },
      styleOverrides: {
        root: {
          "&.MuiTableRow-hover:hover": {
            backgroundColor: "rgba(17, 24, 39, 0.7)",
          },
        },
        footer: {
          background: `${Custmise.palette.background.default} !important`,
          left: 0,
          bottom: 0.5,
          zIndex: 2,
          position: "sticky",
        },
      },
    },
    MuiTableCell: {
      defaultProps: { align: "left" },
      styleOverrides: {
        body: {
          color: Custmise.palette.text.secondary,
          paddingTop: Custmise.spacing(1.8),
          paddingBottom: Custmise.spacing(1.8),
          whiteSpace: "nowrap",
          borderBottom: "1px solid #111827",
        },
        head: {
          borderBottom: "none",
          background: "#111827",
          paddingTop: Custmise.spacing(1.8),
          paddingBottom: Custmise.spacing(1.8),
          whiteSpace: "nowrap",
        },
        footer: {
          borderBottom: "none",
          paddingTop: "5px",
          paddingBottom: "5px",
        },
      },
    },
    MuiTable: {
      defaultProps: {
        stickyHeader: true,
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          "&::-webkit-scrollbar": {
            width: "7px",
            height: "7px",
            background: "transparent",
            display: "block",
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: Custmise.palette.background.default,
          },
          "&::-webkit-scrollbar-track": {
            borderRadius: "100vmax",
            backgroundColor: "tranparent",
            backgroundClip: "padding-box",
            border: "10px solid rgba(0, 0, 0, 0)",
            height: "80%",
          },
          "&::-webkit-scrollbar-thumb": {
            width: "5px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backgroundClip: "padding-box",
            border: "1px solid rgba(0, 0, 0, 0)",
            borderRadius: "100vmax",
          },
          overflow: "auto",
          position: "relative",
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      },
      styleOverrides: {
        list: {
          minWidth: "120px",
        },
      },
    },
    MuiMenuItem: { styleOverrides: { root: { textTransform: "capitalize" } } },
    MuiPaginationItem: {
      styleOverrides: {
        root: { minWidth: "25px", height: "25px" },
      },
    },
    MuiPagination: {
      defaultProps: {
        showFirstButton: true,
        showLastButton: true,
      },
      styleOverrides: {
        root: {
          background: Custmise.palette.background.paper,
          padding: "4px",
          borderRadius: "100vmax",
          width: "min-content",
        },
        ul: {
          flexWrap: "nowrap",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          "&::before": {
            background: "transparent",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          background: Custmise.palette.secondary.main,
          height: "48px",
          position: "relative",
          "&.Mui-expanded": {
            height: "48px",
            minHeight: "48px",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0px",
          overflow: "hidden",
        },
      },
    },
  },
});

Theme = responsiveFontSizes(Theme);

export default Theme;
