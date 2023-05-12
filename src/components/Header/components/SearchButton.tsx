type Props = {
  title: string;
};

const SearchButton = ({ title }: Props) => {
  return (
    <input
      className=" truncate  p-2 text-center  "
      placeholder={title}
      type="text"
      name=""
      id=""
    />
  );
};

export default SearchButton;
