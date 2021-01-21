import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { getStyle } from './constants'
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';

let useStyles = getStyle()

export default function Sorry(props) {

    const classes = useStyles();
    const investment = useSelector((state) => state.investment)
    const amount = useSelector((state) => state.amount)
    const credit = useSelector((state) => state.credit)
    const income = useSelector((state) => state.income)
    const reason = useSelector((state) => state.reason)

    /* Allow easier i18n */
    const human_facing_content = {
        'header': 'Disqualification: Nos desculpe. Boa sorte.',
        'image': 'noun_Dead Fish_21632.png'
    };
    return (
        <section>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box pt={10} pb={8} display="flex" className={classes.firstBox}>
                        <Container>
                            <Box mb={4}>
                                <Typography variant="h4" component="h2" gutterBottom={true}>{human_facing_content.header}</Typography>
                                    Dear candidatee, we are <span className={classes.message} >sorry</span>. 
                                    <p>
                                    </p>
                                    To talk with our customer service people please call <span className={classes.message} > 555.748.2584 </span>if you have any questions.

                                <table border='0'>
                                    <tbody>
                                        <tr><th colspan='3'>Our algorithm's choice to deny was based on the following provided information</th></tr>
                                        <tr><td align='right'>investment</td><td>&nbsp;</td><td>{investment}</td></tr>
                                        <tr><td align='right'>amount</td><td>&nbsp;</td><td>{amount}</td></tr>
                                        <tr><td align='right'>credit</td><td>&nbsp;</td><td>{credit}</td></tr>
                                        <tr><td align='right'>income</td><td>&nbsp;</td><td>{income}</td></tr>
                                        <tr><td align='right'>Why</td><td>&nbsp;</td><td className={classes.message}>{reason}</td></tr>
                                    </tbody>
                                </table>
                                <br />
Maecenas interdum egestas egestas. Cras eget scelerisque risus. Suspendisse aliquam eget nunc ac dictum. Nullam tincidunt magna quis lacus facilisis, et feugiat lacus efficitur. Etiam elementum egestas commodo. Quisque feugiat dolor eu sapien tincidunt, sit amet tincidunt ligula fermentum. Etiam nec imperdiet enim. Curabitur semper sollicitudin sapien, eget hendrerit risus dignissim ut. Sed elementum nulla non mi varius, eget feugiat erat faucibus. Morbi egestas risus nec nibh sodales scelerisque.

                            </Box>
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