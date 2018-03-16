const express = require('express'); 
const router = express.Router();

const app = express(); 

const blogPostsRouter = require('/blogPostsRouter');

app.use(morgan('common'));
app.use(express.static('public')); 

app.use('/blogPostsRouter', blogPostsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

