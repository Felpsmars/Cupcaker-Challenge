import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { Button, EmptyState, EmptyStateType } from 'components/molecules'
import { CryptoRows } from 'components/molecules/crypto-rows'

import watchListContext from 'app/provider/watchListContext'

import styles from './styles.module.scss'

const Home = (): JSX.Element => {
  const { data } = useContext(watchListContext)
  const history = useHistory()

  return (
    <div className={styles.container}>
      <div className={styles.overPanel}>
        <Typography text="Watchlist" variant={TypographyVariant.h3} />
        <Button
          className={styles.button}
          onClick={(): void => history.push('/coin')}
        >
          ADD NEW COIN
        </Button>
      </div>
      <Panel className={styles.panel}>
        {data.length < 1 ? (
          <EmptyState type={EmptyStateType.emptyWallet} />
        ) : (
          <CryptoRows data={data} />
        )}
      </Panel>
    </div>
  )
}

export default Home
