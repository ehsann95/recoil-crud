import React from "react";
import { useRecoilValue } from "recoil";
import { viewState } from "../../recoil/productRecoil";

const View = (props) => {
  const view = useRecoilValue(viewState);
  if (view === "column") {
    return <ColumnView>{props.children}</ColumnView>;
  } else {
    return <RowView>{props.children}</RowView>;
  }
};

const ColumnView = (props) => {
  return <div className="column is-4">{props.children}</div>;
};

const RowView = (props) => {
  return <div className="column is-12">{props.children}</div>;
};

export default View;
