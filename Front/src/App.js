import "./App.css";
import Banner from "./component/Banner";
import Card from "./component/Card";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex flex-col">
        <div className="flex justify-between m-10">
          <h1 className="font-bold text-3xl">Discover Our Courses</h1>
          <button className="rounded-2xl bg-pink-800 px-4 py-1 text-sm text-white font-bold">
            View More{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 place-items-center flex-wrap items-center justify-center ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
