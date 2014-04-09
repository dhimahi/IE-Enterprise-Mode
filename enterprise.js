;(function(window, document){
	var window.enterpriseMode;

	if('spellcheck' in document.createElement('textarea')){
		return window.enterpriseMode = true;
	}else{
		return window.enterpriseMode = false;
	}
})(window, document, undefined);