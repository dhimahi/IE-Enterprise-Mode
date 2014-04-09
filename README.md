IE-Enterprise-Mode
==================

Detect IE11 running in Enterprise (IE8) mode via JavaScript

## Usage

Add the following code to your page anywhere you like.

```html
<!--[if lt IE 9]>
<script src="enterprise.js">
	if(enterpriseMode){
		alert('Emulated IE8');
	}else{
		alert('Real IE8');
	}
</script>
<![endif]-->
```

*Note:* We use an IE conditional comment to only run this code for real versions of legacy IE and IE11 emulating legacy IE via Enterprise Mode.
