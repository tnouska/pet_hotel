petApp.service('PetAppService', ['$http','$mdToast','$mdDialog', function ($http,$mdToast,$mdDialog) {
    console.log('PetAppService Loaded.');
    const self = this;

    function showToast(textToDisplay) {
        $mdToast.show(
            $mdToast.simple() // build the toast
                .textContent(textToDisplay) // text to appear
                .hideDelay(3000) // 5 seconds
        );//end $mdToast.show
    }//end showToast function
    //local functions
    self.ownerListArray = {list: ''};
    self.petListArray = {list: ''};
    self.statusListArray = {list: ''};
    //creating objects to prevent 2way databinding issue
    self.getOwner = function () {
        $http.get('/dashboard').then(function (response) {
            self.ownerListArray.list = response.data;
        }).catch(function (error) {
            console.log('error in getOwner.get: ', error);
        });// end $http.get to /dashboard
    };//end getOwner function

    self.postOwner = function (newOwner) {
        $http.post('/dashboard', newOwner).then(function (response) {
            showToast(newOwner.first_name + ' added.');
            self.getOwner();
        }).catch(function (error) {
            console.log('error in postOwner.post: ', error);
        });//end $http.post to /dashboard
    };//end post owner function

    self.deleteOwner = function (owner) {
        ownerId = owner.id;
        $http.delete(`/dashboard/${ownerId}`).then(function (response) {
            showToast(owner.first_name + ' was removed.');
            self.getOwner();
        }).catch(function (error) {
            console.log('error in deleteOwner.delete: ',error);
            showToast('Owner was not removed');
        });//end $http.delete to /dashboard
    };//end deleteOwner function
//end /dashboard functions

    self.getHome = function (ownerId) {        
        if (ownerId !== undefined) {
            $http.get(`/home?id=${ownerId}`).then(function (response) {
            self.statusListArray.list = response.data;
        }).catch(function (error) {
            console.log('error in getHome.get: ', error);
        });//end $http.get to /home for searching by owner ID

        } else{
            $http.get('/home').then(function (response) {
                self.statusListArray.list = response.data;
            }).catch(function (error) {
                console.log('error in getHome.get else: ', error);
            });
        }
    };//end getHome function
    self.updateStatus = function (pet) {
        console.log('pet in updatestatus: ', pet);
        
        $http.put(`/home/${pet.id}`, pet).then(function (response) {
            showToast(`${pet.name} status changed.`);
            self.getHome();
        }).catch((function (error) {
            console.log('error in updateStatus: ', error);
            showToast(`${pet.name} status has not been updated.`);
        }))
    }
    //end /home functions
    self.postPic = function (pic) {
        $http.post('/manage/pics',pic).then(function (response) {
            showToast('Picture has been added.');
        }).catch(function (error) {
            console.log('error in postPic.post: ', error);
            
        });//end $http.post to /manage/pics
    };//end function postPic  

    self.showPicDialog = function (ev,pet) {
        let confirm = $mdDialog.prompt()
            .title('Would you like to add a picture of the animal?')
            .placeholder('URL of image of pet.')
            .ariaLabel('add picture of pet')
            .targetEvent(ev)
            .ok('Post Picture')
            .cancel('No')
            .clickOutsideToClose(true);
        $mdDialog.show(confirm).then(function (result) {
            newPic = {pic_url: ''};
            newPic.pic_url = result;
            newPic.pet_id = pet.id;
            newPic.owner_id = pet.owner_id;
            self.postPic(newPic);
            showToast('Picture added.');
        }, function () {
            showToast('Picture not added.');
        });
 
    };
    self.deletePet = function (pet) {
        petId = pet.id;
        $http.delete(`/manage/${petId}`).then(function (response) {
            showToast(pet.name + ' was removed.');
            self.getPets();
        }).catch(function (error) {
            console.log('error in deletePet.delete: ', error);
            showToast('Pet was not removed');
        });//end $http.delete to /manage
    };//end deletePet function

    self.getPets = function () {
        $http.get('/manage').then(function (response) {
            self.petListArray.list = response.data;
        }).catch(function (error) {
            console.log('error in getPets.get: ', error);
        });//end $http.get to /manage
    };//end getPets function

    self.postPets = function (newPet) {
        $http.post('/manage', newPet).then(function (response) {
            showToast(newPet.name+' added.');
            self.getPets();            
        }).catch(function (error) {
            console.log('error in postPets.post: ', error);
        });//end $http.post to /manage
    };//end postPet function
    //end /manage functions
}]);//end service