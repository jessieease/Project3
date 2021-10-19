import React from 'react';
import classNames from 'classnames/bind';
import styles from './Text.module.css';

const cx = classNames.bind(styles);

const Text = ({
  className,
  children,
}) => (
  <span className={cx('text', className)}>
    {children}
  </span>
);

export default Text;
