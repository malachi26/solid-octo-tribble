angular.module('home', [])
    .controller('homeCtrl',['$scope','$http', function ($scope, $http) {
        var vm = $scope;
        vm.k = [0, 1, 2, 3, 4, 5, 6, 7];

        vm.phones = [
            {
                'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'
            },
            {
                'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.'
            },
            {
                'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.'
            }
        ];


        $scope.alert = function () {
            alert("WOW");
        }
    }]);