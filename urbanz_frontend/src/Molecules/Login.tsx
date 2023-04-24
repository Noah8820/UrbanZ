import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import DataService from "../Service/DataService";
function Copyright(props: any) {
  return <></>;
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            alt="test"
            src="/src/atoms/imgbin-computer-icons-login-icon-design-others-Ns9hr77heuX0cLhBGRjphB4Ng.jpg"
          ></Avatar>
          <center>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              enableReinitialize
              validate={(values) => {
                const errors: { email?: string } = {};

                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                DataService()
                  .login(values.email, values.password)
                  .then(() => {
                    navigate("/cards", { replace: true });
                  })
                  .catch(() => {
                    setLoginError(true);
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting, isValid }) => (
                <Form>
                  <Box sx={{ mt: 1 }}>
                    <Field
                      placeholder="Email Address"
                      margin="normal"
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <br />
                    <ErrorMessage name="email" component="div" />

                    <Field
                      placeholder="Password"
                      margin="normal"
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <ErrorMessage name="password" component="div" />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isSubmitting || !isValid}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Login
                    </Button>
                    {loginError && (
                      <div style={{ color: "red" }}>
                        Invalid email or password
                      </div>
                    )}
                  </Box>
                </Form>
              )}
            </Formik>
          </center>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
