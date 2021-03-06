import React, { FC } from "react";
import styled from "styled-components";

import { useDataContext } from "../context/DataContext";

const StyledContainer = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  strong {
    font-size: 20px;
    line-height: 26px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

interface ContainerProps {
  name: string;
}

const ExploreContainer: FC<ContainerProps> = ({ name }) => {
  const { state } = useDataContext();

  return (
    <StyledContainer>
      <strong>{name}</strong>
      <p>Context value: {state.data}</p>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </StyledContainer>
  );
};

export default ExploreContainer;
