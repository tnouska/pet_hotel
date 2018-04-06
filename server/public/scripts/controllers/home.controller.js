petApp.controller('HomeController', ['PetAppService', '$mdDialog', '$mdToast', function (PetAppService, $mdDialog, $mdToast) {
    console.log('HomeController has loaded');
    let self = this;

    //functions
    self.getHome = PetAppService.getHome;
    self.getOwner = PetAppService.getOwner;

    //objects
    self.statusListArray = PetAppService.statusListArray;
    self.ownerListArray = PetAppService.ownerListArray;
    
    //called functions when controller loads
    self.getHome();
    self.getOwner();
    
    
}]);