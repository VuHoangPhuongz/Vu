import React from 'react';
import PropTypes from 'prop-types';

const HeaderPage = (props) => {
  console.log('component header da dc render');
  return (
    <>
      <header>
        <h2>This is a header - {props.counter}</h2>
      </header>
    </>
  )
}
HeaderPage.propTypes = {
  counter: PropTypes.number
}
export default React.memo(HeaderPage);