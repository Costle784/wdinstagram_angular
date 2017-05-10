(function() {
  angular.module("posts")
  .controller("EditPostController", [
    "$stateParams",
    EditPostControllerFunction
  ]);

  function EditPostControllerFunction($stateParams) {
    this.post = post[$stateParams.id]
    this.updatePost = function() {
      let newPost = {img: this.img, author: this.author, body: this.body, completed: false}
      this.posts.push(newPost)
    }
  }
}());
