(function() {


    var app = angular.module('app');

    app.factory('Login', function($resource, $window, $http, $route) {
        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        var listeners = [];
        var user = null;
        var accessToken=null;
        var userId=null;
        function getAccessToken() {
            return accessToken;
        }
        function getUserId() {
            return userId;
        }
        var loginUrl = '/api/login/loggedin';
        var facebookLoginUrl = '/api/login/facebook';
        $window.fbAsyncInit = function() {
            FB.init({
                appId      : '273510376365830', //id para heroku:  273510376365830
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use graph api version 2.5
            });
            console.log("Inicializa la aplicacion");
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    console.log(response);
                    accessToken=response.authResponse.accessToken;
                    userId=response.authResponse.userID;
                    this.accessToken=response.authResponse.accessToken;
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
                $http.post(facebookLoginUrl, response).then(function (resp) {
                    console.log("Response: ", resp);
                    notify(resp.data)
                });
            });
        }
        function loggedIn() {
            return loginResource.get();
        }

        function watchUser (callback) {
            listeners.push(callback)
            if(user)
                callback(user)
            else
                refresh();
        }
        function refresh (){
            $http.get(loginUrl).then(function (resp) {
                console.log("usuario", resp.data);
                notify(resp.data)

            }, function (resp) {
                facebookLogin();
            })
        }
        function notify(user) {
            listeners.forEach(function (callback) {
                callback(user)
            })
        }
        return {
            loggedIn: loggedIn,
            facebookLogin: facebookLogin,
            watchUser: watchUser,
            accessToken: getAccessToken,
            userId: getUserId
        };
    });

})();