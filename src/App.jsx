import Header from "./components/Header";
import Hero from "./components/Hero";
import InfiniteHorizontal from "./components/InfiniteHorizontal";
import SectionOne from "./components/SectionOne";
function App() {
  return (
    <div className="flex items-center w-full flex-col font-montreal-book">
      <div className="bg-gradient-to-b from-[#292929] to-[#484848] w-full text-white flex flex-col items-center ">
        <Header />
        <Hero />
      </div>
      <SectionOne />
      <InfiniteHorizontal />
    </div>
  );
}

export default App;
