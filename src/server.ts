import express, { request } from 'express';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({
        message: "Hello World"
    })
});

app.post("/", (request, response) => {
    const { name } = request.body;

    return response.json({ name});
})

app.listen(3333, () => console.log('Server Start!'));