import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Framework, ISuperToken } from "@superfluid-finance/sdk-core";
import { useNetwork, useSigner } from "wagmi";
import { Signer } from "ethers";

type SuperfluidContextState = {
  sf: Framework | null;
  allSuperTokens: any[];
};

const SuperfluidContext = createContext<SuperfluidContextState>({
  sf: null,
  allSuperTokens: [],
});

const SUPERFLUID_CACHE = new Map<number, Framework>();
// const SUPERFLUID_CACHE: {[chainId: number]: Framework} = {}
export const SuperfluidProvider = ({ children }: { children: ReactNode }) => {
  const [{ data: signer }] = useSigner();
  const [{ data: network }] = useNetwork();
  const chainId = network.chain?.id;
  const [sf, setSf] = useState<Framework | null>(null);
  const [allSuperTokens, setAllSuperTokens] = useState<ISuperToken[]>([]);
  const lastSignerRef = useRef<Signer | undefined>();

  useEffect(() => {
    if (!signer || !chainId) {
      return;
    }

    if (signer !== lastSignerRef.current) {
      SUPERFLUID_CACHE.clear();
    }

    (async () => {
      if (!SUPERFLUID_CACHE.has(chainId)) {
        SUPERFLUID_CACHE.set(
          chainId,
          await Framework.create({ chainId: chainId, provider: signer })
        );
      }

      let superTokens: ISuperToken[];

      try {
        superTokens =
          (await SUPERFLUID_CACHE.get(chainId)!.query.listAllSuperTokens({}))
            ?.data ?? [];
      } catch (e) {
        console.error(`Error when fetching Super Tokens ${e}`);
        superTokens = [];
      }
      setAllSuperTokens(superTokens);
      setSf(SUPERFLUID_CACHE.get(chainId)!);
    })();

    lastSignerRef.current = signer;
  }, [signer, chainId]);

  return (
    <SuperfluidContext.Provider value={{ sf, allSuperTokens }}>
      {children}
    </SuperfluidContext.Provider>
  );
};

export const useSuperfluid = () => {
  const context = useContext(SuperfluidContext);
  if (!context) {
    throw new Error("Superfluid hook must be used inside a SuperfluidProvider");
  }
  return context;
};
