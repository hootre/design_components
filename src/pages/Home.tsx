import { VFC } from "react";
import { CircularNav } from "../components/Nav/CircularNav";
import ContentLayout from "../layouts/ContentLayout";
import Safari3D from "../components/Logo/Safari3D";
import { DotsMenu } from "../components/Menu/DotsMenu";
import { MagicIndicator_1 } from "../components/Menu/MagicIndicator_1";
import { SideBar_1 } from "../components/Nav/SideBar_1";
import { ClaymorphismList_1 } from "../components/List/ClaymorphismList_1";
import { Card_1 } from "../components/Card/Card_1";

const itemComponents = {
  0: <CircularNav />,
};

const Home: VFC<{}> = () => {
  return (
    <>
      <ContentLayout
        num={1}
        title="Animated Circular Navigation Menu Magic Indicator"
      >
        <CircularNav />
      </ContentLayout>
      <ContentLayout
        num={2}
        title="CSS Only 3D Safari Logo Animation Effects on Hover"
      >
        <Safari3D />
      </ContentLayout>
      <ContentLayout
        num={3}
        title="CSS 9 Dots Menu | Html CSS Icon Hover Effects"
      >
        <DotsMenu />
      </ContentLayout>
      <ContentLayout num={4} title="Magic Navigation Menu Indicator">
        <MagicIndicator_1 />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={5}
        title="Sidebar Menu using Html CSS & Javascript"
      >
        <SideBar_1 />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={6}
        title="Claymorphism List Hover Effects"
      >
        <ClaymorphismList_1 />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={6}
        title="Claymorphism List Hover Effects"
      >
        <Card_1 />
      </ContentLayout>
    </>
  );
};
export default Home;
