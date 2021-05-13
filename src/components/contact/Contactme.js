
import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,

} from '@material-ui/pickers';


const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

function ContactForm() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Contact me now
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} method="post"
          etlify-honeypot="bot-field"
          data-netlify="true" 
          name="contact" noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="firstName"
                    component={TextField}
                    type="text"
                    label="First Name"
                  />
                    <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="lastName"
                    component={TextField}
                    type="text"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>

                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">You need ? </FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Agile Coaching"
                        control={
                          <Field
                            name="Agile Coaching"
                            component={Checkbox}
                            type="checkbox"
                            value="yes"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Projet Management"
                        control={
                          <Field
                            name="Projet Management"
                            component={Checkbox}
                            type="checkbox"
                            value="yes"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Marketing Service"
                        control={
                          <Field
                            name="Marketing Service"
                            component={Checkbox}
                            type="checkbox"
                            value="yes"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Web dev"
                        control={
                          <Field
                            name="Web dev"
                            component={Checkbox}
                            type="checkbox"
                            value="yes"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="notes"
                    component={TextField}
                    multiline
                    label="Notes"
                  />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                </MuiPickersUtilsProvider>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}



export default ContactForm
