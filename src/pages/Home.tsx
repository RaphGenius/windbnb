import Header from "../components/Header/Header";
import House from "../components/houseList/House";
import getData from "../utils/getData";

function Home() {
  return (
    <div className="p-8 w-full">
      <Header />
      <main className="my-4">
        <House />
      </main>
    </div>
  );
}

export default Home;
