const wvs = 1e8 
describe('some suite', () => {
    dappAddress = " "
    accountSupplierSeed = " "

it('withdraw funds', async function(){
    let ts = invokeScript({
        dApp: dappAddress,
            call:{
                function:"withdraw",
                args: []},
                payment: []
            }, accountSupplierSeed)
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
    })

})
