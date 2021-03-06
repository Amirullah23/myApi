const express = require("express");
const cros = require("cors");
const index = require("./routes/index");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 9000;
app.use(cros());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;

// //THIS GET API
// app.get('/lol', (req, res) => res.send({
//     name: 'amir',
//     address: "jkt"
// }))
// app.get('/lol/:id', (req, res) => {console.log(req.params.id)
//     res.send({name: "amir", data_req: `${req.params.id}`})
// })

// ///THIS POST API
// app.post('/', (req, res) => {
//     res.send({
//         msg: "data inputed",
//         member: {
//             name: req.body.name,
//             address: req.body.address
//         },
//         guest: {
//             name: req.body.name,
//             address: req.body.address
//         }
//     })
// } )

// app.post('/member', (req, res) => {
//     res.send({
//         msg: "data inputed member",
//         member: {
//             name: req.body.name,
//             address: req.body.address
//         },
//     })
// } )

// app.post('/guest', (req, res) => {
//     res.send({
//         msg: "data inputed guest",
//         guest: {
//             name: req.body.name,
//             address: req.body.address
//         },
//     })
// } )
// app.post('/datasec', (req, res) => res.send({name: "amir",name: "amirullahpost"}))

// app.get('/', (req, res) => res.send({name: "amir",name: "amirullah"}))

// app.put('/', (req, res) => res.send({name: "amir",name: "amirullahput"}))
// app.delete('/', (req, res) => res.send({name: "amir",name: "amirullahdell"}))
// app.patch('/', (req, res) => res.send({name: "amir",name: "amirullahpatch"}))
