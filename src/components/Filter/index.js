import React from 'react';
import PropTypes from 'prop-types';
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
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default Filter;
