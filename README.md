# User-Authentication-in-Web-Apps
## We will be dealing with different authentication way to secure Apps
##### Authentication is a primary source of security for all web and mobile applications. In order to identify the user is genuine and the user has the privilege to access the web applications, authentication is very helpful.
 
1. Authentication Using Passport-Local strategy
2. Authentication Using Json-Web-Token(JWT)
3. Public Key Cryptography (a.k.a. Asymmetric Cryptography)
4. Authentication Using Json-Web-Token(JWT) + Public Key Cryptography
5. Authentication Using Passport-JWT strategy


#### Each Repo has one Authentication method implemented


1. Passport-Local strategy

#### Install Node.js , Express.js and MongoDB:

```sh
$ git clone https://github.com/manish0502/User-Authentication-in-Web-Apps.git
$ cd complete-guide-to-express
$ npm i and  npm start
$ http://localhost:5000/api/v1/auth/register
```
## About Passport-Local Strategy

  *  `PassportJS`- Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express- based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

 * `passport-local-strategy `- The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

 * `ExpressJs` - Express.js, or simply Express, is a back end web application framework for Node.js * 



###


2. Authentication Using Pubic key Cryptography

#### Install Node.js , Express.js and MongoDB:

```sh
$ git clone https://github.com/manish0502/User-Authentication-in-Web-Apps.git
$ cd public-key-cryptography
$ npm i and  npm start
$ http://localhost:5000/api/v1/auth/register
```
## About Elliplic Curve Cryptography

  *  `Key-pair Generation`- JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.


3. JWT-Authentication

#### Install Node.js , Express.js and MongoDB:

```sh
$ git clone https://github.com/manish0502/User-Authentication-in-Web-Apps.git
$ cd authentication-using-jwt
$ npm i and  npm start
$ http://localhost:5000/api/v1/auth/register
```
## About JSON-WEB-TOKEN

  *  `JSON Web Token(JWT)`- JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
