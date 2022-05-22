import React from "react";
import './3DList.tsx'
import { Container, Item} from "./3DList.tsx";

function List() {
    const rendering = () => {
        const content = ["Home", "About", "Service", "Portfoilo", "OurTeam", "Contact"]
        const number = [6, 5, 4, 3, 2, 1];
        const result = [];
        for (let i = 0; i < content.length; i++) {
            result.push(<Item key={i} num={number[i]}><a href="#">{content[i]}</a></Item>)
        }
        return result;
    }
  return (
    <Container>
        <ul>
            {rendering()}
        </ul>
    </Container>
  );
}

export default List;