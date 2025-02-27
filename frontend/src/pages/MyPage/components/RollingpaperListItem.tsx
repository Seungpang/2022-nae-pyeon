import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { ReceivedRollingpaper } from "@/types";

const RollingpaperListItem = ({
  id,
  title,
  teamId,
  teamName,
}: ReceivedRollingpaper) => {
  return (
    <li>
      <Link to={`/team/${teamId}/rollingpaper/${id}`}>
        <StyledRollingpaperListItem>
          <StyledTitle>{title}</StyledTitle>
          <StyledTeamName>{teamName}</StyledTeamName>
        </StyledRollingpaperListItem>
      </Link>
    </li>
  );
};

const StyledRollingpaperListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.SKY_BLUE_300};
  border-radius: 8px;

  height: 90px;
  padding: 10px 16px;
  gap: 8px;

  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.SKY_BLUE_400};
  }
`;

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const StyledTeamName = styled.div`
  font-size: 14px;
`;

export default RollingpaperListItem;
