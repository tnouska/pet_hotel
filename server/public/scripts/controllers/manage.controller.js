petApp.controller('ManageController', ['PetAppService', '$mdDialog', '$mdToast', function (PetAppService, $mdDialog, $mdToast) {
    console.log('ManageController has loaded');
    let self = this;

    //functions
    self.postPets = PetAppService.postPets;
    self.getPets = PetAppService.getPets;

    //objects
    self.petListArray = PetAppService.petListArray;    
    
    //called functions when controller loads
    self.getPets();
}]);