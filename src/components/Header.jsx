import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;
  color: white;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 400;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <MenuList>
        <MenuItem>로그인</MenuItem>
        <MenuItem>회원가입</MenuItem>
        <MenuItem>내클래스</MenuItem>
      </MenuList>
    </HeaderContainer>
  );
}
