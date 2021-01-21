import { ACTIONS } from '../redux';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import Container from '@material-ui/core/Container';
import { getI8N, getStyle } from './constants'
import Grid from '@material-ui/core/Grid';
import { isOnlyWholePositiveNumbers, fake_restful_call } from './utils';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';

const NILL = ""
const useStyles = getStyle()

export default function Contact(props) {
    const count = useSelector((state) => state.count);
    const investment = useSelector((state) => state.investment)
    const amount = useSelector((state) => state.amount)
    const credit = useSelector((state) => state.credit)
    const income = useSelector((state) => state.income)

    const dispatch = useDispatch()

    const history = useHistory()
    const [errorMsg, setErrorMsg] = useState("")
    //
    const [warningCredit, setWarningCredit] = useState("")
    const [warningIncome, setWarningIncome] = useState("")
    const [warningWorth, setWarningWorth] = useState("")
    const [warningAmount, setWarningAmount] = useState("")
    //
    const reset_form = () => {
        //
        setWarningCredit(NILL)
        setWarningIncome(NILL)
        setWarningWorth(NILL)
        setWarningAmount(NILL)
        //
        document.getElementById("Investment-Amount").value = NILL
        document.getElementById("TotalNetWorth").value = NILL
        document.getElementById("Est-Yearly-Income").value = NILL
        document.getElementById("Est-Credit-Score").value = NILL
        //
        dispatch({
            type: ACTIONS.SET_FINANCIAL_DETAILS,
            investment: 0,
            amount: 0,
            credit: 0,
            income: 0
        });
    }

    const validateInputs = (history) => {
        let isOk = true
        ////////////////
        const ia = document.getElementById("Investment-Amount").value.trim();
        if (isOnlyWholePositiveNumbers(ia)) {

            setWarningAmount(NILL)
        } else {
            setWarningAmount(human_facing_content.warning_amount)
            isOk = false
        }
        ///////////////
        const tnw = document.getElementById("TotalNetWorth").value;
        if (isOnlyWholePositiveNumbers(tnw)) {
            setWarningWorth(NILL)
        } else {
            setWarningWorth(human_facing_content.warning_worth)
            isOk = false
        }
        /////////////// 
        const eyi = document.getElementById("Est-Yearly-Income").value
        if (isOnlyWholePositiveNumbers(eyi)) {
            setWarningIncome(NILL)
        } else {
            setWarningIncome(human_facing_content.warning_income)
            isOk = false
        }
        /////////////////
        const ecs = document.getElementById("Est-Credit-Score").value
        if (isOnlyWholePositiveNumbers(ecs)) {
            if (ecs > 850) {
                isOk = false
                setWarningCredit(human_facing_content.warning_credit_impossible)
            } else {
                setWarningCredit(NILL)
            }
        } else {
            setWarningCredit(human_facing_content.warning_credit)
            isOk = false
        }

        dispatch({
            type: ACTIONS.SET_FINANCIAL_DETAILS,
            investment: ia,
            amount: tnw,
            credit: ecs,
            income: eyi
        });

        if (isOk) {
            fake_restful_call(ia, tnw, ecs, eyi).then(result => {
                dispatch({ // true or false 
                    type: ACTIONS.SET_DETERMINATION,
                    determination: result.determination
                });
                dispatch({ // note about _why_ is was true or false
                    type: ACTIONS.SET_REASON,
                    reason: result.reason
                });
        
                if (result.determination === true) {
                    history.push('/Create')
                } else {
                    // history.push('/Create')
                    history.push('/Sorry')
                }
            });
        }
    };
    const classes = useStyles();
    let human_facing_content = getI8N()
    human_facing_content['image'] = 'rocket4.png'

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
                                Please use dollar denominated whole numbers in the form.
                                <Grid container spacing={2}>
                                    {/* ///  */}
                                    <Grid item xs={6}>
                                        <TextField name="Investment-Amount" id="Investment-Amount" label="Investment Amount" />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography className={classes.warning} >{warningAmount}</Typography>
                                    </Grid>
                                    {/* ///  */}
                                    <Grid item xs={6}>
                                        <TextField name="TotalNetWorth" id="TotalNetWorth" label="Total Net Worth" />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography className={classes.warning} >{warningWorth}</Typography>
                                    </Grid>
                                    {/* ///  */}
                                    <Grid item xs={6}>
                                        <TextField name="Est-Yearly-Income" id="Est-Yearly-Income" label="Est. Yearly Income" />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography className={classes.warning} >{warningIncome}</Typography>
                                    </Grid>
                                    {/* ///  */}
                                    <Grid item xs={6}>
                                        <TextField name="Est-Credit-Score" id="Est-Credit-Score" label="Est. Credit Score" />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography className={classes.warning} >{warningCredit}</Typography>
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
Cum MMXXI finis noster fuit offerre tibi in sapientiae beneficia dolor facere judicium Financially de pecunia tua, 
ut possis sentire secure. Nos vis facere diu-term: personalem necessitudinem cum vobis. 
Habent longo-term necessitudinem nobis concedit ut focus in servitium non tradet vos mos eximia, 
sed etiam ad emendare voluntas tua, ut anima qualis est. Expectamus ad vos modo et pacem animi, 
qui cum est scire dicta est scientia tua tibi financially secure.<p />Et hoc est quod quidam textus 
plus pone hic extendere huic sectioni dare.
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