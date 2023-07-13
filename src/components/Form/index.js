import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Form.css';
import PropTypes from 'prop-types';

export default function Form({ handleChange, handleSubimit, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubimit}>
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubimit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
