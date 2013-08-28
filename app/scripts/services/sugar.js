'use strict';

angular.module('dashv2App')
  .service('Sugar', function Sugar($http) {

    var username = 'admin',
      password = '183fd2706ed4e313636a59381073f92a',
      url = 'http://chase.epicom.com/service/v4_1/rest.php';

    this.buildParams = function() {
      return {
        user_auth: {
          user_name : username,
          password : password,
          encryption : 'PLAIN'
        },
        application: 'EpiDash'
      };
    };

    this.login = function() {
      var params = this.buildParams(),
        data = {
          method : 'login',
          input_type : 'JSON',
          response_type : 'JSON',
          rest_data : params
        };

      console.log(params);


      $http.post(url, data).success(function(data, status, headers, config) {
        console.log(data);
      });
    };

  });
