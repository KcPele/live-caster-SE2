import { PinataFDK } from "pinata-fdk";
const fdk = new PinataFDK({
    pinata_jwt: process.env.PINATA_JWT!,
    pinata_gateway: ""}, 
);

const frame_data = {
    untrustedData: {
      fid: 2,
      url: "https://fcpolls.com/polls/1",
      messageHash: "0xd2b1ddc6c88e865a33cb1a565e0058d757042974",
      timestamp: 1706243218,
      network: 1,
      buttonIndex: 2,
      inputText: "hello world", // "" if requested and no input, undefined if input not requested
      castId: {
        fid: 226,
        hash: "0xa48dd46161d8e57725f5e26e34ec19c13ff7f3b9",
      },
    },
    trustedData: {
      messageBytes: "d2b1ddc6c88e865a33cb1a565e0058d757042974...",
    },
  };
  const frame_id = "livecaster"
  const custom_id = "d2b1ddc6c88e865a33cb1a56"
  
  
  await fdk.sendAnalytics(frame_id, frame_data, custom_id)