import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import OrganisationalChart from "../components/OrgChart";
import MockData from "../data/MOCK_DATA.json";
import LeftLayout from "./LeftLayout";

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 20%;
  border-right: 1px solid gray;
`;

const RightContainer = styled.div`
  width: 80%;
`;

function MainLayout() {
  const [managers, setManagers] = useState([]);
  const [chartData, selectedChartData] = useState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const data = [];
    MockData.map((manager) =>
      data.push({
        id: manager?.id,
        employee_name: manager?.employee_name,
      })
    );
    setManagers(data);
    selectedChartData(MockData[0]);
  }, []);

  const handleUpdateManager = (id) => {
    const filteredData = MockData.filter((mock) => mock.id === id);
    selectedChartData(filteredData[0]);
  };

  const handleSearchManager = useCallback(
    debounce((value) => {
      if (value && value !== "") {
        const filteredData = managers.filter((mock) =>
          mock.employee_name.toLowerCase().includes(value.toLowerCase())
        );
        setOptions(filteredData);
      }
    }, 500)
  );

  return (
    <MainLayoutContainer>
      <LeftContainer>
        <LeftLayout
          managers={managers}
          options={options}
          handleSetManager={handleUpdateManager}
          searchManagerName={handleSearchManager}
        />
      </LeftContainer>
      <RightContainer>
        <OrganisationalChart chartData={chartData} />
      </RightContainer>
    </MainLayoutContainer>
  );
}

export default MainLayout;
