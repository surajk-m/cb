const wvs = 1e8 
describe('some suite', () => {
    seed = " "

it('burn custom token', async function() {
    const burnCustomTokenParams = {
        assetId: 'FnVbkm1hJQTdB6Waq8VTwPUDXwe1rFUkhmUicijR9Ekj',
        quantity: 4,
        fee: 0.005*wvs
    };

    const signedBurnTx = burn(burnCustomTokenParams, seed);
    let tx = await broadcast(signedBurnTx);
    await waitForTx(tx.id)

    console.log("burn tx id: " + tx.id);
    })

})
