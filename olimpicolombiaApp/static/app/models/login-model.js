(function() {
    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    var app = angular.module('app');

    app.factory('Login', function($resource, $window) {

        var loginResource = $resource('/api/login/loggedin');
        var facebookLoginResource = $resource('/api/login/facebook');
        $window.fbAsyncInit = function() {
            FB.init({
                appId      : '1650538868592829', //id para heroku:  273510376365830
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use graph api version 2.5
            });
            console.log("Inicializa la aplicacion");
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    facebookLogin();
                } else if (response.status === 'not_authorized') {
                    console.log("Please log into this app");
                } else {
                    console.log("Please log into Facebook");
                }
            });

        };
        function facebookLogin() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', {fields: 'name, email'}, function(response) {
                console.log('Successful login for: ' + response.name);
                new facebookLoginResource(response).$save();
            });
        }

        return {
            loggedIn: function () {
                return loginResource.get();
            }
        };
    });

})();