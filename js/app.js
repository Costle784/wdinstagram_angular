(function(){
  angular.module("wdinstagram", [
  "ui.router",
  "posts"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("postIndex", {
      url: "/postindex",
      templateUrl: "js/posts/index.html",
      controller: "PostsIndexController",
      controllerAs: "PostsIndexVM"
    })
    .state("postShow", {
      url:"/postindex/:id",
      templateUrl: "js/posts/show.html"
    });
  }
}());





      
