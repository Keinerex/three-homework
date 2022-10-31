import './pages/MarketPage/styles.module.css';
import MarketPage from "./pages/MarketPage/MarketPage";
import classnames from "classnames";
import styles from "./app.module.css";
import {catalog} from "./constants/mock";
import BookPage from "./pages/BookPage/BookPage";


function App() {
    return (
        <div className={classnames(styles.app)}>
            <BookPage book={catalog[0].books[0]}></BookPage>

            {/*
            <MarketPage catalog={catalog}></MarketPage>
            */}
        </div>

    );
}

export default App;
