var myScroll;
function loaded () {
	myScroll = new IScroll('#wrap', { mouseWheel: true, tap: true ,scrollbars:false});
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);
