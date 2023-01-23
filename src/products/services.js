const { ObjectId } = require("mongodb");

const { Database } = require("../database");
const { ProductsUtils } = require('./utils');

const COLLECTION = "products";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: ObjectId(id) });
};

const create = async (products) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(products);
  return result.insertedId;
};

//update
//delete

const generateReport = async (name, res) => {
  let products = await getAll();
  ProductsUtils.excelGenerator(products, name, res);
};

module.exports.ProductsService = {
  getAll,
  getById,
  create,
  generateReport,
};