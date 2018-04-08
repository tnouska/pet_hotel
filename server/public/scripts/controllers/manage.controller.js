petApp.controller('ManageController', ['PetAppService', '$mdDialog', '$mdToast', function (PetAppService, $mdDialog, $mdToast) {
    console.log('ManageController has loaded');
    let self = this;

    //functions
    self.postPets = PetAppService.postPets;
    self.getPets = PetAppService.getPets;
    self.deletePet = PetAppService.deletePet;
    self.getOwner = PetAppService.getOwner;
    self.showPicDialog = PetAppService.showPicDialog;
    //objects
    self.petListArray = PetAppService.petListArray;    
    self.ownerListArray = PetAppService.ownerListArray;
    //called functions when controller loads
    self.getPets();
    self.getOwner();
}]);