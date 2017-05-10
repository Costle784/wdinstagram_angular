(function() {
  angular.module("posts")
  .controller("PostShowController", [
    "$stateParams",
    PostShowControllerFunction
  ]);

  function PostShowControllerFunction($stateParams) {
      this.post = posts[$stateParams.id]
    }

}());
