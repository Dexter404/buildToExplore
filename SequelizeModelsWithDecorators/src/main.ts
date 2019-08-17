import { sequelize, Player, Post, User, Team } from './models';
import { Coach } from './models/Coach';
import { Actor } from './models/Actor';
import { Movie } from './models/Movie';

//sequelize.sync()
sequelize.sync({ force: true })
  .then(() => sequelize.authenticate())
  .catch((err: any) => {
    console.error('Unable to sync models with the database:', err);
    process.exit(1);
  })
  .then(() => {
    console.log('Connection has been established successfully.');
    testTeamPlayerSystem();
    testPostCommentSystem();
    testMovieActorSystem();
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });

async function testTeamPlayerSystem() {
  let coach: Coach = new Coach({ name: 'John' });
  await coach.save();

  let team: Team = new Team({ name: 'Liverpool' });
  await team.save();

  try {
    await coach.$set("team", team);
  } catch (e) { console.log(e); }

  let player1: Player = new Player({ name: 'Robin' });
  await player1.save();

  let player2: Player = new Player({ name: 'Jeremy' });
  await player2.save();

  try {
    await player1.$set("team", team);
    await player2.$set("team", team);
    // await team.$add("players", player1);
    // await team.$add("players", player2);
  } catch (e) { console.log(e); }
}

async function testPostCommentSystem() {
  let id: number;
  let user: User;
  await User.create({
    name: "Adam",
    email: "adam@gmail.com",
    password: "jdgcgcuyok",
    username: "adam123"
  }).then((newUser: User) => {
    id = newUser.id;
    user = newUser;
    console.log(`User created with ID #${newUser.id}`);
  }).catch((e: Error) => console.log(e));

  await User.findByPk(id).then((ourUser: User) => {
    console.log(`User's name is : ${ourUser.name}`);
  });

  await Post.create({
    title: "Post #1",
    content: "Content for post #1 goes here..",
    userId: id
  }).then((newPost: Post) => {
    return newPost.$get("postedBy");
  }).then((postedBy: User) => {
    console.log(`New post posted by ${postedBy.name}`);
  }).catch((e: Error) => console.log(e));

  await user.$create('post', {
    title: 'Post #2',
    content: "Content for post #2 goes here.."
  });

  User.findByPk(1, {
    include: [User.associations.posts],
    rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
  }).then((ourUser) => {
    console.log("User posts are..");
    ourUser.posts!.forEach((post: Post) => {
      // Note the `!` null assertion since TS can't know if we included
      // the model or not
      console.log(`${post.title} : ${post.content}`);
    })
  });
}

async function testMovieActorSystem() {
  let actor1 = await new Actor({
    name: "Kit Harington",
    age: 30
  }).save();
  let actor2 = await new Actor({
    name: "Sophie Turner",
    age: 24
  }).save();
  let movie1 = await new Movie({
    title: "X-Men",
    year: 2009
  }).save();
  let movie2 = await new Movie({
    title: "Game of Thrones",
    year: 2011
  }).save();

  await actor1.$add('movies', movie1);
  await actor2.$add('movies', movie1);
  await actor2.$add('movies', movie2);

  Movie.scope('cast').findAll().then((movies) => {
    console.log(JSON.stringify(movies, null, 4));
  }).catch((e: Error) => console.log(e));
}