import * as React from 'react';
import styles from './index.module.less';
interface CountDownState {
  count: number
}
class CountDown extends React.Component<CountDownState> {

  state: CountDownState = {
    count: 3
  }

  componentWillMount () {
    this.setCount()
  }

  setCount = (): void => {
    let { count } = this.state
    setTimeout(() => {
      this.setState({
        count: count - 1
      }, () => {
        if (this.state.count === 1) return false
        this.setCount()
      })
    },1000)
  }

  render () {
    const { count } = this.state
    return (
      <div className={styles.App}>{count}</div>
    )
  }
}



export default CountDown;
