export const defaultPalette = (theme: any) => {
  return {
    primary: {
      main: theme?.primary_color || "#13416F",
      green: "rgba(0, 186, 190, 1)",
      selectedGreen: "#E5E4E2",
      layoutBg: "#F3F3F3",
      typoBlack: "#000",
      blackishGray: "#494949",
      typoWhite: "#FFFFFF",
      background: "#F8F9FB",
      textLightGray: "#C6C6C6",
      autofillbackground: "#e7f0fe",
      cyan: "#00BABE",
      mainTableBg: "#13416F",
      tableOddRowColor: "#F8F8F8",
      tabBackground: "#F3F3F3",
      grey: "#f0f0f0",
      greyBackground: "#E8E8E8",
      formBg: "#FBFBFB",
      greyFooterBackground: "#D4D4D3",
    },
    secondary: {
      main: "#FFF",
      mainTableBg: "#13416F",
      footerTypography: "#DDD",
      grayTextShade: "var(--text-shade, #AFAFAF)",
      blue: "#1B6AB3",
      textGray: "#808080",
      white: "white",
      active: "#00BF00",
      inActive: "#E74E60",
      pendingBg: "#00A0DE33",
      pendingText: "#00A0DE",
      activeBg: "#6AD17733",
      activeText: "#00BF00",
      expiredBg: "#FF057B33",
      expiredText: "#FF057B",
      columnGroupBg: "#F8F9FB",
    },
  };
};
