import app from "./app.js";
import connectTodb from "./db/index.js";


const port = process.env.PORT || 5000;


connectTodb()
  .then(
    app.listen(port, () => {
      console.log(`\nApp is running at port ${port}`);
    })
  )
  .catch((err) => {
    console.log("Mongodb Conection Failed !!", err);
  });
