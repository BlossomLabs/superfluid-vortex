import { Button, GU } from "@1hive/1hive-ui";
import { useState } from "react";
import styled from "styled-components";
import { VortexEditor } from "../components/VortexEditor";

export const Terminal = () => {
  const [editorMounting, setEditorMounting] = useState(true);

  return (
    <Container>
      <EditorWrapper>
        <VortexEditor onEditorMounting={setEditorMounting} />
      </EditorWrapper>
      {!editorMounting && <Button label="Execute" />}
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
