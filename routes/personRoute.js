const mongoose = require('mongoose');
const router = require('express').Router();
const person = require('../models/user');

router.get('/', async function (req, res) {
    try {
        const response = await person.find();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.send('error occured')
    }
})

router.get('/:workType', async function (req, res) {
    try {
        const response = await person.find({work:req.params.workType});
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.send('error occured')
    }
})

router.put('/:id', async function (req, res) {
    try {
        console.log("response");
        const personId = req.params.id; // Get the ID from the route parameter
        const updatedPersonData = req.body; // Get the updated data from the request body

        // Use `findByIdAndUpdate` with `{ new: true }` to return the updated document
        const response = await person.findByIdAndUpdate(personId, updatedPersonData, { new: true });
        if (!response) {
            // If no document is found, send a 404 error
            return res.status(404).json({ message: "Person not found" });
        }

        res.status(200).json(response); // Send the updated document as a JSON response
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send('An error occurred'); // Send a 500 error response
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const personId = req.params.id;  

        const response = await person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ message: "Person not found" });
        }

        res.status(200).json(response);  
    } catch (error) {
        console.error(error);  
        res.status(500).send('An error occurred'); 
    }
});


module.exports = router;