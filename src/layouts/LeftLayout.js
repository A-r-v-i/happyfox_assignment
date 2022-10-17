import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  height: 100%;
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20%;
  background-color: #083aa9;
  color: #ffe7cc;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 90%;
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  margin: 0 0 0.5rem 0.5rem;
  text-indent: 0.5rem;
  color: #ffffff;
  ::placeholder {
    color: #fff;
  }
`;

const ManagerList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

const ListOrderedList = styled.ul`
  list-style: none;
  display: contents;
  padding: 0;

  li {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    padding-left: 2rem;
    cursor: pointer;
    border-bottom: 1px solid lightgray;

    :hover {
      box-shadow: 2px 2px 5px grey;
    }
  }
`;

const Header = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const SuggestContainer = styled.div`
  position: absolute;
  top: 95%;

  li {
    width: 10rem;
  }
`;

const LeftLayout = ({
  managers,
  options,
  handleSetManager,
  searchManagerName,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (options.length) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  }, [options]);

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
    searchManagerName(e.target.value);
  };
  const handleClickName = (value) => {
    setInputValue(value.employee_name);
    handleSetManager(value?.id);
    setShowList(false);
  };
  return (
    <Sidebar>
      <SearchInputContainer>
        <Input
          placeholder="Search manager"
          type="text"
          value={inputValue}
          onChange={handleChangeValue}
        />
        {options.length && showList ? (
          <SuggestContainer>
            <ListOrderedList>
              {options?.length > 0 &&
                options?.map((value, index) => (
                  <li
                    key={`${value.id}-${index}`}
                    value={value}
                    onClick={() => handleClickName(value)}
                  >
                    {value.employee_name}
                  </li>
                ))}
            </ListOrderedList>
          </SuggestContainer>
        ) : null}
      </SearchInputContainer>
      <ManagerList>
        {managers ? (
          <>
            <Header> Managers </Header>
            <ListOrderedList>
              {managers.map((manager) => (
                <li
                  key={manager.id}
                  onClick={() => handleSetManager(manager?.id)}
                >
                  {manager.employee_name}
                </li>
              ))}
            </ListOrderedList>
          </>
        ) : null}
      </ManagerList>
    </Sidebar>
  );
};

export default LeftLayout;
