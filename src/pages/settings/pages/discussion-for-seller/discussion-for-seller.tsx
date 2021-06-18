import React, { useState } from 'react';

import DiscussionCollapse from './discussion-collapse';
import SettingsDropdown from '../../../../components/settings-dropdown';
import SettingsInput from '../../../../components/settings-input';

import {
  DiscussionContainer, DiscussionTop, DiscussionFilterBtn, FilterText, DiscussionFilterSection
} from './style';

import { ReactComponent as FilterIcon } from '../../../../assets/icons/filter-icon.svg';

const DiscussionForSeller = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [state, setState] = useState("");

  console.log(state)

  return (
    <DiscussionContainer>

      <DiscussionTop>
        <DiscussionFilterBtn onClick={() => setToggleFilter(!toggleFilter)}>
          <FilterIcon />
          <FilterText>Фильтр</FilterText>
        </DiscussionFilterBtn>
      </DiscussionTop>
      {
        toggleFilter ? (
          <DiscussionFilterSection>
            <SettingsInput placeholder="ID ЗАКАЗА" />
            <SettingsDropdown label="Статус" options={['Завершен', 'Активный']} getOption={setState} />
            <SettingsDropdown label="Причина" options={['Товар не прибыл', 'Товар не соотв...']} getOption={setState} />
            <SettingsDropdown label="Продавец" options={['ООО "ДИХАУС', 'ООО "ДИХАУС']} getOption={setState} />
          </DiscussionFilterSection>
        ) : null
      }

      <DiscussionCollapse />
    </DiscussionContainer >
  )
};

export default DiscussionForSeller;