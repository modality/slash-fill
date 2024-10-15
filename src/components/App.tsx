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
  padding: 2em;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    zoom: 200%;
    width: 100%;
    max-width: 100%;
    border: none;
  }
`;

const ButtonSection = styled.section`
  margin-top: 3em;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Button = styled.button`
  width: 20em;
  height: 4em;
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

  const contents: string[] = [
    `Layer 1 (${L1}): ${fill1}`,
    `Layer 2 (${L2}): ${fill2}`,
    `Layer 3 (${L3}): ${fill3}`,
  ];

  return (
    <Container>
      <div>
        <h1>Slasher's Hex Fill Procedure</h1>
        <p>
          Random hex contents based on Slasherepoch's hex fill procedure, found{" "}
          <a href="https://slasherepoch.bearblog.dev/hex-fill-procedure/">
            here
          </a>
          .
        </p>
        <p>
          Software by Michael Hansen can be found{" "}
          <a href="https://github.com/modality/slash-fill">here</a>.
        </p>
      </div>
      <section>
        <h2>Hex Contents</h2>
        {contents.map((c, idx) => (
          <p key={idx}>{c}</p>
        ))}
      </section>
      <ButtonSection>
        <Button onClick={reroll}>Roll 3d12</Button>
      </ButtonSection>
    </Container>
  );
}
