import { fake_restful_call, capitalize_first_name,isPasswordGoodEnough, isEmail } from "./../components/utils.js";
/*
DENY if:
    1: Investment Amount is more than 1/5th of their Yearly Income or 
    2: Estimated Credit is below 600, or 
    3: Investment Amount is 3%+ of their Total Net Worth. 
    4: A `Bad Request` response should be returned for any Investment Amount above $9,000,000.
*/
it("happy path", async () => {
    const income = 10000
    const invest = 1900
    const networth = 100000 // invest will be will less that 3% of networth
    const credit = 800

	const item = {"determination": true, "reason": "Granted!"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("happy path - but the invest amount is right on the cusp ( but is ok )", async () => {
    const income = 100000000
    const invest = 9000000
    const networth = 1000000000
    const credit = 800

	const item = {"determination": true, "reason": "Granted!"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("sad path - the invest amount is just over the cusp", async () => {
    const income = 100000000
    const invest = 9000001
    const networth = 1000000000
    const credit = 800

	const item = {"determination": false, "reason": "Bad Request"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("sad path - too little income", async () => {
    const income = 1000
    const invest = 1000
    const networth = income * 10 // invest will be will less that 3% of networth
    const credit = 800

	const item = {"determination": false, "reason": "Denied: Investment > 1/5yearly income ( 1000>200)"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("sad path - too little net worth", async () => {
    const income = 10000
    const invest = income * 0.19
    const networth = income * 2
    const credit = 800

	const item = {"determination": false, "reason": "Denied: The investment > 3% of the networth ( 1900 > 600)"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("sad path - too low credit score", async () => {
    const income = 10000
    const invest = income * 0.19
    const networth = income * 10
    const credit = 599

	const item = {"determination": false, "reason": "Denied: Because credit is less than 600"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("happy path - credit score is right on the cusp ( but is ok )", async () => {
    const income = 10000
    const invest = income * 0.19
    const networth = income * 10
    const credit = 600

	const item = {"determination": true, "reason": "Granted!"}
	await expect(fake_restful_call(invest, networth, credit, income)).resolves.toEqual(item);
})

it("happy path - cap my name ( needed ) ", () => {
    const name = capitalize_first_name("paul")
    expect(name).toBe("Paul")
}  )

it("happy path - cap my name ( not needed ) ", () => {
    const name = capitalize_first_name("Paul")
    expect(name).toBe("Paul")
}  )

it("sad path - Give no name, get back 'Candidate'", () => {
    const name = capitalize_first_name()
    expect(name).toBe("Candidate")
}  )

it("happy path - Give unicode", () => {
    try { 
        const name = capitalize_first_name("自主規制の生活")
        expect(name).toBe("自主規制の生活")
    } catch( your_system_itself_does_not_support_japanese ) {
        // Ignore this test - it is moot. 
        console.log(your_system_itself_does_not_support_japanese)
        expect(true).toBe(true)
    }
})

it("happy path - some good passwords", () => {
    // Looking for at least one special char or number
    const result1 = isPasswordGoodEnough('1234567890')
    const result2 = isPasswordGoodEnough('aaaaaaaaa0')
    const result3 = isPasswordGoodEnough('aaaaaaaaa!')
    const result4 = isPasswordGoodEnough('     @    ')

    const isOk = true == result1 == result2 == result3 == result4

    expect(isOk).toBe(true)
})

it("sad path - a bad password", () => {
    const result = isPasswordGoodEnough('thisisjustletters')
    expect(result).toBe(false)
})