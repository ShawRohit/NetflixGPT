export const checkValidData = (email, password) => {
  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const passwordRe = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})$/i;
  const isEmailvalid = emailRe.test(email);
  const isPasswordValid = passwordRe.test(password);

  if (!isEmailvalid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
