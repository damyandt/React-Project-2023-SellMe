export const responceDataStructure = (responce, id) => {

  let isLiked = false

  const users = Object.values(responce);
  const ids = Object.keys(responce);

  for (let i = 0; i < ids.length; i++) {
    if (users[i] === id) {
      isLiked = true;
    }
  }

  return isLiked;
}


export const getCommentId = (responce, username) => {

  const users = Object.values(responce);
  const ids = Object.keys(responce);
  let usernameIndex = 0;
  for (let i = 0; i < ids.length; i++) {
    if (users[i] === username) {
      usernameIndex = i
    }
  }

  const commentId = ids[usernameIndex];

  return commentId;
}

