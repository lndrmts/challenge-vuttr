import React from 'react';
import {
  InputSearch,
  WrapperFilter,
  InputSearchByTags,
  LabelSearchByTags,
} from './styles';

function Filter() {
  return (
    <WrapperFilter>
      <InputSearch />
      <LabelSearchByTags>
        <InputSearchByTags type="checkbox" />
        Search in tags only
      </LabelSearchByTags>
    </WrapperFilter>
  );
}

export default Filter;
