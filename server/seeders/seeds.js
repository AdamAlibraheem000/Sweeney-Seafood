const faker = require('faker');

const db = require('../config/connection');
const { Comment, User, Feature } = require('../models');

db.once('open', async () => {
  await Comment.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }
  console.log(userData)
  const createdUsers = await User.collection.insertMany(userData);
  console.log(createdUsers);

  // create comments
  let createdComments = [];
  for (let i = 0; i < 100; i += 1) {
    const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const { username, _id: userId } = userData[randomUserIndex];

    const createdComment = await Comment.create({ commentText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { comments: createdComment._id } }
    );

    createdComments.push(createdComment);
  }

  // create replies
  for (let i = 0; i < 100; i += 1) {
    const replyBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const { username } = userData[randomUserIndex];

    const randomCommentIndex = Math.floor(Math.random() * createdComments.length);
    const { _id: commentId } = createdComments[randomCommentIndex];

    await Comment.updateOne(
      { _id: commentId },
      { $push: { replies: { replyBody, username } } },
      { runValidators: true }
    );
  }

  const features = await Feature.insertMany([
    {
      title: 'Salmon Flatbreads',
      description: 'Four Mini Smoked Salmon Flatbreads',
      price: 11
    },
    {
      title: 'Escargot',
      description: '6 Imported, Large, French Double Helix Snails baked in house-made Sherry, Garlic Butter served with Warm French Bread',
      price: 9
    },
    {
      title: 'Broiled Grouper',
      description: 'topped with Citrus, Cilantro, Cracker Crust served with Medley of Fried Potatoes and a Salad',
      price: 35
    },
    {
      title: 'Seafood Newburg Pasta ',
      description: 'Fresh Sautéed Nantucket Island Bay Scallops, Wild Shrimp, Fresh Asparagus, Mushrooms and Cavatappi Macaroni tossed in House-Made Lobster Tomato Cream Sauce and Salad',
      price: 28
    },
    {
      title: 'Bailey’s Chocolate Poke Cake',
      description: 'Dense Moist Chocolate Cake topped with Bailey’s Irish Cream frosting drizzled with Chocolate',
      price: 7
    },
    {
      title: 'NY Cheesecake',
      description: 'House-made New York Cheesecake with House-made 4-Berry Sauce',
      price: 7
    }
  ]);

  console.log('Feature Menu Seeded!')

  console.log('all done!');
  process.exit(0);
});


