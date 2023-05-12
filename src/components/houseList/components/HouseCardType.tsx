type Props = {
  typeOfHouse: string;
};
function HouseCardType({ typeOfHouse }: Props) {
  return <span className="text-gray100"> {typeOfHouse} </span>;
}

export default HouseCardType;
