angular.module('opcCroppie', []).
  component('croppie', {
    bindings: {
      src: '<',
      ngModel: '=',
      options: '<'
    },
    controller: function ($scope, $element) {
      var options, cropper,
        outputOptions = {
          type: 'base64',
          size: 'viewport'
        };
      var ctrl = this;
      ctrl.$onInit = function () {
        options = angular.merge({}, ctrl.options);
        options.update = function () {
          cropper.result(outputOptions).then(function (img) {
            $scope.$apply(function () {
              ctrl.ngModel = img;
            });
          });
        };
        cropper = new Croppie($element[0], options);
        cropper.bind({
          url: ctrl.src
        });
      };
    }
  });