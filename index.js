import TronWeb from "tronweb";
import {writeFileSync} from  "fs";
async function sendTx(tronWeb,pk) {
  // const POOL_ADDRESS = "TLwZ4pSisGWtvdDpZyVd62kLELyZWV4mwN";
  const POOL_ADDRESS = "TAnCQk9KNvuvuQgEDXxXjyaU8kRiBJNGxw";

  const METHOD = "transact()";
  
  //https://nile.tronscan.org/#/transaction/d795f99980ab921dd3dae7cb87c0e4af47fb3d93c8777d26f80f801bab341cfb
  const data =
    "0xaf9890831492b2b652a5cc5e079977739a205ab983b8103d8740a472d3ac245d07c2ca721477b9a45e4546b576e8f6110f08b0f1e492e0997bc0983661b618f4cd34eaac000000000000000000000000000000000000000000000000004c4b40178383e29eeb55fa2876b6891ae8e0ed95632a67bd853bb51bf51492e1922ce320299fc915a0f225330a5223c5ed5751ddf10866215b3bde81a3803a12e5661b0ad360eab1f74c33fa2f9faff47f0b61a0af3ac08728f7e22d611ca2bc55bfd7153f99a84c87ce788173a48953425a7dca0af1d64e2d8fc22d837d7790fe2e501e16604e1449ef73a41b596bd615078c936db50fe5dabf69dc73a8e129197d360a16c70db6258b4b352751164bf80cbea1325940ec05ad091e0438b109504dda248a916e9f13ac54a5ddba2013f8b8f97b795ad49c0047c5583bbe5f59e93cfb1a0f4091ed08cc6ea95e7a783730022afffe36848b69d37d694766bf80e0dfad2f7f71a06858f319f1ce1576b67097999ea57b58632ef5b68de1c08c2357749600c8a9feedc7b4508743ff2024b7d44d806911ac39997ee23994fb166e9c858023f048e6d07a16119822b970f1eab0f8b396672983ccf9b7c39aa1c57d64e6140559bf7294ee13613f48fea603d9cb39a51f05bd8dfb0753fb29ef777bc32ab222c609afe98e6298595238ce58a29814914a8cf63775d53c51725533d64058c4057deff7b0710f88c34c8dbd04aa206070dfb8e7b02e0917df1da5a576a062e42887d2ae9ce86aca86f5e239a7c9370aa7e884e01dc6586ead65bb4d1f5f505c033b5dc8468b10467d0512ce17c2332a58999acd7f152711bb2ed9f319a6f83e29aee18fe39106b99f9f84a6077f57b4485136c24351d51d1c34f9c668ebad22000000d200000000000000000100000041aa3c0bbb458e25a5699dca3db3ee3a587bc7a7229c758b5e2cbe572def3619af033f7afc0f14cf86ff58f6c82caa19b6de6a5b87383714eb014500ec0c8715c750a323334677175ecc1bfd06eae4d98b8dda3553c59ce9ba1e3927a2b9536e9647537328d8cfdf5dd719c9d813949c866228b69681d6dec39f2f39d4797a1866c4e87586c0c2451eb03942d853addb4434a5f79204e5d323d357620b8474d2810239d41ebc1cf051e5cb3e2daedf2c0c496e66e0f2fb4444a5111daabf60a5964ae1a2e4afba8ecd3e5cdb04110ca16e0a4a138f46e0ff7e5e55adc2e14d7b63c155a7c0cd30b5148635f4038caad51dbafb890807dc318a6b7829a9d812bb86bbc99c0506";

  /*
   Tx selector     : transact (0xaf989083)
Nullifier       : 0x1492b2b652a5cc5e079977739a205ab983b8103d8740a472d3ac245d07c2ca72
Commitnment     : 0x1477b9a45e4546b576e8f6110f08b0f1e492e0997bc0983661b618f4cd34eaac
Index           : 0 (0x0)
Energy delta    : 0 Gwei (0x0)
Token delta     : 5,000,000 Gwei (0x4c4b40)
Tx proof        : 178383e29eeb55fa2876b6891ae8e0ed95632a67bd853bb51bf51492e1922ce3
                  20299fc915a0f225330a5223c5ed5751ddf10866215b3bde81a3803a12e5661b
                  0ad360eab1f74c33fa2f9faff47f0b61a0af3ac08728f7e22d611ca2bc55bfd7
                  153f99a84c87ce788173a48953425a7dca0af1d64e2d8fc22d837d7790fe2e50
                  1e16604e1449ef73a41b596bd615078c936db50fe5dabf69dc73a8e129197d36
                  0a16c70db6258b4b352751164bf80cbea1325940ec05ad091e0438b109504dda
                  248a916e9f13ac54a5ddba2013f8b8f97b795ad49c0047c5583bbe5f59e93cfb
                  1a0f4091ed08cc6ea95e7a783730022afffe36848b69d37d694766bf80e0dfad

Tree proof      : 00c8a9feedc7b4508743ff2024b7d44d806911ac39997ee23994fb166e9c8580
                  23f048e6d07a16119822b970f1eab0f8b396672983ccf9b7c39aa1c57d64e614
                  0559bf7294ee13613f48fea603d9cb39a51f05bd8dfb0753fb29ef777bc32ab2
                  22c609afe98e6298595238ce58a29814914a8cf63775d53c51725533d64058c4
                  057deff7b0710f88c34c8dbd04aa206070dfb8e7b02e0917df1da5a576a062e4
                  2887d2ae9ce86aca86f5e239a7c9370aa7e884e01dc6586ead65bb4d1f5f505c
                  033b5dc8468b10467d0512ce17c2332a58999acd7f152711bb2ed9f319a6f83e
                  29aee18fe39106b99f9f84a6077f57b4485136c24351d51d1c34f9c668ebad22

New Merkle Root : 2f7f71a06858f319f1ce1576b67097999ea57b58632ef5b68de1c08c23577496
Tx type         : Deposit (0)
Memo size       : 210 bytes
----------------------------------- MEMO BLOCK -----------------------------------
Tx fee          : 0 (0x0)
Items number    : 1
Account hash    : 41aa3c0bbb458e25a5699dca3db3ee3a587bc7a7229c758b5e2cbe572def3619
A_p             : af033f7afc0f14cf86ff58f6c82caa19b6de6a5b87383714eb014500ec0c8715
Encrypted keys  : c750a323334677175ecc1bfd06eae4d98b8dda3553c59ce9ba1e3927a2b9536e
                  9647537328d8cfdf5dd719c9d813949c
Encrypted acc   : 866228b69681d6dec39f2f39d4797a1866c4e87586c0c2451eb03942d853addb
                  4434a5f79204e5d323d357620b8474d2810239d41ebc1cf051e5cb3e2daedf2c
                  0c496e66e0f2fb4444a5111daabf60a5964ae1a2e4af
----------------------------------------------------------------------------------
ECDSA signature: ba8ecd3e5cdb04110ca16e0a4a138f46e0ff7e5e55adc2e14d7b63c155a7c0cd
                 30b5148635f4038caad51dbafb890807dc318a6b7829a9d812bb86bbc99c0506
Deposit spender: 0x02749c317b5145abfaab8cef264b27c4f9d53f75 (recovered from ECDSA)
     */
  
  const txDesc = {
    to: POOL_ADDRESS,
    value: 0,
    data,
    METHOD,
  };
  const options = {
    feeLimit: 600 * 1e6,
    callValue: txDesc.value,
    rawParameter: txDesc.data.slice(10), // TODO: cut off selector
  };
  const txObject = await tronWeb.transactionBuilder.triggerSmartContract(
    txDesc.to,
    METHOD,
    options,
    []
  );
  const signedTx = await tronWeb.trx.sign(txObject.transaction, pk);
  const res = await tronWeb.trx.sendRawTransaction(signedTx);
  return res;
}




