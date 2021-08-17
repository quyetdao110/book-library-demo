const express = require('express');
const { ApolloServer } = require('apollo-server');
const cors = require('cors');
const mongoose = require('mongoose')

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

//load db methods
const mongoDataMethods = require('./data/db')

//connect with mongodb
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://Quyetdao:12345@bookgraphql.m1m3p.mongodb.net/BookGraphQL?retryWrites=true&w=majority', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods })
})

server.listen().then(({ url }) =>
    console.log(`Server is running on ${url}`)
);

// const app = express()
// app.use(cors())

// const main = async() => {
//     await server.start();
//     server.applyMiddleware({ app })
// }

// app.listen({ port: 4000 }, () =>
//     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
// )