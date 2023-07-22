import React from "react";

interface ICardList {
  data: JSX.Element[];
}

const CardList: React.FC<ICardList> = ({data}) => {
  const list = data.map(item => {
    return <li key={item.props.id}>{item}</li>;
  });

  return (
    <ul className="card-list list-reset">{list}</ul>
  );
}

export {CardList};
