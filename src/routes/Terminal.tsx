import { Button, GU, textStyle } from "@1hive/1hive-ui";
import { useState } from "react";
import styled from "styled-components";
import { useSigner } from "wagmi";
import { VortexEditor } from "../components/VortexEditor";
import { useSuperfluid } from "../providers/Superfluid";
import vortex from "../vortex";

const defaultVortexScript = `token pre-approve token:fDAI token:fDAIx 100e18 // approve token upgrade
token upgrade token:fDAIx 100e18 // upgrade 100 DAI to DAIx
flow create token:fDAIx 0x40aD5B5b40066432c7A9c876e2C78B4a7564f0dB 1e18/mo // transfer 1 DAIx/month
`

export const Terminal = () => {
  const [editorMounting, setEditorMounting] = useState(true);
  const [inProgress, setInProgress] = useState(false)
  const [code, setCode] = useState(defaultVortexScript);
  const { sf } = useSuperfluid()
  const [{ data: signer }] = useSigner()


  const handleExecute = async () => {
    if (sf && signer) {
      setInProgress(true)
      try {
        const receipt = await vortex(sf)`
          ${code}
        `.exec(signer)
        alert("Transaction success: " + receipt.transactionHash)
      } catch (e: any) {
        alert(e.message)
      }
      setInProgress(false)
    }
  }

  return (
    <Container>
      <EditorWrapper>
        <VortexEditor onEditorMounting={setEditorMounting} code={code} onChange={setCode} />
        {!editorMounting && <Button wide mode="positive" label={inProgress ? "Signing transactions…" : "Execute"} onClick={handleExecute} disabled={!sf || inProgress} />}
      </EditorWrapper>
      {!editorMounting && <EditorWrapper>
        <details style={{ width: "100%" }}>
          <summary>How to use it?</summary>
          <pre style={{ textAlign: "center" }}>
            {`Vortex Cheat Sheet\n==================`}
          </pre>
          <pre>
            {`
            Commands
            --------

            token approve <token> <spender> <amount>
            token transfer-from <token> <sender> <recipient> <amount>
            token upgrade <token> <amount>
            token downgrade <token> <amount>

            flow create <token> <receiver> <flow-rate> [user-data]
            flow update <token> <receiver> <flow-rate> [user-data]
            flow delete <token> <sender> <receiver> [user-data]

            index create <token> <index-id> [user-data]
            index update <token> <index-id> <index-value> [user-data]

            distribute <token> <index-id> <amount> [user-data]

            subscription approve <token> <index-id> <publisher> [user-data]
            subscription update <token> <index-id> <subscriber> <units> [user-data]
            subscription revoke <token> <index-id> <publisher> [user-data]
            subscription delete <token> <index-id> <subscriber> <publisher> [user-data]

            claim <token> <index-id> <subscriber> <publisher> [user-data]

            call <superapp> <method-signature> [...params]


            Helpers
            -------

            Numbers:

            - e18: Adds 18 decimals to a number, usually token amounts (and it works for other numbers, not just 18)
            - s, m, h, w, mo, y: Time units for second, minute, hour, week, month, and year respectively
            - You can combine them, for example "3w" means 3 weeks, and "1000e18/mo" means 1000 tokens per month

            Addresses:

            - token:<SYM>: Converts the label to the token address of the network we are connected to
            `}
          </pre>
        </details>
      </EditorWrapper>}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${3 * GU}px;
`;

const EditorWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${2 * GU}px;
  width: 100%
`;
