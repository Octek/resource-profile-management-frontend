export const defaultPalette = (theme: any) => {
  return {
    primary: {
      main: theme?.primary_color || "#13416F",
      greyBg: "#f9f9f9",
    },
    secondary: {
      main: "#FFF",
      mainTableBg: "#13416F",
      greyBg: "#f9f9f9",
      purple: "#5258fb",
      white: "#FFFFFF",
      skillBg: "#f0f1fd",
    },
  };
};
