import React from 'react';

function Jumbotron({ children }) {
  return (
    <div
      style={{
        clear: 'both',
        fontSize: 26,
        fontWeight: 600,
        paddingTop: 5,
        paddingBottom: 10,
        textAlign: 'center',
        background: '#57FC50',
      }}
      className='jumbotron'
    >
      {children}
    </div>
  );
}

export default Jumbotron;
