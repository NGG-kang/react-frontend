import React from 'react';
import PropTyeps from 'prop-types';
function ThemedButton({ theme, label, ...restProps }) {
  return (
    <button className={`btn btn-${theme}`} {...restProps}>
      {label}
    </button>
  );
}

ThemedButton.defaultProps = {
  theme: 'default',
};
ThemedButton.propTypes = {
  theme: PropTyeps.string,
  label: PropTyeps.string.isRequired,
};

export default ThemedButton;
