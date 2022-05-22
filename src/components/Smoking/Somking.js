import React from "react";
import './Smoking.tsx'
import { Container , Item} from "./Smoking.tsx";

function Smoking() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 10; i++){
      result.push(<Item key={i} num={i+1}><i>Noooooo</i>Smooooooooooking<i>|</i></Item>)
    }
    return result;
  }
  return (
    <Container>
      <div className="cigarette">
        {rendering()}
      </div>
    </Container>
  );
}

export default Smoking;