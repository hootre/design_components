import React, { FC } from "react";
import { Section_contaioner } from "./styles";
interface ContentLayoutProps {
  title: string;
  num: number;
}
const ContentLayout: FC<ContentLayoutProps> = ({ num, title, children }) => {
  return (
    <Section_contaioner className="container">
      <div className="content">
        <header>
          <h1 className="titleNum">
            {num}.<span className="titleText">{title}</span>
          </h1>
        </header>

        {children}
      </div>
    </Section_contaioner>
  );
};
export default ContentLayout;
