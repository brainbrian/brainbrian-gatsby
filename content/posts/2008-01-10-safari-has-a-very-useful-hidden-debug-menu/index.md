---
title: 'Safari has a very useful hidden debug menu.'
date: '2008-01-10'
categories:
    - 'apple'
tags:
    - 'safari'
---

Today, a coworker pointed out to me a feature he discovered in Apple Safari after doing a search for a random error code while writing an Ajax script for Chefmd.com. This is a very useful feature of safari that I'm surprised they don't allow you to activate just in your preferences.

To activate this hidden debug menu in Safari type the following command into Terminal (located in applications >> utilities):

> defaults write com.apple.Safari IncludeDebugMenu 1

To hide the menu again, just enter the following:

> defaults write com.apple.Safari IncludeDebugMenu 0

Enjoy.

Read more at [macosxhints.com](http://www.macosxhints.com/article.php?story=20030110063041629).
