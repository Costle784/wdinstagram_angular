(function(){
  angular.module("wdinstagram", [
  "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("postIndex", {
      url: "/postindex",
      templateUrl: "js/posts/index.html"
    })
    .state("postShow", {
      url:"/postindex/:id",
      templateUrl: "js/posts/show.html"
    });
  }
})();


    // function InstagramControllerFunction ($stateParams) {
    //   console.log($stateParams);
    //   this.bg = $stateParams.color
    //   this.views = ['index', 'id','green']
    //   this.turn = function(color){
    //     $state.go("color",{color: color})
    //     this.bg = color
    //   }
    //   this.posts = [{
    //     img:'http://www.fillmurray.com/200/300',
    //     author: 'Bill Murray',
    //     body: 'Look at this awesome face'
    //   },{
    //     img:'https://www.placecage.com/200/300',
    //     author:'Nic Cage',
    //     body:"I'm the best"
    //   },{
    //     img: 'https://www.placecage.com/g/200/300',
    //     author:'Nic Cage',
    //     body: 'I look really stupid here'
    //   },{
    //     img: 'https://www.stevensegallery.com/200/300',
    //     author:'Steven Segal',
    //     body:'Take a look at me now!'
    //   },{
    //     img:'https://www.stevensegallery.com/g/200/300',
    //     author:'Steven Segal',
    //     body:'Boo!'
    //   }],
    //   this.addPost = function() {
    //     let newPost = {img: this.img, author: this.author, body: this.body, completed: false}
    //     this.posts.push(newPost)
    //   },

    // }
