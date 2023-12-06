const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const spiningTop = require("./models/spiningTopTable");


router.get("/", async (req, res) => {
    try {

        let allSpining = await spiningTop.find({})
        res.json(allSpining);
    }
    catch (err) {
        res.status(400).send("problem in getting all spining")

    }
}
)

router.get("/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send("invalid paramter id");
    try {
        let oneSpining = await spiningTop.findOne({ _id: req.params.id })

        if (!oneSpining)
            return res.status(404).send("no spining with such id");
        res.json(oneSpining);
    }
    catch (err) {
        res.status(400).send("problem im getting spining id " + req.params.id)

    }
}
)


router.post("/", async (req, res) => {
    if (!req.body.name || !req.body.price) {
        res.status(404);
        throw new Error("missing paramters")
        
    }
    let mySpining = new spiningTop({
        name: req.body.name
        , price: req.body.price
        ,color:req.body.color


    })
    try {
        await mySpining.save();
        res.status(201).json(mySpining);
    } catch (err) {
        res.status(400).send("cannot create this spining")
    }


})
module.exports = router;