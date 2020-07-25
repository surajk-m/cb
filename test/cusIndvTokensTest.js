const wvs = 1e8 
describe('some suite', () => {
    const seed = " "

it('custom indivisible token', async function() {
    const tokenParamsCustomIndivisible = {
        name: "ice cream coupon",
        quantity: 100, // 100 ice cream buckets are available from supplier at the moment
        decimals: 0, // indivisible
        reissuable: true, // total amount of 'ice cream ' coupons can be changed by supplier in the future
        description: "one token is equal to 50% discount for one ice cream bucket in 'Coupon Bazaar' marketplace"
    };

    const signedIssueTx = issue( tokenParamsCustomIndivisible, seed );
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id)

    console.log("tx / token id: " + tx.id);
    })

})