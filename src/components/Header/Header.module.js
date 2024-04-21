import styled from 'styled-components';

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 64px;
`;

export const Logo = styled.span`
  font-size: 20px;
  color: #101828;
`;

export const ListNav = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  position: relative;
  left: 20px;
  margin-left: auto;
`;

export const ListItem = styled.li`
  &:hover {
    color: #e44848;
  }
`;
