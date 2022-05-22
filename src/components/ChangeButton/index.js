import React from "react";
import './ChangeButton.tsx'
import { Container } from "./ChangeButton.tsx";
import { useCallback, useState } from "react";

function ChangeButton() {
    const [toggle, setToggle] = useState(false);
    const clickedToggle = () => {
      setToggle((prev) => !prev);
      console.log(toggle);
    }
  return (
    <Container toggle={toggle} className={!toggle ? "" : "active"}>
      <div className="content">
        <h2>Heading...</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, amet corporis dolores nulla mollitia aspernatur eaque debitis illo perspiciatis cumque, quo necessitatibus fugiat rem. Architecto necessitatibus esse sed nulla aspernatur?
        </p>
      </div>
      <div className="toggleBtn" onClick={clickedToggle}></div>
    </Container>
  );
}

export default ChangeButton;