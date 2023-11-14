import TronWeb from 'tronweb'

async function main() {
  const POOL_ADDRESS = "TLwZ4pSisGWtvdDpZyVd62kLELyZWV4mwN";
  const METHOD = "transact()";
  const pk = process.env.PK;
  //https://nile.tronscan.org/#/transaction/d795f99980ab921dd3dae7cb87c0e4af47fb3d93c8777d26f80f801bab341cfb
  const data =
    "0xaf9890831cac637d434006c6b4cd1eb10b2d1c265436f16a064278e76d5c05705b039e0d1b6606e17a3f765031d64fc48ba3a751e5e97f3c9a4a6e0e534197f2350eb35900000000cc000000000000000000000000000000000000000000c35029c3028739c78aefb66fe0fe21009b13c5dbf273dc0f09f392ef28f3af6bc2e81c56deb94f2994658afd8c5336352a8b4263b71e424ebc5219b4e74a6c26fdcf2206f366727953ed1f321b564a38434d05791a7544c00337ea5b2bee8e6d3e8123b6aaf4c7f873430798f4ef9c2111bbf5fd992b486ce5f8c31ec52a2feb055922daee81403fb43f9fc7182b4879e1150b353add5cee8bc621184f0f3ba9b0860647c2ff7f7f97b2d49c6785b5d0f93680607c75860f345d1144f6ea2e900eb62ec1c8c9d175cad1c46a2ff0d2b091b742cf52de474220558526f3d93b07f358271a2ade1f795564bc2960412dfd869da2e101463c78921cc2805a9134dbf59822cff5e3f00f348d68fb8dd11027f4bfad0c15db0e7d71072da4be3677e6367517201197e443d5e2ea16aa2ef7eaf3fa83af81ea88f59cd00991e6df75e9467218312b3fedd7f91e1c29382c4d69b3f26fe7c738b9a6c74ada0af57f3d6dd5ad223ae2225efc58e6e79f28ba009e01582d3bfd482c0c11616dbe0dc7c5304afa127fb98718735a24b7c838ffb9bbc19fd8d3062528302869d77a42a0bde127b40ef97da24ee0c5d7ed597951c48cb19ab3082ef87cc098601236033d0f8e985d16614d39bea5f7b59effbd3cf933bc2348bbd40ac23b298bc65fd0d7ebd986f02cdfca1752a81ca0833054b478738864db5c8a77d8b6aab7bbadd100c3595fa92815ba4195d237db13e97cb9e257708919998278a7081e58e6cc8f93da87ef9e000000d2000000000000000001000000700500776e0142afa43ccb6a925bcf57977094e863ba5d266e57a17e7c655423c9d4adcc0b1d93cbad49364c7df5fa6d3c78ed9036a4d14acb68739ef5451408aac7995115500352a8ab77ad312ae1be622f7f1ef7ed6356e87232e2c5f68970296df9d733e26a1f30303fabbe260043c9c0deadbc3bc0e9c2ff50a212255fdb7b383d5d17305898d2afa3b5aca843b6a38d6a19e8cd8257a9fe4f5a183b5125bb284f1de9f736d477f423a14b1cf6f3b9db7beb61ecb36018ba5fcd56d21b829e930fa6d68facd8aac90e96f60dc7a828d1b9cfc1e4ec0163494ab84cc71c58301524136f9e0dc3adad20b189d1af9c78e9b63d809385297384e3dc125270ed5dfa81828bf7";

    /*
    Tx selector     : transact (0xaf989083)
Nullifier       : 0x1cac637d434006c6b4cd1eb10b2d1c265436f16a064278e76d5c05705b039e0d
Commitnment     : 0x1b6606e17a3f765031d64fc48ba3a751e5e97f3c9a4a6e0e534197f2350eb359
Index           : 52224 (0xcc00)
Energy delta    : 0 Gwei (0x0)
Token delta     : 50,000 Gwei (0xc350)
Tx proof        : 29c3028739c78aefb66fe0fe21009b13c5dbf273dc0f09f392ef28f3af6bc2e8
                  1c56deb94f2994658afd8c5336352a8b4263b71e424ebc5219b4e74a6c26fdcf
                  2206f366727953ed1f321b564a38434d05791a7544c00337ea5b2bee8e6d3e81
                  23b6aaf4c7f873430798f4ef9c2111bbf5fd992b486ce5f8c31ec52a2feb0559
                  22daee81403fb43f9fc7182b4879e1150b353add5cee8bc621184f0f3ba9b086
                  0647c2ff7f7f97b2d49c6785b5d0f93680607c75860f345d1144f6ea2e900eb6
                  2ec1c8c9d175cad1c46a2ff0d2b091b742cf52de474220558526f3d93b07f358
                  271a2ade1f795564bc2960412dfd869da2e101463c78921cc2805a9134dbf598

Tree proof      : 17201197e443d5e2ea16aa2ef7eaf3fa83af81ea88f59cd00991e6df75e94672
                  18312b3fedd7f91e1c29382c4d69b3f26fe7c738b9a6c74ada0af57f3d6dd5ad
                  223ae2225efc58e6e79f28ba009e01582d3bfd482c0c11616dbe0dc7c5304afa
                  127fb98718735a24b7c838ffb9bbc19fd8d3062528302869d77a42a0bde127b4
                  0ef97da24ee0c5d7ed597951c48cb19ab3082ef87cc098601236033d0f8e985d
                  16614d39bea5f7b59effbd3cf933bc2348bbd40ac23b298bc65fd0d7ebd986f0
                  2cdfca1752a81ca0833054b478738864db5c8a77d8b6aab7bbadd100c3595fa9
                  2815ba4195d237db13e97cb9e257708919998278a7081e58e6cc8f93da87ef9e

New Merkle Root : 22cff5e3f00f348d68fb8dd11027f4bfad0c15db0e7d71072da4be3677e63675
Tx type         : Deposit (0)
Memo size       : 210 bytes
----------------------------------- MEMO BLOCK -----------------------------------
Tx fee          : 0 (0x0)
Items number    : 1
Account hash    : 700500776e0142afa43ccb6a925bcf57977094e863ba5d266e57a17e7c655423
A_p             : c9d4adcc0b1d93cbad49364c7df5fa6d3c78ed9036a4d14acb68739ef5451408
Encrypted keys  : aac7995115500352a8ab77ad312ae1be622f7f1ef7ed6356e87232e2c5f68970
                  296df9d733e26a1f30303fabbe260043
Encrypted acc   : c9c0deadbc3bc0e9c2ff50a212255fdb7b383d5d17305898d2afa3b5aca843b6
                  a38d6a19e8cd8257a9fe4f5a183b5125bb284f1de9f736d477f423a14b1cf6f3
                  b9db7beb61ecb36018ba5fcd56d21b829e930fa6d68f
----------------------------------------------------------------------------------
ECDSA signature: acd8aac90e96f60dc7a828d1b9cfc1e4ec0163494ab84cc71c58301524136f9e
                 0dc3adad20b189d1af9c78e9b63d809385297384e3dc125270ed5dfa81828bf7
Deposit spender: 0xa9feabf9f8c3ee41eaa8cfdc6bc8960ffb837ef5 (recovered from ECDSA)
     */
  const tronWeb = new TronWeb(
    "https://nile.trongrid.io",
    "https://nile.trongrid.io",
    "https://nile.trongrid.io"
  );
  const callerAddress = tronWeb.address.fromPrivateKey(pk)
    // Workaround for https://github.com/tronprotocol/tronweb/issues/90
  tronWeb.setAddress(callerAddress)
  const txDesc = {
    to: POOL_ADDRESS,
    value: 0,
    data,
    METHOD,
  };
  const options = {
    feeLimit: 200000000,
    callValue: txDesc.value,
    rawParameter: txDesc.data.slice(10), // TODO: cut off selector
  };
  const txObject = tronWeb.transactionBuilder.triggerSmartContract(
    txDesc.to,
    txDesc.func,
    options,
    []
  );
  const signedTx = await tronWeb.trx.sign(txObject.transaction, pk);
  const res = await this.tronWeb.trx.sendRawTransaction(signedTx);
  return res;
}

main()
  .then((res) => console.log("success:", res))
  .catch((err) => console.error("failed:", err));
