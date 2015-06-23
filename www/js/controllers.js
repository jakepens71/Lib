angular.module('starter.controllers', [])

.factory('BooksWanted', function() {
  return {
    all: function() {
      var booksWantedString = window.localStorage['booksWanted'];
      if(booksWantedString) {
        return angular.fromJson(booksWantedString);
      }
      return [];
    },
    save: function(booksWanted) {
      window.localStorage['booksWanted'] = angular.toJson(projects);
    },
    save: function(booksWanted) {
      window.localStorage['booksWanted'] = angular.toJson(projects);
    },
    newProject: function(booksWantedTitle) {
      // Add a new project
      return {
        title: booksWantedTitle,
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('booksWantedCtrl', function($scope, $timeout, $ionicModal, BooksWanted, $ionicSideMenuDelegate) {
  $scope.booksWanted = [];

  //Create and Load the Modal
  $ionicModal.fromTemplateUrl('newWantedBook.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.createNewWantedBook = function(bookWanted) {
    $scope.booksWanted.push({
      title: bookWanted.title
    });
    $scope.taskModal.hide();
    bookWanted.title = "";
  }

  $scope.newWantedBook = function()
  {
    $scope.taskModal.show();
  }

  $scope.closeNewWantedBook = function() {
    $scope.taskModal.hide();
  }

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});