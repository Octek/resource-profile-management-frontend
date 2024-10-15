import { AlertColor } from "@mui/material/Alert";

// declaring the types for our state
type UserState = {
  token: string | null;
  refreshToken: string | null;
  validity: number | null;
  refreshValidity: number | null;
  tokenType: string | null;
  message: string | null;
  messageType: AlertColor | undefined;
  isSnackOpen: boolean;
  parentItem: string;
  childItem: string;
  openModal: boolean;
  modalTitle: string;
  openPopOver: boolean;
};
const userInitialState: UserState = {
  token: null,
  refreshToken: null,
  validity: null,
  refreshValidity: null,
  tokenType: null,
  message: null,
  messageType: undefined,
  isSnackOpen: false,
  parentItem: "",
  childItem: "",
  openModal: false,
  modalTitle: "Modal",
  openPopOver: false,
};

export default userInitialState;
