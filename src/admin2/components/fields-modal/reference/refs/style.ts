import styled from 'styled-components';

interface RefPops {
  isActive: boolean;
}

export const ReferenceList = styled.div`
  padding: 10px;
  max-height: 800px;
  padding-bottom: 10px;
  border: 1px solid #282c34;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Refer = styled.h3<RefPops>`
  margin: 5px 0;
  border: 1px solid #282c34;
  display: grid;
  grid-template-columns: 40px 1fr 100px;
  align-items: center;
  cursor: pointer;
`;

export const Num = styled.div`
  border: 1px solid #282c34;
  padding: 10px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

export const RefName = styled.div<RefPops>`
  padding: 11px;
  transition: 0.3s;
  background: ${({ isActive }) => (isActive ? '#C5C5C5' : 'transparent')};
  &:hover {
    background-color: #c5c5c5;
  }
`;

export const ListContainer = styled.div`
  height: 450px;
  overflow-y: auto;
  padding-bottom: 20px;
  padding-right: 10px;
`;

export const AddButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  margin-top: 10px;
  height: 45px;
  background-color: #50c878;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    background-color: #3a9157;
  }
`;

export const AddRefContainer = styled.div``;

export const SearchRefContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 50px;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  height: 40px;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  background: #858585;
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 10px;
  &:hover {
    background: #5c5c5c;
  }
`;
