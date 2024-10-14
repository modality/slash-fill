import { useState } from "react";

function rollD12() {
  return Math.floor(Math.random() * 12) + 1;
}

export default function useDice() {
  const [layer1, setLayer1] = useState(0);
  const [layer2, setLayer2] = useState(0);
  const [layer3, setLayer3] = useState(0);

  function reroll() {
    setLayer1(rollD12());
    setLayer2(rollD12());
    setLayer3(rollD12());
  }

  return [layer1, layer2, layer3, reroll];
}
