/* eslint-disable @typescript-eslint/naming-convention */
import makeStyles from "@mui/styles/makeStyles";

export const MenuItemStyle = {
  fontSize: 16,
  fontWeight: 400,
};
export const tabStyle = makeStyles({
  customStyleOnTab: {
    textTransform: "none",
    fontSize: "0.97rem",
    fontWeight: 400,
    fontFamily: "SegoeUI",
    "&.MuiButtonBase-root-MuiTab-root": {
      minHeight: "36px",
      height: "36px",
    },
    "&.MuiTab-root.Mui-selected": {
      backgroundColor: "#00BABE",
      borderRadius: "4px",
    },
    "&.MuiTab-textColorPrimary": {
      color: "black",
      "&.Mui-selected": {
        color: "white",
      },
    },
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 100,
      width: "100%",
      backgroundColor: "transparent",
    },
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const dataGridColumnMenuStyle = {
  "& span, & svg": { fontSize: "1rem", fontWeight: 400 },
};

export const textfieldStyle = makeStyles({
  customNumberField: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    '& input[type="number"]': {
      "-moz-appearance": "textfield",
    },
    "&:-webkit-autofill": {
      transitionDelay: "9999s",
      transitionProperty: "background-color, color",
    },
  },
});
