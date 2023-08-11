import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
//import '../css/movieCard.css'
//

//const uri = 'http://localhost:5000/'
const uri = 'https://three380-exam.onrender.com/'

const Book = (props) => {

    const deleteBookInsideCard = () => {
        //console.log('http://localhost:5000/'+ props._id);

        //const bookId = id;
        const requestBody = {
            "_id": props._id
        };
        axios 
            .delete(uri + props._id)
            .then((response) => {
                console.log(response.data);
                if(response.status === 200) {
                    window.location.reload(); 
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    console.log("Failed to delete the book");
                } else {
                    console.log("An unexpected error occured");
                }
            })
    };

    return (
        <div>
            <div class="list">
                <div class="card-container">
                <img
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    alt="Books"
                    height="200"
                />
                <div class="desc">
                    <h2><a href="/show-book/123id">{props.bookName}</a></h2>
                    <h3>{props.author}</h3>
                    <p>{props.description}</p>
                </div>
                <button onClick={deleteBookInsideCard}>
                    X
                </button>
                </div>
            </div>
        </div>
    )
}

export default Book;