import * as React from 'react';
import styles from './index.module.less';
interface CountDownState {
  count?: number
}
class CountDown extends React.Component<CountDownState> {

  state: CountDownState = {
  }

  componentWillMount () {
  }


  render () {
    const { count } = this.state
    return (
      <div className={styles.first_step}>
        <div className={styles.first_step_bg}> </div>
      </div>
    )
  }
}



export default CountDown;
