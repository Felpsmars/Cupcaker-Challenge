import React from 'react'

import styles from './styles.module.scss'

type IProps = {
  coin: string
  className: string
}

const Letter = (props: IProps): JSX.Element => {
  return (
    <div id={styles.letter} className={props.className}>
      <p>{props.coin && props.coin[0]}</p>
    </div>
  )
}

export { Letter }
