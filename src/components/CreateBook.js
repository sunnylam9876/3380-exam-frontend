import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
//import Navbar from './navbar';


//const uri = 'http://localhost:5000/'
const uri = 'https://three380-exam.onrender.com/'

const CreateBook =() => {
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedAuthor, setUpdatedAuthor] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
         const requestBody = {
            "title": updatedTitle,
            "author": updatedAuthor,
            "description": updatedDescription           
        }

        axios
            .post(uri, requestBody)
            .then((res) => {
                window.location = '/';
            }); 
    };

    return(
        <div>
            <div class="CreateBook">
                <div class="container">
                    <div class="row">
                    <div class="col-md-8 m-auto">
                        <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
                    </div>
                    <div class="col-md-8 m-auto">
                        <h1 class="display-4 text-center">Add Book</h1>
                        <p class="lead text-center">Create new book</p>
                        <form onSubmit={handleSubmit} novalidate=""> 
                        <div class="form-group">
                            <input
                            type="text"
                            placeholder="Title of the Book"
                            name="title"
                            class="form-control"
                            value={updatedTitle}
                            spellcheck="false"
                            data-ms-editor="true"
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <input
                            type="text"
                            placeholder="Author"
                            name="author"
                            class="form-control"
                            value={updatedAuthor}
                            spellcheck="false"
                            data-ms-editor="true"
                            onChange={(e) => setUpdatedAuthor(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <input
                            type="text"
                            placeholder="Describe this book"
                            name="description"
                            class="form-control"
                            value={updatedDescription}
                            spellcheck="false"
                            data-ms-editor="true"
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                            />
                        </div>
                        <input type="submit" class="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook;