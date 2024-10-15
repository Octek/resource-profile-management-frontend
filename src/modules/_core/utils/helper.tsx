import dayjs from "dayjs";
import moment from "moment";

export const paths = {
  loginPage: "/",
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFormattedDate = (dateStr: string) => {
  return dayjs(dateStr).format?.("YYYY-MM-DD");
};

export const getFormattedDateWithTime = (date: string) => {
  return moment(date).format("ddd DD MMM h:mm A");
};

export const getMomentFormattedDate = (dateStr: string) => {
  const date = moment(dateStr);
  return date.format("YYYY-MM-DD");
};
