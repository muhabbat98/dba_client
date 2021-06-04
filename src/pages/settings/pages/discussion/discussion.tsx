import React, { useState } from 'react';

import DiscussionCollapse from './discussion-collapse';
import SettingsDropdown from '../../../../components/settings-dropdown';
import SettingsInput from '../../../../components/settings-input';

import {
  DiscussionContainer, DiscussionTop, DiscussionFilterBtn, FilterText, DiscussionFilterSection
} from './style';

import { ReactComponent as FilterIcon } from '../../../../assets/icons/filter-icon.svg';

const Discussion = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

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
            <SettingsInput placeholder="ID ЗАКАЗА"/>
            <SettingsDropdown label="Статус" options={['Завершен', 'Активный']} />
            <SettingsInput placeholder="Причина"/>
            <SettingsInput placeholder="Продавец"/>
          </DiscussionFilterSection>
        ) : null
      }

      <DiscussionCollapse />
    </DiscussionContainer >
  )
};

export default Discussion;