import express from "express";

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor",
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender",
    },
  ],
};

const app = express();
const port = 8000;

app.use(express.json());

const findUsersByNameAndJob = (name, job) => {
    return users["users_list"].filter((user) => user['name'] === name && user['job'] === job);
};

const findUserByName = (name) => {
    return users["users_list"].filter((user) => user['name'] === name);
};

const findUserById = (id) => {
    return users['users_list'].find((user => user['id'] === id));
};

const deleteUserById = (id) => {
    users["users_list"] = users["users_list"].filter((user) => user["id"] !== id);
};

const addUser = (user) => {
    users["users_list"].push(user);
    return user;
};

//Root API route

app.get("/", (req, res) => {
    res.send("Hello world!");
});

//Fetch all users or users by name or name and job

app.get("/users", (req,res) => {
    const name = req.query.name;
    const job = req.query.job;

    if(name != undefined){
        if (job !== undefined){
            let result = findUsersByNameAndJob(name, job);
            result = { users_list: result};
            res.status(200).send(result);
        }
        else{
            let result = findUserByName(name);
            result = { users_list: result };
            res.send(result)
        }
    }else{
        res.send(users);
    }
});

//Fetch user by ID

app.get("/users/:id", (req,res) => {
    const id = req.params['id'];
    let response = findUserById(id);

    if (response === undefined){
        res.status(404).send("Resource not found.");
    }else{
        res.send(response);
    }
});

//Add a new user

app.post("/users", (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.send("User successfully added!");
});

//Delete a user via ID

app.delete('/users/:id', (req,res) => {
    const id = req.params['id'];

    if (id === undefined){
        res.status(401).send("Could not remove this user");
    }else{
        const user = findUserById(id);
        deleteUserById(id);
        res.status(200).send(`The user: ${id} has been successfully deleted.`);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

