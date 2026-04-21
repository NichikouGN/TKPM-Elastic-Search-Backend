exports.seed = async function (knex) {
  await knex("books").del();

  await knex("books").insert([
    {
      title: "1984",
      author: "George Orwell",
      content: "A dystopian society ruled by surveillance, propaganda, and control over truth.",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      content:
        "A futuristic world where humans are engineered and controlled through pleasure and conditioning.",
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      content: "Books are banned and burned in a society driven by shallow entertainment.",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      content: "A story of wealth, love, and illusion in the roaring twenties.",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      content: "A powerful story about justice, race, and morality in the American South.",
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      content: "A sailor's obsession with hunting a giant white whale.",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      content: "A teenager struggles with identity, alienation, and growing up.",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      content:
        "A fantasy adventure about Bilbo Baggins and his journey to reclaim treasure from a dragon.",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      content: "An epic journey to destroy a powerful ring and defeat darkness.",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      content: "A young wizard discovers his magical heritage and attends a school of witchcraft.",
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      content: "The story of a gifted young man who grows to become a legendary figure.",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      content:
        "A desert planet, political intrigue, and a battle for control over a powerful resource.",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      content: "A journey of self-discovery and following one's dreams.",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      content: "A psychological exploration of guilt, morality, and redemption.",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      content: "A poetic tale about love, loneliness, and human nature.",
    },
  ]);
};
