import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";
import { BackSquareBox, LoginFormBox } from "./styles";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}
const backSquare = [0, 1, 2, 3, 4];
export const LoginForm = () => {
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <LoginFormBox>
      <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          {backSquare.map((item) => {
            return (
              <BackSquareBox className="square" num={item}></BackSquareBox>
            );
          })}
          <div className="container">
            <div className="form">
              <h2>Login Form</h2>
              <form>
                <div className="inputBox">
                  <FormControl
                    sx={{ m: 1 }}
                    variant="outlined"
                    className="inputItem"
                  >
                    <InputLabel
                      htmlFor="filled-adornment-text"
                      className="label"
                    >
                      UserName
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-text"
                      type="text"
                      value={values.username}
                      onChange={handleChange("username")}
                      className="inputBack"
                    />
                  </FormControl>
                </div>
                <div className="inputBox">
                  <FormControl
                    sx={{ m: 1 }}
                    variant="outlined"
                    className="inputItem"
                  >
                    <InputLabel
                      htmlFor="filled-adornment-password"
                      className="label"
                    >
                      Password
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      className="inputBack"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
                <p className="forget">
                  Forgot Password ? <a href="#">Click Here</a>
                </p>
                <p className="forget">
                  Don't have an account ? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LoginFormBox>
  );
};
