import React, { FormEvent } from 'react'

import styles from './styles.module.scss'

interface IProps {
  className: string
  children: string
  onClick: (e: FormEvent<HTMLButtonElement>) => void
}

const Button = (props: IProps): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      id={styles.button}
      className={props.className}
      type="button"
    >
      {props.children}
    </button>
  )
}

export { Button }
