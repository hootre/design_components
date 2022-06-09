import React, { useEffect, useState } from "react";
import { Card_1Box } from "./styles";

export const Card_1 = () => {
  const [imageIsReady, setImageIsReady] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "http://placeimg.com/640/480/any";

    img.onload = () => {
      // when it finishing loading, update the component state
      setImageIsReady(true);
    };
  });
  return (
    <Card_1Box>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            {!imageIsReady ? (
              <img src="https://via.placeholder.com/640X480" alt="img" />
            ) : (
              <img src="http://placeimg.com/640/480/any" alt="img" />
            )}
          </div>
          <div className="content">
            <h2>Card One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolor sed dolorum voluptatem aperiam tempore rem delectus rerum
              sit laudantium aut iste necessitatibus, quas quaerat quae
            </p>
          </div>
        </div>
      </div>
    </Card_1Box>
  );
};
