petApp.service('PetAppService', ['$http','$mdToast', function ($http,$mdToast) {
    console.log('PetAppService Loaded.');
    const self = this;

    function showToast(textToDisplay) {
        $mdToast.show(
            $mdToast.simple() // build the toast
                .textContent(textToDisplay) // text to appear
                .hideDelay(3000) // 5 seconds
        );
    }
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
            showToast(newOwner.first_name + 'added.');
            self.getOwner();
        }).catch(function (error) {
            console.log('error in postOwner.post: ', error);
        });//end $http.post to /dashboard
    };//end post owner function

    self.deleteOwner = function (owner) {
        ownerId = owner.id;
        $http.delete(`/dashboard/${ownerId}`).then(function (response) {
            showToast(owner.first_name + 'was removed.');
            self.getOwner();
        }).catch(function (error) {
            console.log('error in deleteOwner.delete: ',error);
            showToast('Owner was not removed');
        });//end $http.delete to /dashboard
    };//end deleteOwner function
//end /dashboard functions

    self.getHome = function () {
        $http.get('/home').then(function (response) {
            self.statusListArray.list = response.data;
        }).catch(function (error) {
            console.log('error in getHome.get: ', error);
        });//end $http.get to /home
    };//end getHome function

    //end /home functions

    self.getPets = function () {
        $http.get('/manage').then(function (response) {
            self.petListArray.list = response.data;
        }).catch(function (error) {
            console.log('error in getPets.get: ', error);
        });//end $http.get to /manage
    };//end getPets function

    self.postPets = function (newPet) {
        $http.post('/manage', newPet).then(function (response) {
            showToast(newPet.name+'added.');
            self.getPets();            
        }).catch(function (error) {
            console.log('error in postPets.post: ', error);
        });//end $http.post to /manage
    };//end postPet function
    //end /manage functions
}]);//end service