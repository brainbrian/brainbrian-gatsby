---
title: 'Clearing the Display of a Video Object in Flash Issues'
date: '2009-03-26'
categories:
    - 'actionscript3'
tags:
    - 'actionscript'
    - 'actionscript-3'
    - 'as3'
    - 'bug'
    - 'flash'
    - 'video'
---

So today a co-worker of mine and I were trying to figure out why he couldn't clear the display of an image in the video object on his stage.  The Adobe documentation states that if you use the clear method of the Video class that it should do the following:

> "Clears the image currently displayed in the Video object. This is useful when you want to display standby information without having to hide the Video object."

Well... when having smoothing enabled, this does not work.  It's a known bug, and I believe it has to do with smoothing caching the video as a bitmap.  I'm not fully sure how smoothing works, but it makes sense that this would likely be the problem.

So to clear the video object that has smoothing enabled, you need to disable smoothing then clear the object.  After it's been cleared you can turn smoothing back on.
