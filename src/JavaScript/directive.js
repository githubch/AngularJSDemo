app.directive("match", function () {
    return {
        require: "ngModel",
        restrict: 'A',
        scope: {
            firstPassword: '=match'
        },
        link: function (scope, element, attrs, ctrl) {
            scope.$watch(function () {
                return [scope.firstPassword, ctrl.$viewValue];
            }, function (value) {
                if (value) {
                    if (!ctrl.$viewValue)
                        return;
                    ctrl.$setValidity("match", value[0] === value[1])
                }
            });
        }
    }
});

app.directive("email", function(){
    return {
        replace:true,
        template: '<input type="text"/>',
        restrict:'E',
        require:"ngModel",
        link: function(scope, element, attrs, ngModel){
            element.bind('change', function(){
                scope.$apply(setModelValue);
            });

            setModelValue();

            function setModelValue(){
                ngModel.$setViewValue(element.val());
            }
 
            ngModel.$parsers.push(function(value){
                if(!value || value==="")
                {
                    ngModel.$setValidity('email', true);
                    return;
                }
                var isValid = false;
                for(var i = 0;i < value.length;i++)
                {
                    if(value[i] === '@')
                    {
                        isValid = true;
                        break;
                    }
                }
                ngModel.$setValidity('email',isValid);
                if(isValid) {
                    return value;
                }
            });
        }
    }
});