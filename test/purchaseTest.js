const wvs = 1e8 
describe('some suite', () => {
dappAddress = " "
accountCustomerSeed = " " 

let datajson = {
    "title": "tshirt love/war, vote 1",
    "coupon_price": 10000000,
    "old_price": 1000000000,
    "new price": 100000000,
    "address": "Universe",
    "description": "I want you to make love, not war, I know you have heard it before",
    "image": "https://i.ibb.co/hRH60F0/index.jpg"
}

it('purchase item', async function(){
    let item = "item_CKhNwdhN66tNoD8uBMLzaw5dPhrBmKLP8vra7CeoqwYL"
    let ts = invokeScript({
            dApp: dappAddress,
            call:{
                function:"purchase",
                args:[
                    { type:"string", value: item}
                ]},
                payment: [{amount: datajson.coupon_price, asset:null}]
                //"fee": 1400000   :- Smart account additional fee
            }, accountCustomerSeed)

    let tx = await broadcast(ts)
    await waitForTx(tx.id)
    })

})

