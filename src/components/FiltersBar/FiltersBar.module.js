import styled from 'styled-components';

export const BarApp = styled.div`
  width: 360px;
`;

export const BarForm = styled.form`
  /* width: 360px; */
`;

export const BarInfo = styled.div`
  margin-bottom: 32px;
`;

export const BarName = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const BarInput = styled.input`
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px;
  display: inline-block;
  width: 324px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
`;

export const BarNameFilter = styled.h2`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 14px;
`;

export const NameFilter = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  margin-bottom: 24px;
`;

export const BarLine = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const VehicleOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-bottom: 32px;
`;

export const VehicleOptionsItem = styled.li``;

export const OptionsLable = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  height: 95px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);

  &:hover {
    cursor: pointer;
  }

  /* &:checked{
    border: 1px solid red;
    outline: 12px solid red;
  } */
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background: #e44848;

  color: #fff;
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  border: none;
  outline: none;

  &:hover {
    background: #d84343;
  }
`;

export const InfoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const VehicleTypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-bottom: 64px;
`;

export const TypeImg = styled.img`
  width: 40px;
  height: 28px;
`;
