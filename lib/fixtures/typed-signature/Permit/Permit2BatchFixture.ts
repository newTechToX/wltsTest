import { Fixture } from '../../Fixture';

export class Permit2BatchFixture extends Fixture {
  constructor(address: string, chainId: number) {
    const data = {
      types: {
        PermitBatch: [
          { name: 'details', type: 'PermitDetails[]' },
          { name: 'spender', type: 'address' },
          { name: 'sigDeadline', type: 'uint256' },
        ],
        PermitDetails: [
          { name: 'token', type: 'address' },
          { name: 'amount', type: 'uint160' },
          { name: 'expiration', type: 'uint48' },
          { name: 'nonce', type: 'uint48' },
        ],
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
      },
      domain: { name: 'Permit2', chainId: chainId, verifyingContract: '0x000000000022d473030f116ddee9f6b43ac78ba3' },
      primaryType: 'PermitBatch',
      message: {
        details: [
          {
            token: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            amount: '1461501637330902918203684832716283019655932542975',
            expiration: '1680868093',
            nonce: '0',
          },
          {
            token: '0x6b175474e89094c44da98b954eedeac495271d0f',
            amount: '1461501637330902918203684832716283019655932542975',
            expiration: '1680868093',
            nonce: '0',
          },
          {
            token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            amount: '1461501637330902918203684832716283019655932542975',
            expiration: '1680868093',
            nonce: '0',
          },
          {
            token: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
            amount: '1461501637330902918203684832716283019655932542975',
            expiration: '1680868093',
            nonce: '0',
          },
        ],
        spender: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
        sigDeadline: '1678277893',
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
