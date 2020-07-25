const wvs = 1e8 
describe('some suite', () => {
const seedissuer = " "

it('issue coupon smart token', async function() {
    const tokenParams = {
        name: "my bazaar coupon",
        quantity: 100,
        decimals: 0,
        fee: 100400000,
        reissuable: true,
        script: compile(file('cbasset.ride')),
        description: "Example of 'coupon token' for 'Mastering Web3 with Waves'"
    };

    const signedIssueTx = issue( tokenParams, seedissuer);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id)

    console.log("tx / token id: " + tx.id);
})

it('custom indivisible token', async function() {
    const tokenParamsCustomIndivisible = {
        name: "ice cream coupon",
        fee: 100400000,
        quantity: 100, // 100 ice cream buckets are available from supplier at the moment
        decimals: 0, // indivisible
        reissuable: true, // total amount of 'ice cream ' coupons can be changed by supplier in the future
        description: "one token is equal to 50% discount for one ice cream bucket in 'Coupon Bazaar' marketplace"
    };
    const signedIssueTx = issue( tokenParamsCustomIndivisible, seedissuer);
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id)
    console.log("tx / token id: " + tx.id);

    })

})
