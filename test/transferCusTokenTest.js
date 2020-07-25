const wvs = 1e8 
describe('some suite', () => {
const seedissuer = " "

it('transfer custom token', async function() {
    const transferCustomTokenParams = {
        assetId: 'FnVbkm1hJQTdB6Waq8VTwPUDXwe1rFUkhmUicijR9Ekj',
        recipient: '3N1WH4chKs4MZ9aoEFarPdW9KmF7NjmNEAi',
        amount: 5,
        fee: 0.005*wvs
    };

    const signedTransferTx = transfer( transferCustomTokenParams, seedissuer );
    let tx = await broadcast(signedTransferTx);
    await waitForTx(tx.id)

    console.log("tx / token id: " + tx.id);
    })

})
