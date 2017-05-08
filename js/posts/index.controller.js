(function() {
  angular.module("posts")
  .controller("PostsIndexController", [
    PostsIndexControllerFunction
  ]);

  function PostsIndexControllerFunction() {
    this.posts = posts;
    this.addPost = function() {
      let newPost = {img: this.img, author: this.author, body: this.body, completed: false}
      this.posts.push(newPost)
    }
  }
}());
