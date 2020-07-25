const wvs = 1e8 
describe('some suite', () => {
const seedissuer = " "

it('re-issue coupon smart token', async function() {
    const tokenParams = {
        quantity: 10,
        fee: 100400000,
        assetId: 'FnVbkm1hJQTdB6Waq8VTwPUDXwe1rFUkhmUicijR9Ekj',
        reissuable: true,
    };

    const signedIssueTx = reissue( tokenParams, seedissuer );
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id)

    console.log("token id: " + tx.id);
})

it('re-issue coupon smart token', async function() {
    const tokenParams = {
        quantity: 40,
        fee: 100400000,
        assetId: '3eNNjkTg9rmxRVxeX2tjApHfXry9unbNUQUNbYvciqkn',
        reissuable: true,
    };

    const signedIssueTx = reissue( tokenParams, seedissuer );
    let tx = await broadcast(signedIssueTx);
    await waitForTx(tx.id)

    console.log("token id: " + tx.id);
    })

})
