import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Company Email is required"),
});
