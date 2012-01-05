(function() {

var player = document.getElementById('flvplayer');

if (!player) return;

var option = {
	disable_in_input: true
};

shortcut.add('Right', function() {
	player.ext_setPlayheadTime(player.ext_getPlayheadTime() + 10);
}, option);

shortcut.add('Left', function() {
	player.ext_setPlayheadTime(player.ext_getPlayheadTime() - 10);
}, option);

shortcut.add('Up', function() {
	player.ext_setVolume(player.ext_getVolume() + 5);
}, option);

shortcut.add('Down', function() {
	player.ext_setVolume(player.ext_getVolume() - 5);
}, option);

shortcut.add('m', function() {
	player.ext_setMute(!player.ext_isMute());
}, option);

shortcut.add('c', function() {
	player.ext_setCommentVisible(!player.ext_isCommentVisible());
}, option);

shortcut.add('f', function() {
	player.ext_setVideoSize( ((player.ext_getVideoSize() == 'normal') ? 'fit': 'normal') );
}, option);

shortcut.add('r', function() {
	player.ext_setRepeat(!player.ext_isRepeat());
}, option);

})();