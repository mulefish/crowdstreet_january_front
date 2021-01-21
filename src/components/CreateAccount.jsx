import { ACTIONS } from '../redux';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import Container from '@material-ui/core/Container';
import { getI8N, getStyle } from './constants'
import Grid from '@material-ui/core/Grid';
import { isEmail, isPasswordGoodEnough } from './utils';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

const useStyles = getStyle()

const NILL = "" // I one man war again quote marks

export default function Contact(props) {

  const [warningfirstname, setWarningFirstname] = useState("");
  const [warninglastname, setWarningLastname] = useState("");
  const [warningEmail, setWarningEmail] = useState("");
  const [warningPassword, setWarningPassword] = useState("");
  const [warningPassword2, setWarningPassword2] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");

  const reset_form = () => {

    setWarningFirstname(NILL)
    setWarningLastname(NILL)
    setWarningEmail(NILL)
    setWarningPassword(NILL)
    setWarningPassword2(NILL)

  }

  const validateInputs = (history) => {
    let isOk = true
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let password2 = document.getElementById("password2").value.trim();

    if (firstname.length > 0) {
      setWarningFirstname(NILL)
    } else {
      setWarningFirstname(human_facing_content.first_name_needed)
      isOk = false
    }

    if (lastname.length > 0) {
      setWarningLastname(NILL)
    } else {
      setWarningLastname(human_facing_content.last_name_needed)
      isOk = false
    }

    if (email.length > 0) {
      if (isEmail(email) == true) {
        setWarningEmail(NILL)
      } else {
        setWarningEmail(human_facing_content.email_illformed)
        isOk = false
      }
    } else {
      setWarningEmail(human_facing_content.email_needed)
      isOk = false
    }

    if (isPasswordGoodEnough(password) == true) {
      setWarningPassword(NILL)
    } else {
      setWarningPassword(human_facing_content.password_too_simple)
      isOk = false
    }

    if (password === password2) {
      setWarningPassword2(NILL)
    } else {
      setWarningPassword2(human_facing_content.passwords_mismatch)
      isOk = false
    }

    if (isOk) {

      dispatch({
        type: ACTIONS.RESET_RANDOM,
        random: Math.random()
      })
    
      dispatch({
        type: ACTIONS.SET_FIRST_NAME,
        firstname: firstname
      });
      dispatch({
        type: ACTIONS.SET_LAST_NAME,
        lastname: lastname
      });

      setWarningFirstname(NILL)
      setWarningLastname(NILL)
      setWarningEmail(NILL)
      setWarningPassword(NILL)
      setWarningPassword2(NILL)

      history.push('/Success')
    }
  };

  const classes = useStyles();

  let human_facing_content = getI8N()
  human_facing_content['image'] = 'rocket-1206.png'
  human_facing_content['header'] = 'Step 2 of 2: Quis es?'
  human_facing_content['small_print'] = 'Cum MMXXI finis noster fuit offerre tibi in sapientiae beneficia dolor facere judicium Financially de pecunia tua, ut possis sentire secure. Nos vis facere diu-term: personalem necessitudinem cum vobis. Habent longo-term necessitudinem nobis concedit ut focus in servitium non tradet vos mos eximia, sed etiam ad emendare voluntas tua, ut anima qualis est. Expectamus ad vos modo et pacem animi, qui cum est scire dicta est scientia tua tibi financially secure.'

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={10} pb={8} display="flex" className={classes.firstBox}>
            <Container>
              <Box mb={4}>
                <Typography variant="h4" component="h2" gutterBottom={true}>{human_facing_content.header}</Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{human_facing_content.description}</Typography>
              </Box>

              <form noValidate>
                <Grid container spacing={2}>
                  {/* // FIRST NAME  */}
                  <Grid item xs={6} >
                    <TextField required fullWidth autoComplete="fname" name="firstname" id="firstname" label="First name" />
                  </Grid>
                  <Grid item xs={6} >
                    <Typography className={classes.warning} >{warningfirstname}</Typography>
                  </Grid>

                  {/* LAST NAME  */}
                  <Grid item xs={6} >
                    <TextField required fullWidth name="lastname" id="lastname" label="Last name" autoComplete="lname" />
                  </Grid>
                  <Grid item xs={6} >
                    <Typography className={classes.warning} >{warninglastname}</Typography>
                  </Grid>

                  {/* EMAIL ADDRESS  */}
                  <Grid item xs={6}>
                    <TextField required fullWidth name="email" id="email" label="Email address" autoComplete="email" />
                  </Grid>
                  <Grid item xs={6} >
                    <Typography className={classes.warning} >{warningEmail}</Typography>
                  </Grid>
                  {/* PASSWORD  */}
                  <Grid item xs={6}>
                    <TextField required fullWidth name="password" id="password" label="Password" type="password" autoComplete="off" />
                  </Grid>
                  <Grid item xs={6} >
                    <Typography className={classes.warning} >{warningPassword}</Typography>
                  </Grid>
                  {/* DUPLICATE PASSWORD  */}
                  <Grid item xs={6}>
                    <TextField required fullWidth name="password2" id="password2" label="Retype password" type="password" autoComplete="off" />
                  </Grid>
                  <Grid item xs={6} >
                    <Typography className={classes.warning} >{warningPassword2}</Typography>
                  </Grid>

                </Grid>
                <Box xs={12}>
                  <br />

                  <Button color="primary"
                    onClick={() => reset_form()}
                    endIcon={<CallMissedOutgoingIcon />}>{human_facing_content.redo_step}</Button>

                  <Button color="primary"
                    onClick={() => setErrorMsg(validateInputs(history))}
                    endIcon={<ArrowRightAltIcon />}>{human_facing_content.next_step}</Button>

                  <div className={classes.errorMsg}>
                    {errorMsg}
                  </div>

                  <hr />
                  <div>
                    {human_facing_content.small_print}
                  </div>
                </Box>
              </form>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box position="relative" height={600}>
            <img className={classes.fullHeightImage} src={human_facing_content['image']} alt="Rocket ship logo" />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}