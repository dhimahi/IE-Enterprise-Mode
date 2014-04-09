;(function(window, document){
	function enterpriseMode(){

		//check if spellcheck is supported, if so we are using an emulated version of IE
		if('spellcheck' in document.createElement('textarea')){
			//check if we are in legacy document mode in IE 10+
			if (document.all && document.documentMode <= 8 && !document.addEventListener) {
				//we are running in document mode not enterprise mode!
				return false
			}else{
				//Enterprise mode. Yay! - or IE10 if conditional comments are omitted :(
				return true;
			}
		}else{
			//real IE 6,7,8, (9 this shouldn't be here if the conditional comments exist!) 
			return false;
		}
	}

	return window.enterpriseMode = enterpriseMode();
})(window, document, undefined);
