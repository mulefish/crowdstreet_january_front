
/* 
NOTE: Why do I use both 'const' vs 'function'? I use 'function' 
for funcs that ought to be unittested and 'const' for funcs that I do not 
anticipate being unittested
*/
export function isOnlyWholePositiveNumbers(candidateString) {
    // candidateString ought to be a number. A dollar amount like '$1,000.05' will be rejected. 
    // NOTE: 
    // Only positive whole numbers are allowed
    // 100.02 = false
    // $100 = false
    // -100 = false
    // 100 = true

    return /^\d+$/.test(candidateString);

}

export function isPasswordGoodEnough(password) {
    let isOk = false
    if (password.length >= 8) {
        const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/g;
        isOk = regex.test(password);
    }
    return isOk
}

export function isEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

/* Never used */
async function rest_restful_call(url) {
    // There is no real backend, so this has not really been tested... 

    const response = await fetch(url);
    try {
        const data = await response.json()
        return data;
    } catch (boom) {
        console.log("Failure! " + boom)
        return {
            "failure": boom
        }
    }
}

export async function fake_restful_call(invest, networth, credit, income) {
    /* 
    * API call
You should implement a mock fetch call for your backend communication. This call should
have the same interface as the real fetch and return a promise wrapped response object.

The response should return disqualify message (Lorum Ipsem is fine) if the Investment Amount
is more than 1/5th of their Yearly Income, or their Estimated Credit is below 600, or their
Investment a=Amount is more than 3% of their Total Net Worth. Otherwise it
should return a positive qualification flag. A `Bad Request` response should be returned
for any Investment Amount above $9,000,000.
    */
    const one_fifth = income * 0.2
    const three_percent = networth * 0.03
    let isOk = false
    let reason = ""

    try {
        if ( invest > 9000000 ) {
            // NO! 
            reason = "Bad Request"
        } else if (invest >= one_fifth) {
            // NO! 
            reason = "Denied: Investment > 1/5yearly income ( " + invest + ">" + one_fifth + ")"
        } else if (credit < 600) {
            // NO! 
            reason = "Denied: Because credit is less than 600"
        } else if (invest >= three_percent) {
            // NO! 
            // reason = "Denied: investment > 3% networth ( " + invest + " > " + three_percent + " )"
            reason = "Denied: The investment > 3% of the networth ( " + invest + " > " + ( networth * 0.03 ) + ")"
        } else {
            reason = "Granted!"
            isOk = true
        }
    } catch (some_failure) {
        console.log("BOOM! " + some_failure)
        reason = "Server error: " + some_failure
        isOk = false

    }
    let result = {
        determination: isOk,
        reason: reason
    }
    return result
}

export const capitalize_first_name = (firstName) => {
    // Would unicode work? 自主規制の生活
    try {
        if (typeof firstName !== 'string') { return 'Candidate' }
        return firstName.charAt(0).toUpperCase() + firstName.slice(1)
    } catch ( boom ) {
        console.log(`Attempted to capitalize ${s} and failed because ${boom}`)
        return 'Candidate'
    }
  }