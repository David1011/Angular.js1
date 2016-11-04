var member = angular.module('member', ['ngRoute'])
		.directive('validpassword',function(){
			return {
				require: 'ngModel',
				link: function(scope, elm, attrs, ctrl){
					ctrl.$parsers.unshift(function(viewValue){
						if(viewValue == $("[name=pwd]").val()){
							ctrl.$setValidity("validPassword", true);
						}else{
							ctrl.$setValidity("validPassword", false);
						}
					});
				}
			}
	});
function registerCtrl($scope, $routeParams){
	}

function initScopeValue($scope, nameJson, value, changeValue){
	var createFun = function(valueName){
		return function(newValue, oldValue, $scope){
		 	if(newValue){
		 		$scope[valueName] = changeValue;
		 	}else{
				$scope[valueName] = value;
		 	}
		};
	}
			

	for(var item in nameJson){
		$scope.$watch(item, createFun(nameJson[item])); 
	}
}