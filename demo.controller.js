angular.module('demoApp', ['opcCroppie'])
	.controller('DemoController', ['$scope', function ($scope) {
		var boundary = { width: 350, height: 350 },
			viewport = { width: 250, height: 250, type: 'circle' };
		$scope.cropOptions = { boundary: boundary, viewport: viewport };
		$scope.inputImage = 'https://raw.githubusercontent.com/Foliotek/Croppie/master/demo/demo-1.jpg'
		$scope.outputImage = {
			data: null
		};
	}]);