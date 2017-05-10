(function(){
  angular.module("wdinstagram", [
  "ui.router",
  "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("PostFactory", [
    "$resource",
    PostFactoryFunction
  ])
  .controller("PostsIndexController", [
    PostsIndexControllerFunction
  ])
  .controller("PostShowController", [
    "$stateParams",
    PostShowControllerFunction
  ])
  .controller("EditPostController", [
    "$stateParams",
    EditPostControllerFunction
  ])
  .controller("NewPostController", [
    "$stateParams",
    NewPostControllerFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("postIndex", {
      url: "/postindex",
      templateUrl: "js/ng-views/index.html",
      controller: "PostsIndexController",
      controllerAs: "vm"
    })
    .state("postShow", {
      url:"/postindex/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "PostShowController",
      controllerAs: "vm"
    })
    .state("editPost", {
      url:"/postindex/:id/edit",
      templateUrl: "js/ng-views/edit.html",
      controller: "EditPostController",
      controllerAs: "vm"
    })
    .state("newPost", {
    url: "/postindex/new",
    templateUrl: "js/ng-views/new.html",
    controller: "NewPostController",
    controllerAs: "vm"
    })
  }

  function PostFactoryFunction( $resource ){
    return $resource("http://localhost:3000/grumbles/:id", {}, {
        update: { method: "PUT" }
    });
  }

}());
