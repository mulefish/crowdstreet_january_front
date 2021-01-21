import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { getStyle } from './constants'
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { capitalize_first_name } from "./../components/utils.js";

const useStyles = getStyle()
export default function Sorry(props) {
    const classes = useStyles();
    const count = useSelector((state) => state.count)
    const investment = useSelector((state) => state.investment)
    const amount = useSelector((state) => state.amount)
    const credit = useSelector((state) => state.credit)
    const income = useSelector((state) => state.income)
    const firstname = useSelector((state) => state.firstname)
    const lastname = useSelector((state) => state.lastname)
    const reason = useSelector((state) => state.reason)
    
    const human_facing_content = {
        'header': 'Step 1 of Many: Zoom! Boa sorte.',
        'image':'fireworks.png'
    };
    return (
        <section>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box pt={10} pb={8} display="flex" className={classes.firstBox}>
                        <Container>
                            <Box mb={4}>
                                <Typography variant="h4" component="h2" gutterBottom={true}>{human_facing_content.header}</Typography>
                                
                                Dear <span className={classes.message}>{capitalize_first_name(firstname)}</span>; 
                                <p></p>
                                Our algorithm has granted you access. Over the next few days please expect a call from <span className={classes.message}> 555.123.4567 </span> and one of our customer representives to coordinate on our mutual next steps. 

                                <table border='0'>
                                    <tbody>
                                        <tr><th colspan='3'>Our algorithm's choice to accept you was based on the following provided information</th></tr>
                                        <tr><td align='right'>firstname</td><td>&nbsp;</td><td>{firstname}</td></tr>
                                        <tr><td align='right'>lastname</td><td>&nbsp;</td><td>{lastname}</td></tr>
                                        <tr><td align='right'>amount</td><td>&nbsp;</td><td>{amount}</td></tr>
                                        <tr><td align='right'>credit</td><td>&nbsp;</td><td>{credit}</td></tr>
                                        <tr><td align='right'>income</td><td>&nbsp;</td><td>{income}</td></tr>
                                        <tr><td align='right'>investment</td><td>&nbsp;</td><td>{investment}</td></tr>
                                        <tr><td align='right' >status</td><td>&nbsp;</td> <td>{reason}</td></tr>
                                    </tbody>
                                </table>
                                <br />


<p/>
Maecenas interdum egestas egestas. Cras eget scelerisque risus. Suspendisse aliquam eget nunc ac dictum. Nullam tincidunt magna quis lacus facilisis, et feugiat lacus efficitur. Etiam elementum egestas commodo. Quisque feugiat dolor eu sapien tincidunt, sit amet tincidunt ligula fermentum. Etiam nec imperdiet enim. Curabitur semper sollicitudin sapien, eget hendrerit risus dignissim ut. Sed elementum nulla non mi varius, eget feugiat erat faucibus. Morbi egestas risus nec nibh sodales scelerisque.
<p/>
Ut aliquam, quam sed sodales aliquet, lectus urna lobortis tortor, in placerat metus lectus vitae elit. Aliquam facilisis velit ac dolor tempor, in lacinia est consectetur. Sed odio dolor, consectetur pretium velit id, imperdiet cursus ligula. Maecenas libero libero, varius at nisi vitae, cursus imperdiet ante. Etiam nec luctus diam. Duis sagittis nisl erat, ac commodo nisl sodales vitae. Vivamus nulla enim, suscipit in tempus et, pharetra eget risus. Donec ut fermentum purus, at ullamcorper justo. 


                            </Box>
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box position="relative" height={600}>
                        <img className={classes.fullHeightImage} src='fireworks.png' alt="Rocket ship logo" />
                    </Box>
                </Grid>
            </Grid>
        </section>
    );
}