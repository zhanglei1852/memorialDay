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
        <div className={styles.first_step_bg}/> 
        <div className={styles.first_step_text_container}>
          <div className={styles.title_container}>
            <div className={`${styles.line} ${styles.line_top}`}>
              <div/>
            </div>
            <div className={`${styles.line} ${styles.line_bottom}`}>
              <div/>
            </div>
            <div className={styles.m_text_c}>
              <div className={styles.m_text}>
                <span>结</span>
                <span>婚</span>
                <span>一</span>
                <span>周</span>
                <span>年</span>
                <span>纪</span>
                <span>念</span>
                <span>日</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.first_end}>
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}



export default CountDown;
