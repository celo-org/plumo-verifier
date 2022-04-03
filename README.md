# plumo-verifier
Node.js module for verifying Plumo proofs and reading states based on it.

[Plumo](https://eprint.iacr.org/2021/1361) is a SNARK-based light client verifier for the [Celo](https://celo.org/) blockchain. Plumo proves the evolution of the validator set through the election process on epoch blocks, which happen once a day. Creating Plumo proofs is possible since the [Donut hardfork](https://medium.com/celoorg/donut-hardfork-is-live-on-celo-585e2e294dcb), in which [CIP-22](https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0022.md) was activated, enablding Plumo proofs since epoch 393.

Using Plumo, one can verify the validity of block headers, and as a consequence read verified data from state or transaction roots, such as balances or NFT ownership details.

[A two phase Groth16 setup](https://celo.org/plumo) has been performed for Plumo, resulting in a [proving and verification keys](https://plumoceremonyphase2.blob.core.windows.net/srs/prover_key).

A [persistent prover](https://github.com/celo-org/celo-bls-snark-rs/tree/kobigurk/persistent-prover/crates/persistent-prover) is operated by us and is serving proofs, created after each epoch change. See the example code on how to fetch proofs, verify them and obtain your verified token balance.

## Example

`node --experimental-wasm-modules examples/check_balance.js`

## Tasks to pick up

- [ ] Optimize multiple epoch proofs through receiving just "glue" hashes instead of the entire validator sets.
- [ ] Batch verification of Groth16 signatures.
- [ ] Support more kinds of queries - e.g. NFT ownership.
