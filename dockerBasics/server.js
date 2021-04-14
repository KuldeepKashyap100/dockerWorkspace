const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let userGoal = "Lean Docker!";

app.use(bodyParser.urlencoded());
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="styles.css"></link>
            </head>
            <body>
                <section>
                    <h2>My Course Goal</h2>
                    <h3>${userGoal}</h3>
                </section>
                <form method="post" action="/store-goal">
                    <div>
                        <input name="goal" type="text"/>
                        <button type="submit">Submit Goal</button>
                    </div>
                </form>
            </body>
        </html>
    `);
});

app.post("/store-goal", (req, res) => {
    const { goal } = req.body;
    userGoal = goal;
    res.redirect("/");
});

app.listen(3000);