const wvs = 1e8 
describe('some suite', () => {
    dappAddress = " "
    accountSupplierSeed = " "

let datajson = {
    "title": "tshirt love/war, vote 1",
    "coupon_price": 10000000,
    "old_price": 1000000000,
    "new price": 100000000,
    "address": "Universe",
    "description": "I want you to make love, not war, I know you have heard it before",
    "image": "https://i.ibb.co/hRH60F0/index.jpg"
}

it ('add item', async function(){
    let ts = invokeScript({
        dApp: dappAddress,
            call:{
                function: "addItem",
                args:[
                    { type:"string", value: datajson.title },
                    { type:"integer", value: datajson.coupon_price },
                    { type:"string", value: JSON.stringify(datajson) }
                ]},
                payment: []
    }, accountSupplierSeed)
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
    })

})