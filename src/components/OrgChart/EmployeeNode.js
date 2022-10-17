import React from "react";
import styled from "styled-components";

const NodeContainer = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 0.5rem;
  border: 1px solid #099;
  padding: 0.5rem;

  p {
    font-size: 0.8rem;
    font-weight: 700;
    :nth-of-type(2) {
      font-size: 0.5rem;
      font-weight: 400;
    }
  }

  :hover {
    filter: drop-shadow(2px 4px 8px #099);
  }
`;

const ImageContainer = styled.div`
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;

  img {
    max-width: 98%;
    height: 100%;
  }
`;

const EmployeeProtoType = {
  nodeData: Object,
};

function EmployeeNode({ nodeData }) {
  return (
    <NodeContainer>
      {nodeData.imageUrl ? (
        <ImageContainer>
          <img src={nodeData.imageUrl} alt="Employee" />
        </ImageContainer>
      ) : null}
      <p>{nodeData.employee_name}</p>
      <p>{nodeData.email}</p>
    </NodeContainer>
  );
}

EmployeeNode.prototype = EmployeeProtoType;

export default EmployeeNode;
