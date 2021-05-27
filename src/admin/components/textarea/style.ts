import styled from 'styled-components';

interface Props {
  isFocus: boolean;
  length?: number;
}

export const TextareaContainer = styled.div<Props>`
  border: 1px solid red;
  height: 150px;
  border-radius: 5px;
  border: ${({ isFocus, theme: { primary_color, grey } }) =>
    isFocus ? `2px solid ${primary_color}` : `2px solid ${grey}`};
  margin-bottom: 10px;
  position: relative;
`;

export const TextareaInput = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  display: block;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
  font-family: Roboto;
  font-size: 18px;
`;

export const Label = styled.div<Props>`
  position: absolute;
  height: auto;
  display: flex;
  top: -8px;
  color: ${({ isFocus, theme: { primary_color, grey } }) =>
    isFocus ? primary_color : grey};
  background-color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding-left: 7px;
  padding-right: 7px;
  left: 7px;
`;
