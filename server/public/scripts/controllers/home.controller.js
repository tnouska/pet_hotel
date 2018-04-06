petApp.controller('HomeController', ['PetAppService', '$mdDialog', '$mdToast', function (PetAppService, $mdDialog, $mdToast) {
    console.log('HomeController has loaded');
    let self = this;

    //functions
    self.getHome = PetAppService.getHome;

    //objects
    self.statusListArray = PetAppService.statusListArray;
    console.log(self.statusListArray);
    
    //called functions when controller loads
    self.getHome();
}]);