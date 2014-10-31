VideoPlayer
===========

Video Player Plugin for Cordova 3.3+ Android


# Installation

This plugin use the Cordova CLI's plugin command. To install it to your application, simply execute the following (and replace variables).

```
cordova plugin add com.afreire.plugins.video
```

# Usage

To use "Cordova-MediaPlayer" in your Cordova app project:

Add following to your index.html <head>

    <link rel="stylesheet" type="text/css" href="js/cordova-mediaplayer/cordova-mediaplayer.css" />
    
Add following to your index.html <body>

    <div id="cordova_media_player"></div>
    <script type="text/javascript" src="js/cordova-mediaplayer/cordova-mediaplayer.js"></script>

Call this method on your body load (or similar) event:

    setupCordovaMediaPlayer();

Example:

    setupCordovaMediaPlayer();

Then call the following methods as needed:

    initMediaPlayerForAudio() or initMediaPlayerForVideo()

Examples:

    initMediaPlayerForVideo("VIDEO: Remote Example (HTTP://)",
                            "http://www.mysite.com/video.mp4",
                            "http://www.mysite.com/video_thumb.jpg",
                            "The greatest online video ever.");

    initMediaPlayerForVideo("VIDEO: Local Example",
                            "file:///mnt/sdcard/example-media/example_video.mp4",
                            "file:///mnt/sdcard/example-media/example_video.png",
                            "The greatest local video ever.");

    initMediaPlayerForAudio("AUDIO: Remote Example (HTTP://)",
                            "http://www.mysite.com/example.mp3",
                            "http://www.mysite.com/thumb.jpg",
                            "The greatest online audio ever.");

    initMediaPlayerForAudio("AUDIO: : Local Example",
                            "file:///mnt/sdcard/example-media/example_audio.mp3",
                            "file:///mnt/sdcard/example-media/example_audio.jpg",
                            "The greatest local audio ever.");

# Optional Methods

If you create methods with any of the following names the cordova mediaplayer will call them at the corresponding moments.

- mediaPlaybackHasBeenStopped()
- mediaPlaybackHasStarted()
- closeMediaPlayer()
- prepUIElementsForMediaPlayback()
- mediaPlaybackHasBeenPaused()

# Licence MIT

Copyright 2013 Quentin Aupetit

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.