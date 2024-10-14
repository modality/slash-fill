import styled from "styled-components";
import { useEffect } from "react";
import useDice from "../hooks/dice";
import { layer1, layer2, layer3 } from "../lib/data";

const Container = styled.div`
  width: 90%;
  max-width: 920px;
  margin: 0 auto;
  min-height: 100%;
  background: white;
  border: solid 1px darkolivegreen;
  border-width: 0 1px;
`;

const Horizontal = styled.div`
  width: 100%;
`;

const Header = styled.div`
  padding: 2em 2em 0;
`;

const Section = styled.section`
  padding: 2em;
`;

export function App(props) {
  const [L1, L2, L3, reroll] = useDice();

  useEffect(() => {
    if (L1 == 0 || L2 == 0 || L3 == 0) {
      reroll();
    }
  }, [L1, L2, L3]);

  const fill1 = layer1(L1, L2, L3);
  const fill2 = layer2(L1, L2, L3);
  const fill3 = layer3(L1, L2, L3);

  // coalesce Nothings.
  const contents: string[] = [];
  const EMPTY = "Nothing.";

  if (fill1 == EMPTY && fill2 == EMPTY && fill3 == EMPTY) {
    contents.push(fill1);
  } else {
    if (fill1 != EMPTY) {
      contents.push(fill1);
    }
    if (fill2 != EMPTY) {
      contents.push(fill2);
    }
    if (fill3 != EMPTY) {
      contents.push(fill3);
    }
  }

  return (
    <Container>
      <Header>
        <h1>Slasher's Hex Fill Procedure</h1>
        <p>
          A random hexfill generator based on Slasherepoch's hexfill procedure,
          found{" "}
          <a href="https://slasherepoch.bearblog.dev/hex-fill-procedure/">
            here
          </a>
          .<br />
          Software by Michael Hansen can be found{" "}
          <a href="https://github.com/modality/slash-fill">here</a>.
        </p>
      </Header>
      <Horizontal>
        <Section>
          <h2>Dice Result</h2>
          <p>Layer 1: {L1}</p>
          <p>Layer 2: {L2}</p>
          <p>Layer 3: {L3}</p>
          <button onClick={reroll}>Reroll</button>
        </Section>
        <Section>
          <h2>Hex Contents</h2>
          {contents.map((c) => (
            <span>{c} </span>
          ))}
        </Section>
      </Horizontal>
    </Container>
  );
}
