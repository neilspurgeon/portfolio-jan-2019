import React from 'react';
import styles from './style.css';

const Container = props => {
  if (props.type === 'inset')
    return (
      <div className={[styles.insetContainer, props.className].join(' ')}>
        {props.children}
      </div>
    );

  if (props.type === 'offset')
    return (
      <div className={[styles.offsetContainer, props.className].join(' ')}>
        {props.children}
      </div>
    );

  return (
    <div className={[styles.mainContainer, props.className].join(' ')}>
      {props.children}
    </div>
  );
};

export default Container;
