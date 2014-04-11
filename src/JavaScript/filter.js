app.filter('countryFilter', function(){
    return function(countries){
        countries.sort(function(country){
            return country.name;
        })
    }
});
app.filter('countryName', function(){
    return function(country){
        return country.name;
    }
})
