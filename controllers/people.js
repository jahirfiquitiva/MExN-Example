const Person = require('./../models/person');

function findPeople(request, response) {
  const id = request.params.id;
  const filter = {};
  if (id && id.length > 0) {
    filter.doc = id;
  }

  Person.find(filter, (err, result) => {
    if (err) {
      return response.status(500).send({ error: err.toString() });
    }
    return response.send(result);
  });
}

// Arrow function
const createPerson = (request, response) => {
  const newPerson = new Person(request.body);
  newPerson.save((err, result) => {
    if (err) {
      return response.status(500).send({ error: err.toString() });
    }
    return response.send(result);
  });
};

const updatePerson = (request, response) => {
  Person.updateOne({ doc: request.params.doc }, request.body, (err, result) => {
    if (err) return response.status(500).send({ error: err.toString() });

    const ok = result.ok || 0;
    if (!ok) return response.status(500).send({ error: 'Error inesperado' });

    Person.find({ doc: request.body.doc || request.params.doc }, (err2, result2) => {
      if (err) {
        return response.status(500).send({ error: err2.toString() });
      } else {
        return response.send(result2[0] || { error: 'No existe' });
      }
    });
  });
};

const deletePerson = (request, response) => {
  Person.remove({ _id: request.params.id }, (err, result) => {
    if (err) return response.status(500).send({ error: err.toString() });
    const ok = result.ok || 0;
    if (!ok) return response.status(500).send({ error: 'Error inesperado' });
    return response.send(result);
  });
};

module.exports = {
  createPerson, // Create
  findPeople, // Read
  updatePerson, // Update
  deletePerson, // Delete
};

// module.exports.findPeople = findPeople;
// module.exports.createPerson = createPerson;
