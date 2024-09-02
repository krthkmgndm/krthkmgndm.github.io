// Fetch the JSON file
fetch("posts.json")
  .then((response) => response.json())
  .then((posts) => {
    const postList = document.getElementById("post-list");

    // Generate list items for each post
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      const span = document.createElement("span");
      link.href = post.file;
      link.textContent = `${post.title}`;
      span.textContent = `${post.date}`;
      listItem.appendChild(link);
      postList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error loading posts:", error));

function dateTo(str_date) {
  arr_date = str_date.split("-");
  months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[arr_date[1]]+" "+;
}
