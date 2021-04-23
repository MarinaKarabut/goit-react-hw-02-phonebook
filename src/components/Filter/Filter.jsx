import React from 'react';

import PropTypes from 'prop-types'

import styles from './Filter.module.css'

function Filter({value, onChange}) {
    return (
        <label>
          Finds contacts by name <input
          className = {styles.input} 
          type="text"
          value = {value}
          onChange = {onChange}
          />
      
        </label>
    )
};

export default Filter;


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
