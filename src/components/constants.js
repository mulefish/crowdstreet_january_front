import { makeStyles } from '@material-ui/core/styles';

// 'function' keyword denotes func that ought to be unittested. I use 'const' for funcs that I will not unittest ( likely because .jsx but other reasons also )

export function getI8N() {
    // English strings. Spanish or Chinese or whatever would be easy to impliment
    let english = {
        'header': 'Step 1  of 2: Da nobis financial notitia',
        'redo_step': 'Clear selections',
        'next_step': 'Next step',
        'image': 'rocket4.png',
        //
        'helper_text_invest': 'What amount you are looking to invest now?',
        'helper_text_networth': 'Approximently, how much is your net-worth?',
        'helper_text_credit': 'Approximently, what is your credit score?',
        'helper_text_income': 'Approximently, what is your yearly income?',
        //
        'select_text_amount': 'Investment Amount',
        'select_text_worth': 'Total Net Worth',
        'select_text_income': 'Estimated Yearly Income',
        'select_text_credit': 'Estimated Credit Score',
        //
        'warning_amount': 'Enter amount to invest, using only numbers',
        'warning_worth': 'Enter amount of net worth, using only numbers',
        'warning_income': 'Enter amount of yearly income, using only numbers',
        'warning_credit': 'Using only numbers, what is your credit score?',
        'warning_credit_impossible': 'Credit scores only go up to 850',
        //
        'first_name_needed': 'Please give us your first name',
        'last_name_needed': 'Pray tell: your surname?',
        'email_needed': 'Preferred email address?',
        'password_too_simple':'Needs 9+ chars w/ a number or special char',
        'passwords_mismatch':'Passwords mismatch',
        'email_illformed':'The candidate email is illformed',
    
    } 
    return english
} 

export function getStyle() { 


    const useStyles = makeStyles((theme) => ({
        firstBox: {
            [theme.breakpoints.up('lg')]: {
                marginLeft: 'auto',
                paddingRight: theme.spacing(6)
            }
        },
        fullHeightImage_orig: {
            position: 'absolute',
            objectFit: 'cover',
            height: 668,
            width: '100%'
        },
        fullHeightImage: {
            position: 'absolute',
            objectFit: 'cover',
            height: 568,
            top: 130
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        warning: {
            color: '#ff6633',
            fontSize: '12px',
            paddingTop: theme.spacing(3)
        }, 
        message: {
            color: '#ff6633',
        }
    }));
    return useStyles
}