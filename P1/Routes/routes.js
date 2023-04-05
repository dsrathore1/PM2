import express from "express";

const Router = express.Router();

Router.get("/getData", (req, res) => {
    res.status(200).json(
        {
            Employees: [
                {
                    id: 0,
                    name: "Vihaan"
                },
                {
                    id: 1,
                    name: "Garima"
                }
            ],
            Link: {
                goBack: "http://localhost:4040"
            }
        }
    );
});


export default Router;