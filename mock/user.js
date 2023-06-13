const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.post("/user/login", (req, res) => {
    const { username } = req.body;

    if (username === "admin" || username === 'editor') {
        res.json({
            code: 1,
            data: username
        });
    } else {
        res.json({
            code: 10204,
            message: "用户名或密码错误"
        });
    }
});

app.get("/user/roles", (req, res) => {
    const roles = req.headers['authorization'].split(' ')[1] === 'admin' ? ["admin"] : ["editor"];
    res.json({
        code: 1,
        data: roles
    });
});

app.get("/user/test", (req, res) => {
    res.json({
        code: 1,
        data: 'test'
    });
});

app.listen(1000);
