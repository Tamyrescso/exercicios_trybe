import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, handleSelect } = props
  return (
    <div className="Item" onClick={() => handleSelect(content) }>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
