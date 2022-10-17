import React from "react";
import styled from "styled-components";
import Chart from "@dabeng/react-orgchart";
import EmployeeNode from "./EmployeeNode";

const ChartContainer = styled.div`
  display: block;
  margin: 1.5rem;
  padding: 0.5rem;

  .orgchart-container {
    overflow: hidden;
    border: none;

    .chart__wrapper {
      background: none;
    }
  }
`;

const handleClickNode = (nodeData) => {
  console.log("Node data * ", nodeData);
};

function OrganisationalChart({ chartData }) {
  return (
    <ChartContainer>
      {chartData ? (
        <Chart
          datasource={chartData}
          draggable
          chartClass="chart__wrapper"
          NodeTemplate={EmployeeNode}
          onClickNode={handleClickNode}
        />
      ) : (
        <p>loading</p>
      )}
    </ChartContainer>
  );
}

export default OrganisationalChart;

// const ds = {
//   id: "n1",
//   name: "Lao Lao",
//   title: "general manager",
//   children: [
//     { id: "n2", name: "Bo Miao", title: "department manager" },
//     {
//       id: "n3",
//       name: "Su Miao",
//       title: "department manager",
//       children: [
//         { id: "n4", name: "Tie Hua", title: "senior engineer" },
//         {
//           id: "n5",
//           name: "Hei Hei",
//           title: "senior engineer",
//           children: [
//             { id: "n6", name: "Dan Dan", title: "engineer" },
//             { id: "n7", name: "Xiang Xiang", title: "engineer" },
//           ],
//         },
//         { id: "n8", name: "Pang Pang", title: "senior engineer" },
//       ],
//     },
//     { id: "n9", name: "Hong Miao", title: "department manager" },
//     {
//       id: "n10",
//       name: "Chun Miao",
//       title: "department manager",
//       children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }],
//     },
//   ],
// };

// const x = [
//   {
//     id: "db7c5ff9-cc5f-49a0-8f47-3459e71fc3b7",
//     employee_name: "Molli Minmagh",
//     email: "mminmagh0@msn.com",
//     gender: "Female",
//     manager_id: 17,
//     is_manager: true,
//     children: [
//       {
//         id: "951b98bf-99a9-4bdb-b50d-6d8ec39c58cc",
//         employee_name: "Jorge Brettle",
//         email: "jbrettle7@nyu.edu",
//         gender: "Male",
//         manager_id: 79,
//         is_manager: true,
//       },
//       {
//         id: "8b53481a-f2be-40e5-bf43-0f66ff83f968",
//         employee_name: "Tybi Norquay",
//         email: "tnorquay8@irs.gov",
//         gender: "Female",
//         manager_id: 58,
//         is_manager: false,
//         children: [
//           {
//             id: "7cabfb17-09c8-4c33-937f-6e89ef384ca6",
//             employee_name: "Rudd Dudbridge",
//             email: "rdudbridge1@hao123.com",
//             gender: "Male",
//             manager_id: 85,
//             is_manager: true,
//           },
//           {
//             id: "e0b67d78-a55c-4303-bc0c-5f63e102d032",
//             employee_name: "Ddene Cunio",
//             email: "dcunio2@facebook.com",
//             gender: "Female",
//             manager_id: 91,
//             is_manager: false,
//           },
//         ],
//       },
//       {
//         id: "6f2db26a-8420-450d-a0ce-7ad4e56d02cb",
//         employee_name: "Othello Pitson",
//         email: "opitson9@dailymail.co.uk",
//         gender: "Male",
//         manager_id: 32,
//         is_manager: false,
//       },
//     ],
//   },
// ];
