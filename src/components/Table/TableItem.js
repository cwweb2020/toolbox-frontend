import React from "react";

const TableItem = (props) => {
  const { file, text, number, hex } = props;
  return (
    <tr>
      <td>{file}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  );
};

export default TableItem;
