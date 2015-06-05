/*-
 * cordova VideoPlayer Plugin for Android
 *
 * Created by Simon MacDonald (2008) MIT Licensed
 * Revised for Cordova 3.3+ by Dawson Loudon (2013) MIT Licensed
 *
 * Usages:
 *
 * VideoPlayer.play("http://path.to.my/video.mp4");
 * VideoPlayer.play("file:///path/to/my/video.mp4");
 * VideoPlayer.play("file:///android_asset/www/path/to/my/video.mp4");
 * VideoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
 */
cordova.define("cordova/plugin/videoplayer",
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var VideoPlayer = function () {};

    /**
     * Starts the video player intent
     *
     * @param url           The url to play
     */
    VideoPlayer.prototype.play = function(url) {
        exec(null, null, "VideoPlayer", "playVideo", [url]);
    };

    var videoPlayer = new VideoPlayer();
    module.exports = videoPlayer;
});

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.videoPlayer) {
    window.plugins.videoPlayer = cordova.require("cordova/plugin/videoplayer");
}
