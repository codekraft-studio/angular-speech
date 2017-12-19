/**
* Package: angular-speech - v0.1.0 
* Description: A simple angular component to deal with browser SpeechRecognition 
* Last build: 2017-12-20 
* @author codekraft-studio 
* @license MIT 
*/
angular.module('angular-speech', [])

angular.module('angular-speech')
  .run(function($templateCache) {    
    $templateCache.put(
      'angular-speech/button.html',
      '<span name="Angular Speech" ng-bind="vm.statusText"></span>'
    );
  });

angular.module('angular-speech')
  .component('angularSpeech', {
    templateUrl: 'angular-speech/button.html',
    bindings: {
      lang: '@',
      onText: '&'
    },
    controllerAs: 'vm',
    controller: function SpeechController($scope, $element, $attrs, $window, $log) {

      $window.SpeechRecognition = $window.SpeechRecognition || $window.webkitSpeechRecognition
        
      if (!$window.SpeechRecognition) {
        $log.error('SpeechRecognition is not supported from your browser!');
        return;
      }
      
      var vm = this, 
        recognition = null;
        
      vm.recording = false;
      
      vm.startRecording = function() {
        recognition.start();
        vm.recording = true;
        $element.addClass('recording');
      };
      
      vm.stopRecording = function() {
        recognition.stop();
        vm.recording = false;
        $element.removeClass('recording');
      };
      
      // Start / stop the recognition process
      $element.on('click', function() {
        vm.recording ? vm.stopRecording() : vm.startRecording();
      });

      vm.$onInit = function() {
        
        // Init speech recognition class
        recognition = new SpeechRecognition();
        recognition.lang = vm.lang || 'en-US';
        recognition.interimResults = true;
        
        // Update recording flag and UI
        recognition.addEventListener('end', vm.stopRecording);

        // On result emit the event to parent scope
        recognition.addEventListener('result', function(event) {
    
          // Extract the text
          const text = Array.from(event.results, function(r) {
            return r[0]
          }).map(function(result) { 
            return result.transcript;
          }).join('');
          
          // Emit result text
          vm.onText({content: text})
          $scope.$apply();
          
        });
        
      };
      
    }
  });