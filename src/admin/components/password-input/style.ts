import styled from 'styled-components';

interface Props {
  isFocus: boolean;
  visibile?: boolean;
  version?: '1' | '2';
}

interface LabelProps extends Props {
  length: number;
}

export const LoginInputContainer = styled.div<Props>`
  display: flex;
  border: ${({ isFocus, theme: { primary_color, grey } }) =>
    isFocus ? `2px solid ${primary_color}` : `2px solid ${grey}`};
  border-radius: 5px;
  background-color: white;
  height: 40px;
  margin: ${({ version }) => (version === '2' ? '5px 0px 10px' : '10px 0px')};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  border-radius: 5px;
  position: relative;
`;

export const LoginIcon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${({ isFocus, theme: { primary_color, grey } }) =>
    isFocus ? `2px solid ${primary_color}` : `2px solid ${grey}`};
  height: 100%;
  padding: 0 8px;
  svg {
    padding-bottom: 0;
    width: 24px;
    height: 24px;
    fill: ${({ isFocus, theme: { primary_color, grey } }) =>
      isFocus ? primary_color : grey};
  }
`;

export const LoginIconRight = styled(LoginIcon)<Props>`
  border-right: none;
  svg {
    fill: ${({ visibile, theme: { third_color, grey } }) =>
      visibile ? third_color : grey};
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 18px;
  flex: 1;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
`;

// export const Label = styled.div<LabelProps>`
//   position: absolute;
//   height: ${({ isFocus, length }) => (isFocus || length > 0 ? 'auto' : '100%')};
//   display: flex;
//   top: ${({ isFocus, length }) => (isFocus || length > 0 ? '-8px' : '-1px')};
//   color: ${({ isFocus, theme: { primary_color, grey } }) =>
//     isFocus ? primary_color : grey};
//   background-color: ${({ isFocus, length }) =>
//     isFocus || length ? 'white' : 'transparent'};
//   padding-left: ${({ isFocus, length }) =>
//     isFocus || length ? '5px' : '10px'};
//   padding-right: ${({ isFocus, length }) =>
//     isFocus || length ? '5px' : '10px'};
//   align-items: center;
//   font-size: ${({ isFocus, length }) =>
//     isFocus || length ? '0.8rem' : '1rem'};
//   pointer-events: none;
//   font-weight: ${({ isFocus, length }) =>
//     isFocus || length ? 'bold' : 'normal'};
//   left: ${({ isFocus, length }) => (isFocus || length ? '7px' : 'auto')};
//   transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
// `;

export const Label = styled.div<LabelProps>`
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

export const TopLabel = styled.div`
  /* position: absolute;
  height: auto;
  display: flex;
  top: -8px;

  background-color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding-left: 7px;
  padding-right: 7px;
  left: 7px; */
`;
