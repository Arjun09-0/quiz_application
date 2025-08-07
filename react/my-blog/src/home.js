import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog 1", body: "Body of Blog 1", author: "Monkey D. Luffy", id: 1 },
    { title: "Blog 2", body: "Body of Blog 2", author: "Roronoa Zoro", id: 2 },
    { title: "Blog 3", body: "Body of Blog 3", author: "Nami", id: 3 },
    { title: "Blog 4", body: "Body of Blog 4", author: "Usopp", id: 4 },
    { title: "Blog 5", body: "Body of Blog 5", author: "Sanji", id: 5 },
    { title: "Blog 6", body: "Body of Blog 6", author: "Tony Tony Chopper", id: 6 },
    { title: "Blog 7", body: "Body of Blog 7", author: "Nico Robin", id: 7 },
    { title: "Blog 8", body: "Body of Blog 8", author: "Franky", id: 8 },
    { title: "Blog 9", body: "Body of Blog 9", author: "Brook", id: 9 },
    { title: "Blog 10", body: "Body of Blog 10", author: "Jinbe", id: 10 }
  ]);
  return (
    <div className="home">
      <h2>Straw Hat Pirates Crew</h2>
      <p>
        The Straw Hat Pirates are the main crew in One Piece, led by Monkey D. Luffy.
        Each member brings unique skills and dreams to the team, traveling together in search of the legendary treasure, One Piece.
        The crew includes swordsmen, navigators, snipers, cooks, doctors, archaeologists, shipwrights, musicians, and helmsmen.
        Their bond and adventures make them one of the most iconic crews in anime history!
      </p>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;