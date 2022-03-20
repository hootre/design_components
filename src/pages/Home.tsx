import React, { useEffect, useState, VFC } from "react";
import { CircularNav } from "../components/Nav/CircularNav";
import ContentLayout from "../layouts/ContentLayout";
import firebase from "firebase/compat/app";
import { firestore } from "../firebase";
import Safari3D from "../components/Logo/Safari3D";
type Design = { title: string; tsx: string; styles: string };
const Home: VFC<{}> = () => {
  const [datas, setDatas] = useState<Design[]>([]);
  useEffect(() => {
    firestore.collection("design_components").onSnapshot((snapshot) => {
      setDatas(snapshot.docs.map((doc) => doc.data().todo));
      console.log(datas);
    });
  }, []);
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
        title="Animated Circular Navigation Menu Magic Indicator"
      >
        <Safari3D />
      </ContentLayout>
    </>
  );
};
export default Home;
