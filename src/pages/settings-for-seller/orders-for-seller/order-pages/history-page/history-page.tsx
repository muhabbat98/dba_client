import React from 'react';
import HistoryItem from './history-item';
import SettingsInput from '../../../../../components/settings-input';
import SettingsDropdown from '../../../../../components/settings-dropdown';
import { TableHeader, Table, FilterContainer } from './style';

interface Propses {
  history: any;
  filterOpen: boolean;
}
const HistoryPage: React.FC<Propses> = ({ history, filterOpen }) => {
  const func = (data: any) => {
    console.log('------->', data);
  };
  return (
    <div>
      {filterOpen && (
        <FilterContainer>
          <SettingsInput placeholder="ID Заказа" />
          <SettingsInput placeholder="Стоимость" />
          <SettingsInput placeholder="Покупатель" />
          <SettingsDropdown
            style={{ width: '100%' }}
            label="Статус"
            options={['Все', 'Отменён', 'Доставлен']}
            getOption={func}
          />
        </FilterContainer>
      )}

      <Table>
        {!filterOpen && (
          <TableHeader>
            <div>
              <p>ID Заказа</p>
            </div>
            <div>
              <p>Стоимость</p>
            </div>
            <div>
              <p>Покупатель</p>
            </div>
            <div>
              <p>Cтатус</p>
            </div>
            <div></div>
          </TableHeader>
        )}
        {history.map((item: any, index: number) => {
          return <HistoryItem item={item} key={index} />;
        })}
      </Table>
    </div>
  );
};

export default HistoryPage;
