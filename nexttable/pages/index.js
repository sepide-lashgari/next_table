import "antd/dist/antd.css"
import styles from '../styles/Home.module.css'
import Mytable from '../coponents/Table/Mytable'

export default function Home() {
  return (
    <div className={styles.container}>
     <Mytable/>
    </div>
  )
}
