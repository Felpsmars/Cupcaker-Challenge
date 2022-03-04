import React from 'react'

import styles from './styles.module.scss'

type IProps = {
  coin: string | undefined
  description: string | undefined
}

const Letter = (props: IProps): JSX.Element => {
  return (
    <div className={styles.description}>
      <div>
        <p>{props.coin && props.coin[0]}</p>
      </div>
      <p>{props.description ? props.description : 'No description!'}</p>
    </div>
  )
}

export { Letter }
