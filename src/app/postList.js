const postsList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      //console.log(doc);
      const post = doc.data();
      const li = `
      <li class="list-group-item list group-item-action list-group-item-dark">
      <h5>${post.title}</h5>
      <p>${post.content}</p>
      </li>`
      html += li;

    })
    postsList.innerHTML = html; 

    // console.log('loop posts');
    //console.log(postsList)
  } else {
    //console.log('no posts');
    postsList.innerHTML = "<h1>Login to see posts</h1>";
  }
}