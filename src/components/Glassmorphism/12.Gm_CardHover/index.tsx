import { Gm_CardHoverBox } from "./styles";
import sketch from "./sketch.png";

export const Gm_CardHover = () => {
  return (
    <Gm_CardHoverBox>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={sketch} alt="img" />
          </div>
          <div className="content">
            <div>
              <h3>Mail</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                exercitationem.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </Gm_CardHoverBox>
  );
};
