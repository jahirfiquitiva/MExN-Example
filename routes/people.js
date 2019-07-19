const express = require('express');
const controller = require('./../controllers/people');

const router = express.Router();

router.get('/', (request, response) => {
  controller.findPeople(request, response);
});

router.get('/:id', controller.findPeople);

router.post('/', controller.createPerson);

router.put('/:doc', controller.updatePerson);

router.delete('/:id', controller.deletePerson);

module.exports = router;
