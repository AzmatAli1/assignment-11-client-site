import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>

            <h3>1. Differences between Javascript and NodeJS</h3>

            <p>JavaScript</p>

            <ul className='text-align:left'>
                <li>javascript is a programming language that is used for writing scripts on the website.</li>
                <li>Javascript can only be run in the browsers.</li>
                <li>It is basically used on the client-side.</li>
                <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                <li>Javascript is used in frontend development.
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.</li>
                <li>It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.</li>
            </ul>

            <p>  NodeJS</p>
            <ul>
                <li>NodeJS is a Javascript runtime environment.</li>
                <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                <li> It is mostly used on the server-side.</li>
                <li> Nodejs does not have capability to add HTML tags.</li>
                <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                <li>Nodejs is used in server-side development.</li>
                <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</li>
                <li>Nodejs is written in C, C++ and Javascript.
                </li>
            </ul>

            <h3> 2. What is the purpose of jwt and how does it work?</h3>

            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a
            server.First, some terms d'art need to be disambiguated. It's not uncommon to hear somebody refer to a REST API as
            simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication.
            A JSON Web Token consists of 3 parts separated by a period.
            1. header.
            2. payload.
            3. signature.
            Due to this security issue, the auth server needs to transmit this information in a way that can be verified by the
            client application, and this is where the concept of a “token” comes into the picture.

            To put it simply, a token is a string that contains some information that can be verified securely. It could be a
            random set of alphanumeric characters which point to an ID in the database, or it could be an encoded JSON that can be
            self-verified by the client (known as JWTs).

            <h3>3. Differences between sql and nosql database?</h3>

            <p>SQL:</p>
            <ul>
                <li>SQL databases are primarily called RDBMS or Relational Databases</li>
                <li> TSQL databases are primarily called RDBMS or Relational Databases</li>
                <li> Structured query language (SQL)</li>
                <li>SQL databases are table based databases</li>
                <li>SQL databases have a predefined schema</li>
                <li>An ideal choice for the complex query intensive environment.</li>
                <li>It was developed in the 1970s to deal with issues with flat file storage</li>
                <li>A mix of open-source like Postgres & MySQL, and commercial like Oracle Database.</li>
                <li>Highly Available Storage (SAN, RAID, etc.)</li>
            </ul>
            <p> NoSql</p>
            <ul>
                <li></li>
                <li>NoSQL databases are primarily called as Non-relational or distributed database</li>
                <li>NoSQL database system consists of various kind of database technologies. These databases were developed in response
                    to the demands presented for the development of the modern application.</li>
                <li>No declarative query language.</li>
                <li>NoSQL databases can be document based, key-value pairs, graph databases.</li>
                <li>NoSQL databases use dynamic schema for unstructured data.</li>
                <li>It is not good fit complex queries.</li>
                <li> Developed in the late 2000s to overcome issues and limitations of SQL databases.</li>
                <li>Open-source</li>
                <li>Commodity drives storage (standard
                    HDDs, JBOD)</li>
            </ul>

            <h3>   4. When should you use node js and when should you use mongodb?</h3>

            Node.js
            Node.js is a JavaScript runtime environment for the back-end of your application. Based on Google's V8 JavaScript
            engine, Node.js includes numerous components and features necessary for web app implementation.

            One of the main advantages of Node.js is its scalability thanks to its event-driven asynchronous engine. Since it
            continues working on other tasks in the queue instead of waiting for the client to respond, it can perform many more
            operations in parallel and thus faster.
            In addition, Node.js supports the quick installation of third party packages and modules using the npm tool, which we
            will also use in this tutorial to install MongoDB.

            MongoDB
            MongoDB is an open source non-relational database that stores the data in the form of collections and documents.
            Designed with agility and scalability in mind, MongoDB brings together the rich features of relational databases and
            speed of key-value stores.

            Instead of storing data in rows and columns (as relational databases do), MongoDB stores the JSON documents in the
            form of collections with dynamic schemas. Storing all related information together makes querying faster, and since
            MongoDB was also designed to be used asynchronously, it makes for an ideal repository for the data of Node.js
            applications.

            In this tutorial, we'll be installing MongoDB on your local machine, but for production purposes, you might want to
            use the MongoDB Atlas cloud database service.


        </div>
    );
};

export default Blogs;