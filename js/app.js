"use strict";

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
    "PostFactory",
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
    });
  }

  function PostFactoryFunction($resource){
    return $resource("http://localhost:3000/entries/:id");
  }
  function PostsIndexControllerFunction(PostFactory) {
    this.posts = PostFactory.query();
    }

  function NewPostControllerFunction(PostFactory){
    this.post = new PostFactory();
    this.create = function(){
    this.post.$save()
    }
  }
  function EditPostControllerFunction(PostFactory, $stateParams ){
    this.post = PostFactory.get({id:$stateParams.id});
    this.update = function(){
    this.post.$update({id:$stateParams.id})
    }
    this.destroy = function(){
      this.post.$delete({id: $stateParams.id});
    }
  }
  function PostShowControllerFunction(PostFactory, $stateParams){
    this.post = PostFactory.get({id: $stateParams.id});
  }
}());
