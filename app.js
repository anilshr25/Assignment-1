(function () {
	'use strict';
	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.name = "Pizza,HamBurger,ApplePie";
		$scope.none = "";
		$scope.enjoy = "";
		$scope.toomuch = "";

		$scope.submit = function (){		
			if ($scope.name !== "") {
				var count = 0;
				var result = $scope.name.split(',');
				for(var i = 0;i<=result.length;i++){
					if(result[i] == ""){
						count++;
					}
				}
				if(count == 0){
					if (result.length <= 3) {
						$scope.enjoy = "Enjoy!";
						$scope.none = "";
						$scope.toomuch = "";
					} else {
						$scope.toomuch = "Too Much";
						$scope.none = "";
						$scope.enjoy = "";
					}
				}else {
					$scope.none = "Please Check Your Enter Data !!!";
					$scope.enjoy = "";
					$scope.toomuch = "";
				}
			} else {
				$scope.none = "Please Enter Data First !!!";
				$scope.enjoy = "";
				$scope.toomuch = "";
			}
		};
	};
})();