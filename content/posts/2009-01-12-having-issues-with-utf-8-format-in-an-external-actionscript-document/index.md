---
title: "Having Issues with UTF-8 Format in an External ActionScript Document?"
date: "2009-01-12"
categories: 
  - "adobe"
  - "flash-development"
tags: 
  - "flash"
  - "text-encoding"
  - "utf-8"
---

From what I gather, any external ActionScript script you may have that you are linking to through an #include statement, you may need to use this code to allow certain characters to be read in the document as UTF-8.  I ran into this issue about a month ago, and a co-worker of mine knew the solution.  It's something I find is rarely used and easily forgotten:

//!-- UTF8

> Taken from adobe.com:
> 
> To create a document that contains multiple languages, use the #include action.
> 
> Use an application that supports UTF‑8 encoding, such as Dreamweaver, to save the text file in UTF‑8 format.
> 
> To identify the file as Unicode to the Flash authoring tool, include the following header as the first line of the file:
> 
> //!-- UTF8 Note: Include a space after the second dash (-).

I hope that helps some of you who may have struggled with this ;-).
