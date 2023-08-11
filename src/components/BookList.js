import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

//import Navbar from '../components/navbar';
import Book from './Book';

//const uri = 'http://localhost:5000/'
const uri = 'https://three380-exam.onrender.com/'

const BookList =() => {
    const [bookData, setBookData] = useState([]);   //store book data that get from database
    const [message, setMessage] = useState("");     //capture server return message

//---------------------------------------------------------------------------------------------

//get all data from database
    useEffect(() => {
        axios 
            .get(uri)
            .then((response) => {
                setBookData(response.data);
            })
            .catch((error) => {
                console.log("Error when getting book data from server");
            });
    }, []);
//---------------------------------------------------------------------------------------------

//rednering

return (
    <div>
        <div className="col-md-11">
            <a className="btn btn-info float-right" href="/create-book">
                + Add New Book
            </a>
            <br /><br />
            <hr />
        </div>

        {bookData.map((eachBook) => (
            <Book
                key={eachBook._id}
                _id={eachBook._id}
                bookName={eachBook.title}
                author={eachBook.author}
                description={eachBook.description}
            />
        ))}
    </div>
);

};

export default BookList;