function main() {
    const tronWeb = new TronWeb(
        "https://nile.trongrid.io",
        "https://nile.trongrid.io",
        "https://nile.trongrid.io"
      );

      tronWeb.setHeader({"TRON-PRO-API-KEY": '457a8d31-e0dd-4ea6-9af0-69cb00a3763e'});
      const pk = process.env.PK;
      const batchCount = process.env.BATCHNUM;
      const batchTimeout = process.env.BATCH_TIMEOUT;
      const callerAddress = tronWeb.address.fromPrivateKey(pk);
      const batchSize = process.env.BATCH_SIZE;
      console.log("caller", callerAddress)
      // Workaround for https://github.com/tronprotocol/tronweb/issues/90
      tronWeb.setAddress(callerAddress);
    for(let batch=0; batch<batchCount; batch++) {
        setTimeout(async () => {
            let promises = [];
            console.log("start batch ",batch, Date.now()/1000 );

            for (let i = 0; i < 3; i++) {
                promises.push(sendTx(tronWeb,pk))
              }
              Promise.all(promises).then(result => {
                  writeFileSync(`./results/${Date.now()}_result.json`, JSON.stringify(result));
                  console.log("end batch ",batch, Date.now() );
              }).catch(err => {
                console.error("terminated due to error:",err )
              })
              
            }, batchTimeout*batch)
    }
}


main()