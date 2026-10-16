function getUserDetails(username, onSuccess, onFailure) {
  setTimeout(() => {
    if (username.includes("Abc")) {
      onSuccess({
        userid: "3232323",
        name: "Abc XYZ",
      });
    } else {
      onFailure("User not Found");
    }
  }, 3000);
}

function getPost(userid, onSuccess, onFailure) {
  setTimeout(() => {
    if (userid) {
      onSuccess({
        caption: "Going to Paris",
        postid: 3244343,
      });
    } else {
      onFailure("Post not found");
    }
  }, 3000);
}
function getComment(postid, onSuccess, onFailure) {
  setTimeout(() => {
    if (postid) {
      onSuccess({
        comment: "Woow",
        commnetid: "3232434434d3",
      });
    } else {
      onFailure("Commnet not available");
    }
  }, 3000);
}

console.log("Start");
getUserDetails(
  "Abc",
  (user) => {
    console.log("User", user);
    getPost(
      user.userid,
      (post) => {
        console.log("Post", post);
        getComment(
          post.postid,
          (comment) => {
            console.log("Comment", comment);
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log("Error", err);
      },
    );
  },
  (err) => {
    console.log("Error", err);
  },
);
