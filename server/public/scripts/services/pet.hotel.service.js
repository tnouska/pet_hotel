petApp.service('PetAppService', ['$http','$mdToast', function ($http,$mdToast) {
    console.log('PetAppService Loaded.');
    const self = this;
    
    self.ownerListArray = {list: ''};
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
            console.log('Owner Added.');
            self.getOwner();
        }).catch(function (error) {
            console.log('error in postOwner.post: ', error);
        });//end $http.post to /dashboard
    };//end post owner function
//end /dashboard functions
}]);