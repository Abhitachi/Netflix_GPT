const validate = (email, password) => {
  const validateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateEmail) return "Email is Not Valid";
  if (!validatePassword) return "Password is Not Valid";

  return null;
};

export default validate;
