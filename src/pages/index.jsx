import Navbar from "@/Components/Navbar";
import Main from "@/Components/Main";
import Main2 from "@/Components/Main2nuur";
import Charts from "@/Components/Charts";
import Calculate from "@/Components/Calculate";
import Handled from "@/Components/Handled";
import Hello from "@/Components/Hello";
import Footer from "@/Components/Footer";
import Last from "@/Components/Last";
export default function Home() {
  return (
    <div className="w-[2880px]">
      <Navbar></Navbar>
      <Main></Main>
      <Main2></Main2>
      <Charts></Charts>
      <Calculate></Calculate>
      <Handled></Handled>
      <Hello></Hello>
      <Last></Last>
      <Footer></Footer>
    </div>
  );
}
