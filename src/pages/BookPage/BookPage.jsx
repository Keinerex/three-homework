import React from 'react';
import Header from "../../components/Header/Header";
import BookInfo from "../../components/BookInfo/BookInfo";
import {catalog} from "../../constants/mock";


function BookPage() {
    return (
        <>
            <Header/>
            <BookInfo book={catalog[0].books[0]}/>
        </>
    );
}

export default BookPage;