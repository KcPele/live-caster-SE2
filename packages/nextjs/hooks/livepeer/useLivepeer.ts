import { Livepeer } from "livepeer";

// import { getIngest } from "@livepeer/react/external";

export function useLivepeer(): Livepeer {
  const livepeer = new Livepeer({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY,
  });

  return livepeer;
}
