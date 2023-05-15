import SearchButton from "../components/SearchButton";
import Loupe from "../components/Loupe";

const GroupButtons = () => {
  return (
    <div
      className="border flex justify-between items-center gap-2
    border-gray-200 max-w-md  w-4/5 lg:w-80 p-2 rounded-xl shadow-lg "
    >
      <SearchButton title="Ville" />
      <SearchButton title="Invité" />
      <button>
        {" "}
        <Loupe />
      </button>
    </div>
  );
};

export default GroupButtons;
