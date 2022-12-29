import express from 'express';
import User from '../users/userModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import movieModel from '../movies/movieModel';
import { getMovie } from '../tmdb-api';



const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

  // register(Create)/Authenticate User
  router.post('/',asyncHandler( async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.status(401).json({success: false, msg: 'Please pass username and password.'});
      return next();
    }
    if (req.query.action === 'register') {
      await User.create(req.body);
      res.status(201).json({code: 201, msg: 'Successful created new user.'});
    } else {
      const user = await User.findByUserName(req.body.username);
        if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            // if user is found and password matches, create a token
            const token = jwt.sign(user.username, process.env.SECRET);
            // return the information including token as JSON
            res.status(200).json({success: true, token: 'BEARER ' + token});
          } else {
            res.status(401).json({code: 401,msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
  }));

 // Update a user
 router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});


// Add user favourites to db 
router.post('/add/:userName/favourites', asyncHandler(async (req, res) => {
 console.log(req.body.movie)
  
  const userName = req.params.userName;
  const user = await User.findByUserName(userName);

  await user.favourites.push(req.body.movie);
  await user.save(); 
  return res.status(201).json(user); 
  
  
}));

// get all user favourites from db 
  router.get('/:userName/favourites', asyncHandler( async (req, res) => {
    const userName = req.params.userName;
    const user = await User.findByUserName(userName).populate('favourites');
    console.log(user.favourites)
    res.status(200).json(user.favourites);
  }));
  
// delete favourite from db 
router.delete('/:userName/delete/favourites', asyncHandler( async (req, res) => {
  const movieid = req.body.movie.id;
  const userName = req.params.userName;
  const user = await User.findByUserName(userName);
  const index = user.favourites.indexOf(movieid)
  const ss = await user.favourites.splice(index, 1);
  console.log(ss)

  await user.save(); 
  return res.status(201).json(user); 
}));

export default router;