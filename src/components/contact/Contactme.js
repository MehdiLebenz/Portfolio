import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Grid from "@material-ui/core/Grid"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Layout from "../layout"
import Recaptcha from 'react-google-recaptcha'
let recaptchaInstance
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#3099B0",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3099B0",
    color: "white",
  },
}))

export default function ContactForm() {
  const classes = useStyles()
const callback = console.log('thank you ! ')
const executeCaptcha = function () {
    recaptchaInstance.execute();
  };
  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactMailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  name="_replyto"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  rowsMax={4}
                  aria-label="maximum height"
                  label="how can i help you ? "
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid item xs={12} style={{}}>
                <Recaptcha
    sitekey="6Lcw7uMZAAAAADM4wF2i5os1HSGT2fkR1Z5loI4P"
    render="explicit"
    onloadCallback={callback}
    type='image'
    size='normal'
    fullWidth
  />
  </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#3099B0"
              className={classes.submit}
              onClick={executeCaptcha}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  )
}
