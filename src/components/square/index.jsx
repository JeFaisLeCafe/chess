import React from "react";
import styled from "styled-components";

const Case = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  color: ${(props) => (props.color ? props.color : "pink")};

  border: solid 1px black;
`;

Case.defaultProps = {
  bgColor: "white"
};

const Square = ({ position }) => {
  return (
    <Case bgColor={(position.col + position.row) % 2 === 1 ? "black" : "white"}>
      <p>
        {String.fromCharCode(96 + position.col)}
        {position.row}
      </p>
    </Case>
  );
};

export default Square;
