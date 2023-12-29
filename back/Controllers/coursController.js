const {
  getcours,
  addcoursModel,
  deletecoursModel,
  modifycoursModel,
  getAllcoursModel,
} = require("../Models/coursmodels");
const cloudinary = require("cloudinary").v2;

exports.getcoursById = async (req, res) => {
  try {
    const id = req.params.id;
    const cours = await getcours(id);
    if (cours) {
      res.status(200).json({
        cours: cours,
      });
    } else {
      res.status(401).json("Probleme de recupiration du cours");
    }
  } catch (error) {
    res.status(500).json("Erreur");
  }
};

exports.addcours = async (req, res) => {
  try {
    const { title, image, price } = req.body;
    const rzlt = await cloudinary.uploader.upload(image, {
      folder: "Cours",
    });
    console.log(rzlt.secure_url);

    if (!title || !image || !price) {
      res.status(400).json("Les Champs sont obligatoire");
    } else {
      const cours = await addcoursModel(title, rzlt.secure_url, price);
      if (cours.affectedRows > 0) {
        res.status(200).json("cours ajouté avec succés");
      } else {
        res.status(400).json("Erreur lors de l'ajout du cours");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletecours = async (req, res) => {
  try {
    const id = req.params.id;
    const cours = await deletecoursModel(id);
    if (cours.affectedRows > 0) {
      res.status(200).json("cours supprimé avec succés");
    } else {
      res.status(400).json("Erreur lors de la suppression du cours");
    }
  } catch (error) {
    res.status(500).json("Erreur");
  }
};

exports.modifyCoursById = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, image, price } = req.body;
    const rzlt = await cloudinary.uploader.upload(image, {
      folder: "Cours",
    });
    console.log(rzlt.secure_url);
    const cours = await modifycoursModel(id, title, rzlt.secure_url, price);
    if (cours.affectedRows > 0) {
      res.status(200).json("cours modifié avec succés");
    } else {
      res.status(400).json("Erreur lors de la modification du cours");
    }
  } catch (error) {
    res.status(500).json("Erreur");
  }
};


exports.getAllcours = async (req, res) => {
    try {
        const cours = await getAllcoursModel();
        if (cours) {
        res.status(200).json({
            cours: cours,
        });
        } else {
        res.status(401).json("Probleme de recupiration du cours");
        }
    } catch (error) {
        res.status(500).json("Erreur");
    }
    };