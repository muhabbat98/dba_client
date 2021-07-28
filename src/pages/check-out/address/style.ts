import styled from 'styled-components';
export const Address = styled.div`
  min-width: 398px;
  margin: 0 auto;
`;
export const HeaderAddress = styled.div`
  width: 100%;
  min-height: 48px;
  padding: 4px;
  background: rgba(241, 247, 250, 0.8);
  backdrop-filter: blur(5.43656px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 23.5px;
  & span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 8px 25px;
    cursor: pointer;
  }
`;
interface HeaderAdressProps {
  isActive: boolean;
}
export const PackmenHeader = styled.span<HeaderAdressProps>`
  color: ${({ theme, isActive }) => (isActive ? theme.blue : '#89A9BC')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
`;
export const CallHeader = styled.span<HeaderAdressProps>`
  color: ${({ theme, isActive }) => (isActive ? theme.blue : '#89A9BC')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
`;
export const MailHeader = styled.span<HeaderAdressProps>`
  color: ${({ theme, isActive }) => (isActive ? theme.blue : '#89A9BC')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
`;

export const PackmenBody = styled.div`
  margin-top: 48px;
`;
export const CallBody = styled.div``;
export const MailBody = styled.div``;

export const AddressList = styled.ul`
  max-width: 398px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  list-style: none;
  padding-top: 16px;
`;
export const SampleAdress = styled.li`
  font-size: 14px;
  line-height: 19px;
  padding: 16px 24px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #f4f6f9;
  }
`;

export const AddressButton = styled.button`
  width: calc(100% - 48px);
  border: none;
  outline: none;
  padding: 13px;
  font-weight: 500;
  background-color: #f4f6f9;
  color: ${({ theme }) => theme.primary_color};
  border-radius: 16px;
  margin: 24px;
  cursor: pointer;
  transition: all 0.25s ease;
  :hover {
    background-color: ${({ theme }) => theme.primary_color};
    color: #fff;
  }
`;
