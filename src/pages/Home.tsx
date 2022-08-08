import { VFC } from 'react';
import { CircularNav } from '../components/Nav/1.CircularNav';
import ContentLayout from '../layouts/ContentLayout';
import Safari3D from '../components/Logo/2.Safari3D';
import { DotsMenu } from '../components/Menu/3.DotsMenu';
import { MagicIndicator_1 } from '../components/Menu/4.MagicIndicator_1';
import { SideBar_1 } from '../components/Nav/5.SideBar_1';
import { ClaymorphismList_1 } from '../components/List/6.ClaymorphismList_1';
import { Card_1 } from '../components/Card/7.Card_1';
import { Gm_LoginForm } from '../components/Glassmorphism/8.Gm_LoginForm';
import { Gm_Button_1 } from '../components/Glassmorphism/10.Gm_Button_1';
import { Gm_Calculator } from '../components/Glassmorphism/11.Gm_Calculator';
import { Gm_CardHover } from '../components/Glassmorphism/12.Gm_CardHover';
import { Gm_TransitionIcon } from '../components/Glassmorphism/13.Gm_TransitionIcon';
import { Gm_ResMenu } from '../components/Glassmorphism/14.Gm_ResMenu';
import { Gm_CardHover2 } from '../components/Glassmorphism/15.Gm_CardHover2';
import { List } from '../components/16.3DList';
import { ChangeButton } from '../components/17.ChangeButton';
import { Smoking } from '../components/18.Smoking';
import { Bubbles } from '../components/19.Bubbles';
import { Profile } from '../components/Card/20.Profile';
import { GlowingButton } from '../components/21.GlowingButton';
import { ListArrow } from '../components/22.ListArrow';
import { HoverEffect } from '../components/23.HoverEffect';
import { CircularProgress } from '../components/24.CircularProgress';
import { CircleLoader } from '../components/Animation/9.CirCleLoader';
import { SearchInput } from '../components/25.SearchInput';
import { DropMenu } from '../components/26.DropMenu';
import { IconList } from '../components/27.CSSIconHover';
import { SideDashbord } from '../components/28.SideDashboard';
import { CircularNavigation } from '../components/29.CircularNavigation';
import { IconHover } from '../components/30.LineIconHover';
import { FocusHover } from '../components/31.FocusHover';
import { DigitalClock } from '../components/32.DigitalClock';
import { TextAnimation } from '../components/33.3DTextAnimation';
import { RangeSlider } from '../components/34.Slider';

const itemTitle = [
  'Animated Circular Navigation Menu Magic Indicator',
  'CSS Only 3D Safari Logo Animation Effects on Hover',
  'CSS 9 Dots Menu | Html CSS Icon Hover Effects',
  'Magic Navigation Menu Indicator',
  'Sidebar Menu using Html CSS & Javascript',
  'Claymorphism List Hover Effects',
  'CSS Responsive Card Hover Effects',
  'Glassmorphism Login Form using Html & CSS ',
  'Glassmorphism Login Form using Html & CSS ',
  'CSS Glassmorphism Button Hover Effects',
  'How to make Calculator With JavaScript',
  'Responsive Glassmorphism Card Hover Effects',
  'Creative Z-Index Transition Icon Hover Effects',
  'Build A Responsive Glassmorphism',
  'Creative Our Team Section Using',
  'Creat 3D List',
  'Creat ChangeButton',
  'Cigarettes have been with me for half of my life...',
  'BackGround Bubbles',
  'Create Profile Only Css',
  'Implement hover effect using only css',
  'Create a list arrow using a function',
  'CSS Animation & Hover Effects',
  'Animated Circular Progress Bar Using Html CSS Only',
  'Instagram Search Input',
  'Custom Select Menu Dropdown using Html CSS',
  'CSS Icon Hover Effects with Text And Gradient Drop Shadow',
  'Dashboard Sidebar Menu using Html CSS ',
  'Animated Circular Navigation Menu',
  'CSS Magic Line Icon Hover Effects',
  'CSS Text Hover Transition Effects',
  'Amazing Working Analog and Digital Clock Design',
  'CSS Only 3D Text Animation Effects',
  'CSS Neumorphism Custom Range Slider',
];
const itemComponents: any = {
  1: <CircularNav />,
  2: <Safari3D />,
  3: <DotsMenu />,
  4: <MagicIndicator_1 />,
  5: <SideBar_1 />,
  6: <ClaymorphismList_1 />,
  7: <Card_1 />,
  8: <Gm_LoginForm />,
  9: <CircleLoader />,
  10: <Gm_Button_1 />,
  11: <Gm_Calculator />,
  12: <Gm_CardHover />,
  13: <Gm_TransitionIcon />,
  14: <Gm_ResMenu />,
  15: <Gm_CardHover2 />,
  16: <List />,
  17: <ChangeButton />,
  18: <Smoking />,
  19: <Bubbles />,
  20: <Profile />,
  21: <GlowingButton />,
  22: <ListArrow />,
  23: <HoverEffect />,
  24: <CircularProgress />,
  25: <SearchInput />,
  26: <DropMenu />,
  27: <IconList />,
  28: <SideDashbord />,
  29: <CircularNavigation />,
  30: <IconHover />,
  31: <FocusHover />,
  32: <DigitalClock />,
  33: <TextAnimation />,
  34: <RangeSlider />,
};

const Home: VFC<{}> = () => {
  const keys = Object.keys(itemComponents);
  return (
    <>
      {keys.map((item, index) => {
        return (
          <ContentLayout height={700} num={index + 1} title={itemTitle[index]}>
            {itemComponents[item]}
          </ContentLayout>
        );
      })}
    </>
  );
};
export default Home;
