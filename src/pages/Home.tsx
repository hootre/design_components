import { VFC } from "react";
import { CircularNav } from "../components/Nav/CircularNav";
import ContentLayout from "../layouts/ContentLayout";
import Safari3D from "../components/Logo/Safari3D";
import { DotsMenu } from "../components/Menu/DotsMenu";
import { MagicIndicator } from "../components/Menu/MagicIndicator";
import { SideBar_1 } from "../components/Nav/SideBar_1";

const IconitemList_5 = ["home", "person", "settings", "email", "videocam"];
const logoColor = ["#f44336", "#ffa117", "#0fc70f", "#2196f3", "#b145e9"];
const IconitemList_8 = [
  "home",
  "person",
  "settings",
  "email",
  "videocam",
  "vpn_key",
  "sports_esports",
  "photo_camera",
];
const IconitemList_9 = [
  "home",
  "person",
  "settings",
  "email",
  "videocam",
  "vpn_key",
  "sports_esports",
  "photo_camera",
  "favorite_border",
];
const Home: VFC<{}> = () => {
  return (
    <>
      <ContentLayout
        num={1}
        title="Animated Circular Navigation Menu Magic Indicator"
      >
        <CircularNav itemList={IconitemList_8} />
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
        <DotsMenu itemList={IconitemList_9} />
      </ContentLayout>
      <ContentLayout
        num={4}
        title="CSS 9 Dots Menu | Html CSS Icon Hover Effects"
      >
        <MagicIndicator />
      </ContentLayout>
      <ContentLayout
        height={700}
        num={5}
        title="Sidebar Menu using Html CSS & Javascript"
      >
        <SideBar_1 itemList={IconitemList_5} logoColor={logoColor} />
      </ContentLayout>
    </>
  );
};
export default Home;
