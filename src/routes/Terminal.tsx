import { Button, GU } from "@1hive/1hive-ui";
import { useState } from "react";
import styled from "styled-components";
import { useSigner } from "wagmi";
import { VortexEditor } from "../components/VortexEditor";
import { useSuperfluid } from "../providers/Superfluid";
import vortex from "../vortex";

const defaultVortexScript = `token pre-approve token:fDAI token:fDAIx 100e18
token upgrade token:fDAIx 100e18 // upgrade 100 daix to play the game
flow create token:fDAIx 0x40aD5B5b40066432c7A9c876e2C78B4a7564f0dB 1e18/mo`

export const Terminal = () => {
  const [editorMounting, setEditorMounting] = useState(true);
  const [inProgress, setInProgress] = useState(false)
  const [code, setCode] = useState(defaultVortexScript);
  const { sf } = useSuperfluid()
  const [{ data: signer }] = useSigner()


  const handleExecute = async () => {
    if (sf) {
      setInProgress(true)
      await vortex(sf)`
        ${code}
      `.exec(signer)
      setInProgress(false)
    }
  }

  return (
    <Container>
      <EditorWrapper>
        <VortexEditor onEditorMounting={setEditorMounting} code={code} onChange={setCode} />
      </EditorWrapper>
      {!editorMounting && <Button label={inProgress ? "Signing transactions…" : "Execute"} onClick={handleExecute} disabled={!sf || inProgress} />}
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
  width: 60%;
`;
