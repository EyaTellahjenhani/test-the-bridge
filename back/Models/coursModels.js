const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "the_bridge",
});

exports.find = async () => {
  const [results] = await db.execute("SELECT * FROM coure");
  if (results.length > 0) {
    return results;
  } else {
    return null;
  }
};

exports.create = async (title, image, price) => {
    const [results] = await db.execute(
        "INSERT INTO coure (title, image, price) VALUES (?, ?, ?)",
        [title, image, price]
    );
    if (results.affectedRows > 0) {
        return results;
    } else {
        return null;
    }
    };


    exports.update = async (
        title,
        image,
        price,
        id
      ) => {
        const [results] = await db.execute(
          "UPDATE coure SET  Title=?, Price=? WHERE id =?",
          [title, price, id]
        );
        if (results.affectedRows > 0) {
          const [imageRes] = await db.execute(
            "UPDATE images SET image=?  WHERE id =?",
            [image, id]
          );
          return imageRes;
        } else {
          return null;
        }
      };

      exports.remove = async (id) => {
        const [results] = await db.execute(
          "DELETE FROM coure WHERE id =?",
          [id]
        );
        if (results.affectedRows > 0) {
          return results;
        } else {
          return null;
        }
      };


module.exports = db;
