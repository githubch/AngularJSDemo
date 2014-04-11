describe("AccountControllerTest", function(){
    var scope;
    var countries = [{'name':'UK'}];
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, $httpBackend, $rootScope){
        scope = $rootScope.$new();
        $httpBackend.whenGET(/data/).respond(countries);
        $controller('AccountController', {
            $scope:scope
        });
        $httpBackend.flush();
    }));

    it("", function(){
        expect(scope.country).toEqual("Select your country");
    })
});