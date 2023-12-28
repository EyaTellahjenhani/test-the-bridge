const { find, create, update, remove } = require("../Models/coursModels");
const cloudinary = require('cloudinary').v2;

exports.readCours = async (req, res) => {
  try {
    const cours = await find();
    res.status(200).json({ cours });
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.createCours = async (req, res) => {
  const { title, price, image } = req.body;
  const rzlt = await cloudinary.uploader.upload(image, {
    folder: "Cours",
  });
  try {
    const cours = await create(title, rzlt.secure_url, price);
    res.status(200).json({ cours });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateCours = async (req, res) => {
  const { title, image, price } = req.body;
  const { id } = req.params;
  if (title && image && price) {
    try {
      const results = await update(title, image, price, id);
      if (results) {
        res.status(200).json("Update successfully");
      } else {
        res.status(401).json("Failed to update");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Error during update");
    }
  } else {
    res.json("Please enter all fields");
  }
};

exports.deleteCours = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await remove(id);
    if (results) {
      res.json("Delete successfully");
    } else {
      res.json("Failed to delete");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Error during delete");
  }
};
