import express from "express";

const Router = express.Router();

Router.get("/getData", (req, res) => {
    res.json(
        {
            Users: [
                {
                    id: 0,
                    name: "Rahul"
                },
                {
                    id: 1,
                    name: "Mukesh"
                }
            ],
            Link: {
                goBack: "http://localhost:5000"
            }
        }
    );
});


export default Router;