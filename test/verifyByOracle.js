const wvs = 1e8 
describe('some suite', () => {
oracleAddress = " "
oracleManager = " "

it('verify by oracle', async function(){
    let ts = invokeScript({
        dApp: oracleAddress,
            call:{
                function:"setstatus",
                args:[
                    {type: "string", value: "3MzWmSiqRYwZkvA3AzLBdiNvBk9A2zmcmMp"},
                    {type: "string", value: "blacklist"},
                ]},
                payment: [],
                fee: 0.05*wvs
            }, oracleManager)
        let tx = await broadcast(ts)
        await waitForTx(tx.id)
    })

})
