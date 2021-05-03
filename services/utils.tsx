import CryptoJS from 'crypto-js';

const createHmacString = (secret:string, binanceTime:string): string => {
  const key = CryptoJS.enc.Utf8.parse(secret);
  const timestamp = CryptoJS.enc.Utf8.parse(binanceTime);
  const hmac = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(timestamp, key));
  return hmac;
};

const handleUndefiniedUSDPrice = (secret:string, binanceTime:string): string => {
  return
};

export default createHmacString;
