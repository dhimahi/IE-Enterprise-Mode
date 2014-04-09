;(function(window, document){
	function enterpriseMode(){
		if('spellcheck' in document.createElement('textarea')){
			return true;
		}else{
			return false;
		}
	}

	return window.enterpriseMode = enterpriseMode();
})(window, document, undefined);