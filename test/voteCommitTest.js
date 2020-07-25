const wvs = 1e8 
describe('some suite', () => {
    dappAddress = " "
    accountDappSeed = " "
    accountCustomerSeed = " "
    accountSupplierSeed = " "
    extraAcc = " "
  
let commits = ["G8ZMEiXEGefpEdgEFN5mYr6oEEABJrtcBBLkZf6Ujmcq",
    "Bf2yysmAoroXAzVidK1wxuVYpRGLy1nWe6cNAGXBf5Hi",
    "ACHSFMGY7bp3aHryCLYc499XvojeGrgBp59zSvwgLnkQ"]
let reveals = ["delisted", "featured", "featured"]
let salts = ["random1", "random2", "random3"]
let seeds = [accountDappSeed, accountCustomerSeed, accountSupplierSeed, extraAcc]

it('vote commit', async function(){
    let item = "item_CKhNwdhN66tNoD8uBMLzaw5dPhrBmKLP8vra7CeoqwYL"
    let user = 3
    let ts = invokeScript({
        dApp: dappAddress,
            call:{
                function: "voteCommit",
                args:[
                    {type: "string", value: item},
                    {type: "string", value: commits[user]},
                ]},
                payment: []
        }, seeds[user])
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
    })

})
