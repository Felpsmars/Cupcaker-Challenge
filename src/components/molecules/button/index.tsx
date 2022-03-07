import React from 'react'

import styles from './styles.module.scss'

interface IProps {
  children: string
}

const Button = (props: IProps): JSX.Element => {
  return (
    <button className={styles.button} type="button">
      {props.children}
    </button>
  )
}

export { Button }
