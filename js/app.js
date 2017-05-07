(function(){
  angular.module("wdinstagram", [])
    .controller("InstagramController", [
      InstagramControllerFunction
    ])

    function InstagramControllerFunction () {
      this.posts = [{
        img:'http://www.fillmurray.com/200/300',
        author: 'Bill Murray',
        body: 'Look at this awesome face'
      },{
        img:'https://www.placecage.com/200/300',
        author:'Nic Cage',
        body:"I'm the best"
      },{
        img: 'https://www.placecage.com/g/200/300',
        author:'Nic Cage',
        body: 'I look really stupid here'
      },{
        img: 'https://www.stevensegallery.com/200/300',
        author:'Steven Segal',
        body:'Take a look at me now!'
      },{
        img:'https://www.stevensegallery.com/g/200/300',
        author:'Steven Segal',
        body:'Boo!'
      }]
    }
})()    
