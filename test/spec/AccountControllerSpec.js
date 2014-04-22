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

    it("should default country equals 'Select your country'", function(){
        expect(scope.country).toEqual("Select your country");
        expect("1").toEqual("2");
    })
});