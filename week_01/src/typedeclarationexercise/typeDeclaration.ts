import axios from "axios";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

function printUserInfo(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
}

axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        printUserInfo(response.data);
    })
    .catch(error => console.error(error));

axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        response.data.forEach(user => printUserInfo(user));
    })
    .catch(error => console.error(error));

//QUESTIONS:

/*1. Where do you find axios type declaration file?
    In the node_modules folder
*/
/*2. What is the name of the type declaration file for axios?
    axios.d.ts
*/
/*3. How do you install a type declaration file for a library that does not have one?
    npm install @types/axios
*/
/*4. What is the difference between a type declaration file and a type definition file?
    A type declaration file is a file that contains type definitions for a library that is written in JavaScript.
    A type definition file is a file that contains type definitions for a library that is written in TypeScript.
*/
