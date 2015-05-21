'use strict';

angular.module('messages').directive('threads', function () {
  return {
	  link: function (scope, elem, attr) {
	    var element = elem[0];

	    elem.bind('scroll', function() {
	  	  if (element.scrollTop <= 0) {
	  	    scope.$apply(attr.moremessages);
	  	  }
	    });
	  }
  };
});