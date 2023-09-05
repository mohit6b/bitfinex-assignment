const Joi = require('joi');
const express = require('express');
const app = express();


const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});


function validateUser(req, res, next) {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.body = value; // Replace req.body with the validated data
  next();
}


app.use(express.json());

app.post('/api/users', validateUser, (req, res) => {
  // req.body now contains the validated data
  const newUser = req.body;
  // Process the data and create a new user
  res.status(201).json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

