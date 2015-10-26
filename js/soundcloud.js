'use strict';

//Joel's access key

var BASE_URL = 'https://api.soundcloud.com';
var CLIENT_ID = 'd2de86b6f2a8c564b00e1f78421fab9d'; //application ID for requests

var myApp = angular.module('SoundCloudApp', [])
  .controller('MusicCtrl', ['$scope', '$http',function($scope,$http) {

      //api.soundcloud.com/tracks?q=spongebob
      $scope.getTracks = function () {

      var url = BASE_URL + '/tracks' + '?q=' + $scope.query + '&client_id=' + CLIENT_ID;

      $http.get(url).then(function (response) {
        $scope.tracks = response.data;
      });
    }
}])
