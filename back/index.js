const express = require("express");
const coursRouter = require("./Routers/coursRouter");
const app = express();
const cors = require('cors')
const cloudinary = require('cloudinary').v2;

app.use(express.json());


cloudinary.config({
    cloud_name: "ddmynkkvx",
    api_key: "249194221859348",
    api_secret: "03z840KjMPvS69qtngzFsjjz00M",
  });
  



app.use("/api/cours",coursRouter);
app.use(express.json());
app.use(cors({origin: '*'}))




const port = 1000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})