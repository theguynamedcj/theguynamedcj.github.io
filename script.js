fetch("https://api.github.com/users/theguynamedcj")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".image-container img").src = data.avatar_url;
  })
  .catch((err) => console.error("Error fetching GitHub PFP:", err));
