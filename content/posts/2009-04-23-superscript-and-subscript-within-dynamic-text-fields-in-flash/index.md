---
title: "Superscript and Subscript Within Dynamic Text Fields in Flash"
date: "2009-04-23"
categories: 
  - "actionscript3"
  - "flash-development"
tags: 
  - "actionscript"
  - "dynamic-text"
  - "flash"
  - "superscript"
  - "text"
---

So today I ran into the issue of getting superscripted ® and TM characters within dynamic text fields.  The <sup></sup> doesn't work for this within flash, neither will any CSS trickery.  So I turned to font embeds after reading through some other blog posts.

I found 2 fonts in a blog post at [blog.ggshow.com](http://blog.ggshow.com/index.php/reference/2007/04/19/how_to_use_subscript_aamp_superscript_in): GG Superscript and GG Subscript.

After embedding the superscript font in another dynamic text field you're able to reference the font face and assign it to the characters that need the superscripting.

Like so:

> var myString:String = "This is superscript® in a dynamic text field!"; myString = myString.replace("®", '<font face="GG Superscript">®</font>'); myText.htmlText = myString;
