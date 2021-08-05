import React, { useState } from 'react';
import DiscussionMobileFilterSection from './discussion-mobile-filter-section';
import SettingsInput from '../../../../components/settings-input';
import SettingsDropdown from '../../../../components/settings-dropdown';
import {
  DiscussionMobileContainer,
  DiscussionMobileTop,
  DiscussionTopTitle,
  DiscussionFilterBtn,
  FilterText,
  DiscussionFilterContainer,
  DiscussionFilterItem,
} from './style';
import { ReactComponent as FilterIcon } from '../../../../assets/icons/filter-icon.svg';

const DiscussionMobile = () => {
  const [state, setState] = useState('');
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <>
      <DiscussionMobileContainer>
        <DiscussionMobileTop>
          <DiscussionTopTitle>Споры</DiscussionTopTitle>
          <DiscussionFilterBtn onClick={() => setToggleFilter(!toggleFilter)}>
            <FilterIcon />
            <FilterText>Фильтр</FilterText>
          </DiscussionFilterBtn>
        </DiscussionMobileTop>

        {toggleFilter ? (
          <DiscussionFilterContainer>
            <DiscussionFilterItem>
              <SettingsInput
                style={{ width: '100%' }}
                placeholder="ID ЗАКАЗА"
              />
            </DiscussionFilterItem>
            <DiscussionFilterItem>
              <SettingsDropdown
                label="Статус"
                options={['Завершен', 'Активный']}
                getOption={setState}
              />
            </DiscussionFilterItem>
            <DiscussionFilterItem>
              <SettingsDropdown
                label="Причина"
                options={['Товар не прибыл', 'Товар не соотв...']}
                getOption={setState}
              />
            </DiscussionFilterItem>
            <DiscussionFilterItem>
              <SettingsDropdown
                label="Продавец"
                options={['ООО "ДИХАУС', 'ООО "ДИХАУС']}
                getOption={setState}
              />
            </DiscussionFilterItem>
          </DiscussionFilterContainer>
        ) : null}
      </DiscussionMobileContainer>

      <DiscussionMobileFilterSection />
      <DiscussionMobileFilterSection />
    </>
  );
};

export default DiscussionMobile;
