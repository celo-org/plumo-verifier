import { PlumoVerifier } from '../index.js';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';
import * as winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

const web3 = new Web3("https://plumo-prover-rpc.kobi.one")
const kit = newKitFromWeb3(web3);

const plumo = new PlumoVerifier(logger, kit.web3.eth, Buffer);
plumo.fetchCeloBalanceVerified('0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972', '0x765DE816845861e75A25fCA122bb6898B8B1282a')
.then((balance) => {
  logger.info(`cUSD balance: ${balance}`)
})
.then(() => plumo.fetchCeloBalanceVerified('0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972'))
.then((balance) => {
  logger.info(`CELO balance: ${balance}`)
})
