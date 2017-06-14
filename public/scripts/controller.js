// declare our intentions to use an Angular module app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) {
  var vm = this;
  vm.image = '';
  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(function(response) {
    console.log('back with:', response.data.data.image_url);
    vm.image = response.data.data.image_url;
  });

}); // end HttpController
