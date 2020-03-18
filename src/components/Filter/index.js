import React from 'react';
import {
  InputSearch,
  WrapperFilter,
  InputSearchByTags,
  LabelSearchByTags,
} from './styles';

function Filter(props) {
  const { handleChange, handleInputChange } = props;
  return (
    <WrapperFilter>
      <InputSearch onChange={handleChange} />
      <LabelSearchByTags>
        <InputSearchByTags onChange={handleInputChange} type="checkbox" />
        Search in tags only
      </LabelSearchByTags>
    </WrapperFilter>
  );
}

export default Filter;
