import React, { FC } from 'react';
import { Section_contaioner } from './styles';
interface ContentLayoutProps {
  height?: number;
  num: number;
  title: string;
}
const ContentLayout: FC<ContentLayoutProps> = ({ height, num, title, children }) => {
  return (
    <Section_contaioner style={{ height: height }} className="container">
      <div className="layout_content">
        <header>
          <h1 className="titleNum">
            {num}.<span className="titleText">{title}</span>
          </h1>
        </header>
        <div className="componentContainer">{children}</div>
      </div>
    </Section_contaioner>
  );
};
export default ContentLayout;
