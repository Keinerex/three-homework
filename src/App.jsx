import classnames from "classnames";
import styles from "./app.module.css";
// eslint-disable-next-line
import BookPage from "./pages/BookPage/BookPage";
// eslint-disable-next-line
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import Header from "./components/Header/Header";
import React from "react";
import {store} from "./store";
import {Provider} from "react-redux";
import Books from "./components/Books/Books";
import CartPage from "./pages/CartPage/CartPage";
import ProfilePage from "./pages/UserPage/ProfilePage";
import PersonalData from "./components/PersonalData/PersonalData";
import Bonuses from "./components/Bonuses/Bonuses";
import Favourite from "./components/Favourite/Favourite";
import Orders from "./components/Orders/Orders";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";


function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Provider store={store}>
                <BrowserRouter>
                    <div className={classnames(styles.app)}>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<MarketPage/>}>
                                <Route path=":categoryId" element={<Books target={"market"}/>}></Route>
                            </Route>
                            <Route path="/book">
                                <Route path=":bookId" element={<BookPage/>}></Route>
                            </Route>
                            <Route path="/cart" element={<CartPage/>}/>
                            <Route path="/profile" element={<ProfilePage/>}>
                                <Route path="personal" element={<PersonalData/>}/>
                                <Route path="orders" element={<Orders/>}/>
                                <Route path="bonus" element={<Bonuses/>}/>
                                <Route path="favourite" element={<Favourite></Favourite>}/>
                            </Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        </LocalizationProvider>
    );
}

export default App;
