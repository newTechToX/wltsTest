import { Fixture } from '../../Fixture';

// TODO: Update this once I find a real-world usage of this
export class PermitForAllFixture extends Fixture {
  constructor(address: string, chainId: number) {
    const data = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        PermitForAll: [
          { name: 'owner', type: 'address' },
          { name: 'operator', type: 'address' },
          { name: 'approved', type: 'bool' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      },
      domain: {
        name: 'Lens',
        version: '2',
        verifyingContract: '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d',
        chainId: chainId,  //original number: 137
      },
      primaryType: 'PermitForAll',
      message: {
        owner: address,
        operator: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
        approved: 'true',
        nonce: 2,
        deadline: 1660917549,
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
