import { Fixture } from '../../Fixture';

export class InconsistentWebsite extends Fixture {
  constructor(address: string, chainId: number) {
    const domain = 'https://testWallet577782928103.io/'
    const siweMessage = `${domain} wants you to sign in with your Ethereum account:\n${address}\nURI: ${domain}\nVersion: 1\nChain ID: ${String(chainId)}\nNonce: 32891757\nIssued At: 2021-09-30T16:25:24.000Z`
    // const siweMsg = `0x${Buffer.from(siweMessage, "utf8").toString("hex")}`
    super('personal_sign', [siweMessage, address]);
}
}  