petApp.controller('DashboardController', ['PetAppService','$mdDialog','$mdToast',function (PetAppService, $mdDialog, $mdToast) {
    console.log('DashboardController has loaded');
    let self = this;

    //dashboard functions
    self.getOwner = PetAppService.getOwner;
    self.postOwner = PetAppService.postOwner;

    //dashboard objects
    self.ownerListArray = PetAppService.ownerListArray;

    //called functions when controller loads
    self.getOwner();
}]);