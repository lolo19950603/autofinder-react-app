const Car = require('../../models/car');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const cars = await Car.find({}).sort('title').populate('filter').exec();
  // re-sort based upon the sortOrder of the categories
  cars.sort((a, b) => a.filter.sortOrder - b.filter.sortOrder);
  res.json(cars);
}

async function show(req, res) {
  const car = await Car.findById(req.params.id);
  res.json(car);
}