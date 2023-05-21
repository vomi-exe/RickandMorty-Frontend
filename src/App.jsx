import styles from './App.module.css'
import Main from "./Pages/Main"
import Header from './components/Header/Header'
function App() {

  return (
    <>
      <div className={styles.app} >
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
