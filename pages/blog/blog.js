// Fetch the JSON file
fetch("posts.json")
  .then((response) => response.json())
  .then((posts) => {
    const postList = document.getElementById("post-list");

    // Generate list items for each post
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = post.file;
      link.textContent = `${post.title} - ${post.date}`;
      listItem.appendChild(link);
      postList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error loading posts:", error));
