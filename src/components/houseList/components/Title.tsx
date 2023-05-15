import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <h2 className="text-mainBlack font-mulishFont  ">{title} </h2>;
}
