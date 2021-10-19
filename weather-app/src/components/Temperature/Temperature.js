import React from 'react';

const Temperature = ({
  className,
  children,
}) => (
  <span className={className}>
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </span>
);

export default Temperature;
