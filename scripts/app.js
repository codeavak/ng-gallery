var app=angular.module('myApp',[]);
app.controller('myController',myController);

 
function myController(){
    this.selectedName='0';
    this.movies= [
        {
          Name: "building",
          Poster: "img/building.jpg"
        },
        {
          Name: "camera",
          Poster: "img/camera.jpg"
        },
        {
          Name: "dog",
          Poster: "img/dog.jpg"
        },
        {
          Name: "island",
          Poster: "img/island.jpg"
        },
        {
          Name: "rails",
Poster:'img/rails.jpg'        },
        {
          Name: "swim",
          Poster: "img/swim.jpg"
        },
        {
          Name: "umbrella",
          Poster: "img/umbrella.jpg"
        },
        {
          Name: "ship",
          Poster: "img/ship.jpg"
        }]


        this.checkThemeContent = function (index) {
            this.selectedName = index;
            // window.alert('hello')
        } 
}