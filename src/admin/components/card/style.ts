import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  border: 2px solid #e9ecf4;
  width: 248px;
  margin-bottom: 16px;
`;

export const CardImageBox = styled.div`
  margin-bottom: 16px;
`;

export const CardImage = styled.img`
  width: 216px;
  height: 176px;
`;

export const CardTextBox = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

export const CardCategoryName = styled(Link)`
  font-size: 12px;
  color: ${({ theme }) => theme.primary_color};
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
  text-decoration: none;
`;

export const CardAuthorName = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary_color};
  margin-bottom: 10px;
`;

export const CardTitle = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
  text-decoration: none;
  color: #000;
  overflow: hidden;
  max-height: 46px;
  height: 46px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

export const CardStatus = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 6px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardSum = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;
