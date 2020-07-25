const pNode = "waves private node seed with waves tokens"
const accA = " "

console.log("address with waves:");
console.log(address(node));

it('transfer', async function(){
    let tx = await broadcast(transfer({amount: 1000000000, recipient: accA}, pNode))
    await waitForTx(tx.id);
    console.log(JSON.stringify(tx));
})

