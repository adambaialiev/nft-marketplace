"use client";
import useAuthStore from "@/app/_store/useAuthStore";
import { BrowserProvider } from "ethers";
import { SiweMessage } from "siwe";

function createSiweMessage(address: string, statement: string) {
  const domain = window.location.host;
  const origin = window.location.origin;
  const message = new SiweMessage({
    domain,
    address,
    statement,
    uri: origin,
    version: "1",
    chainId: 1,
  });
  return message.prepareMessage();
}

export default function SignIn() {
  const address = useAuthStore((state) => state.address);
  const setAddress = useAuthStore((state) => state.setAddress);
  const onClick = async () => {
    const provider = new BrowserProvider(window.ethereum);
    try {
      await provider.send("eth_requestAccounts", []);
    } catch (error) {
      console.log("user rejected request");
    }
    try {
      const signer = await provider.getSigner();
      const message = createSiweMessage(
        signer.address,
        "Sign in with Ethereum to the app."
      );
      const signResult = await signer.signMessage(message);
      if (signResult) {
        setAddress(signer.address);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return address ? (
    <span className="text-orange">{address}</span>
  ) : (
    <button className="text-orange py-2 px-4" onClick={onClick}>
      SIGN IN
    </button>
  );
}
