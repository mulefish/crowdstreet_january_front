/* NOT sure I love the idea of a footer... */ 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  copy: {
    textAlign: 'center'
  }
}));

const notify = (which_link) => {
  alert(`The link "${which_link}" has not been instrumented up yet.`)
};



export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer>
      <hr />
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink} onClick={() => notify('About')}>[About]</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink} onClick={() => notify('Awards')}>[Awards]</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink} onClick={() => notify('Feedback')}>[Feedback]</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink} onClick={() => notify('Contact')}>[Contact]</Link>
          </Box>
          <Typography color="textSecondary" component="p" variant="body2" gutterBottom={false} className={classes.copy}>© 2021 Ipsum Loren Investing</Typography>
        </Box>
      </Container>
    </footer>
  );
}