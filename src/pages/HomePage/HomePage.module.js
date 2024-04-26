import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InfoWrapper = styled.div`
  display: flex;
  padding: 100px 64px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const InfoImages = styled.div`
display: flex;
flex - direction: row;
`;

export const InfoImg = styled.img`
  width: 350px;
  margin-bottom: 60px;
`;

export const ListItem = styled.h1`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #e44848;
  }
`;

export const ItemsLink = styled(NavLink)`
  font-size: 60px;
  margin-bottom: 30px;
`;
