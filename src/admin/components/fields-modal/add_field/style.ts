import styled from 'styled-components';

export const AddFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`;
export const TypesdContainer = styled.div`
  border: 1px solid #eee;
  padding: 5px;
  background-color: #fefce8;
  padding-top: 0;
  padding-bottom: 0;
`;

export const Suggestion = styled.div`
  border: 1px solid #858585;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftArrowContainer = styled.div`
  svg {
    width: 50px;
    fill: #858585;
    display: block;
  }
`;

export const FieldsdContainer = styled.div`
  margin-left: 10px;
  //border: 1px solid green;
`;

export const Title = styled.div`
  margin: 8px 0;
  font-weight: bold;
  text-align: center;
`;

export const SuggestionText = styled.div`
  font-size: 25px;
  margin-left: 10px;
`;

export const PlusButton = styled.span`
  background-color: #047804;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 30px;
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const CurrentTypesListContainer = styled.div`
  //border: 1px solid red;
  padding: 10px;
`;
