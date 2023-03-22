import { NextApiRequest, NextApiResponse } from 'next';
 
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { name, data } = request.query;
  const body = request.body;
  const cookies = request.cookies;

  const decodedName = decodeDnsName(Buffer.from(name.slice(2), 'hex'));








	// Hash and sign the response
	let messageHash = ethers.utils.solidityKeccak256(
	  ['bytes', 'address', 'uint64', 'bytes32', 'bytes32'],
	  [
	    '0x1900',
	    request?.to,
	    validUntil,
	    ethers.utils.keccak256(request?.data || '0x'),
	    ethers.utils.keccak256(result),
	  ]
	);
	const sig = signer.signDigest(messageHash);
	const sigData = hexConcat([sig.r, sig._vs]);
	return [result, validUntil, sigData];


  return response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });


}