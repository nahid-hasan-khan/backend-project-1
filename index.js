// const express = require("express");
// const users = require("./MOCK_DATA.json");
// const fs = require("fs");

// const app = express();
// const PORT = 8000;
// //middleware plugin
// app.use(express.urlencoded({ extended: false }));
// //SSR Server
// app.get("/users", (req, res) => {
//   const html = `<ul>${users
//     .map((user) => `<li>${user.first_name}</li>`)
//     .join(" ")}</ul>`;
//   res.send(html);
// });

// //find without id  //For React and Mobile apps
// app.route("/api/users").get((req, res) => {
//   return res.json(users);
// });

// //find with id
// app
//   .route("/api/users/:id")

//   .get((req, res) => {
//     const id = Number(req.params.id);
//     console.log(req.params.id);

//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     //Edit the user with id
//     const body=req.body;
    
//     return res.json({ status: "Pending" });
//   })

//   .delete((req, res) => {
//     //delete the user with id
//     return res.json({ status: "Pending" });
//   });

// app.post("/api/users", (req, res) => {
//   //create new user
//   const body = req.body;
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.json({ status: "success", id: users.length });
//   });
// });

// app.listen(PORT, () => console.log(`Server Started at port:${PORT}`));




const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;
//middleware plugin
app.use(express.urlencoded({ extended: false }));
//SSR Server
app.get("/users", (req, res) => {
  const html = `<ul>${users
    .map((user) => `<li>${user.first_name}</li>`)
    .join(" ")}</ul>`;
  res.send(html);
});

//find without id  //For React and Mobile apps
app.route("/api/users").get((req, res) => {
  return res.json(users);
});

//find with id
app
  .route("/api/users/:id")

  .get((req, res) => {
    const id = Number(req.params.id);
    console.log(req.params.id);

    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit the user with id
    const body=req.body;
    
    return res.json({ status: "Pending" });
  })

  .delete((req, res) => {
    //delete the user with id
    return res.json({ status: "Pending" });
  });

app.post("/api/users", (req, res) => {
  //create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server Started at port:${PORT}`));


