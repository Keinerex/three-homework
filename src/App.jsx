import './App.module.css';
import Header from "./components/Header/Header";
import classnames from "classnames";
import styles from "./App.module.css"
import Books from "./components/Books/Books";
import Navigation from "./components/Navigation/Navigation";

function App() {
    return (<div className={classnames(styles.app)}>
        <Header/>
        <main className={classnames(styles.main)}>
            <Navigation/>
            <Books/>
        </main>
    </div>);
}

export default App;
