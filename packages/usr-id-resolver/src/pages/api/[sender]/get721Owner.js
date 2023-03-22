import fetch from 'node-fetch';

// TIMEPieces contract address
const address =
    '0xDd69da9a83ceDc730bc4d3C56E96D29Acc05eCDE'

// Safe Haven Token ID
const tokenId = 4254

// Alchemy API key
const apiKey = '<-- ALCHEMY APP API KEY -->';

// Alchemy URL
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getOwnersForToken`;
const url = `${baseURL}?contractAddress=${address}&tokenId=${tokenId}`;

var requestOptions = {
  method: 'get',
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => console.log)
  .catch(error => console.log('error', error))
