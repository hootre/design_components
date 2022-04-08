import { VFC } from "react";
import { CircularNav } from "../components/Nav/CircularNav";
import ContentLayout from "../layouts/ContentLayout";
import Safari3D from "../components/Logo/Safari3D";
import { DotsMenu } from "../components/Menu/DotsMenu";
import { MagicIndicator_1 } from "../components/Menu/MagicIndicator_1";
import { SideBar_1 } from "../components/Nav/SideBar_1";
import { ClaymorphismList_1 } from "../components/List/ClaymorphismList_1";
import { Card_1 } from "../components/Card/Card_1";
import { Gm_LoginForm } from "../components/Glassmorphism/Gm_LoginForm";
import { CircleLoader } from "../components/Animation/CirCleLoader";
import { Gm_Button_1 } from "../components/Glassmorphism/Gm_Button_1";
import { Gm_Calculator } from "../components/Glassmorphism/Gm_Calculator";
import { Gm_CardHover } from "../components/Glassmorphism/Gm_CardHover";

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
        num={7}
        title="CSS Responsive Card Hover Effects"
      >
        <Card_1 />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={8}
        title="Glassmorphism Login Form using Html & CSS "
      >
        <Gm_LoginForm />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={9}
        title="Glassmorphism Login Form using Html & CSS "
      >
        <CircleLoader />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={10}
        title="CSS Glassmorphism Button Hover Effects"
      >
        <Gm_Button_1 />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={11}
        title="How to make Calculator With JavaScript"
      >
        <Gm_Calculator />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={12}
        title="Responsive Glassmorphism Card Hover Effects"
      >
        <Gm_CardHover />
      </ContentLayout>
    </>
  );
};
export default Home;
