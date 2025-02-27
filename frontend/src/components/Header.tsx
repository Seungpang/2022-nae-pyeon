import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import IconButton from "./IconButton";

import SearchIcon from "@/assets/icons/bx-search.svg";
import UserIcon from "@/assets/icons/bx-user.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate("/mypage");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <StyledHeader>
      <Link to={"/"}>
        <StyledHome>내편</StyledHome>
      </Link>
      <StyledNav>
        <IconButton onClick={handleSearchClick} size="medium">
          <SearchIcon />
        </IconButton>
        <IconButton onClick={handleMyPageClick} size="medium">
          <UserIcon />
        </IconButton>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 8px;
  margin-bottom: 12px;

  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => `${theme.colors.WHITE}e8`};

  img {
    width: 30px;
    height: 35px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 12px;

  font-size: 32px;

  height: 100%;

  button {
    &:hover {
      color: ${({ theme }) => theme.colors.GRAY_600};
    }
  }
`;

const StyledHome = styled.div`
  font-size: 30px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.SKY_BLUE_400};
`;

export default Header;
