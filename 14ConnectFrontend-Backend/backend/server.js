import express from "express"; // modulejs syntax

/* there are two ways to import JS files
  - common JS
  - module JS
*/

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of five jokes
const jokes = [
  {
    id: 1,
    title: "The Programmer's Dilemma",
    content:
      "Why do programmers prefer dark mode? Because light attracts bugs!",
  },
  {
    id: 2,
    title: "The Cheesecake Joke",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 3,
    title: "Math Humor",
    content:
      "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  },
  {
    id: 4,
    title: "The Tech Support Classic",
    content: "Why did the computer keep freezing? It left its Windows open!",
  },
  {
    id: 5,
    title: "Dad Joke 101",
    content: "I’m reading a book on anti-gravity. It’s impossible to put down!",
  },
];
app.get("/api/v1/jokes", (req, res) => {
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
