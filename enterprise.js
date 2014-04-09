;(function(window, document){
	if('spellcheck' in document.createElement('textarea')){
		return true;
	}else{
		return false;
	}
})(window, document, undefined);