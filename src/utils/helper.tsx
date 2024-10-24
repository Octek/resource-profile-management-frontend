/* eslint-disable @typescript-eslint/naming-convention */
import { AlertColor } from "@mui/material/Alert";

import { labels } from "~/utils/labels";

import { store } from "~/state/store";

import { AUTH_ENDPOINTS } from "~/rest/endpoints";

import { setResponseMessage } from "~/core/state/coreSlice";

export const handleSuccessMessage = (name: string, action: string) => {
  store.dispatch(
    setResponseMessage({
      message: `${name} ${action} successfully!`,
      messageType: "success",
    })
  );
};

export const handleToastMessage = (name: string) => {
  store.dispatch(
    setResponseMessage({
      message: name,
      messageType: "success",
    })
  );
};

export const isValidEmail = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const handleErroMessage = (name: string) => {
  store.dispatch(
    setResponseMessage({
      message: name,
      messageType: "error",
    })
  );
};

const {
  unAuthorizedCode,
  forbiddenCode,
  badRequest,
  unAuthorized,
  somethingWrong,
  notFoundRequestCode,
  expiredResetLink,
  expiredSetPasswordLink,
} = labels;

const errorCodes = [
  forbiddenCode,
  unAuthorizedCode,
  badRequest,
  notFoundRequestCode,
];

export const responseMessageHandler = (
  messageType: AlertColor,
  message: string | null,
  statusCode: number,
  url: string
) => {
  let finalMessage: string | null = "";
  let sendMessage = true;
  if (
    !errorCodes.includes(statusCode) &&
    (message === "" || message === null)
  ) {
    finalMessage = somethingWrong;
  } else finalMessage = message;
  if (errorCodes.includes(statusCode)) {
    if (url.includes(AUTH_ENDPOINTS.login)) finalMessage = unAuthorized;
    else if (url.includes(AUTH_ENDPOINTS.validateResetPassword))
      finalMessage = expiredResetLink;
    else if (url.includes(AUTH_ENDPOINTS.validateSetPassword)) {
      finalMessage = expiredSetPasswordLink;
      sendMessage = true;
    } else finalMessage = unAuthorized;
  }
  if (sendMessage) {
    store.dispatch(setResponseMessage({ message: finalMessage, messageType }));
  }
};
