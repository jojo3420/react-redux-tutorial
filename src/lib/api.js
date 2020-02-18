import axios from 'axios';

// TEST URL
// https://jsonplaceholder.typicode.com/posts/:id
// https://jsonplaceholder.typicode.com/users

export const getPost = id =>
	axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () =>
	axios.get(`https://jsonplaceholder.typicode.com/users`);
