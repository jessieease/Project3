import React from 'react';
import Text from '../Text';
import styles from './Meta.module.css';

const Meta = ({
  title,
  value,
}) => (
  <div className={styles.meta}>
    <Text className={styles.title}>{title}</Text>
    <br />
    <Text className={styles.value}>{value}</Text>
  </div>
);

export default Meta;
