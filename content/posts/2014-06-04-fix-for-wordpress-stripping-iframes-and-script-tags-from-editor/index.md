---
title: "Fix for WordPress stripping iFrames and Script Tags from Editor"
date: "2014-06-04"
categories: 
  - "php-mysql"
  - "wordpress"
---

If you're frustrated with WordPress's TinyMCE Editor stripping out your iFrame or script tags within your posts add the following line of code to your functions file: \[cc lang="php" tab\_size="4"\] // allow script & iframe tag within posts function allow\_post\_tags( $allowedposttags ){ $allowedposttags\['script'\] = array( 'type' => true, 'src' => true, 'height' => true, 'width' => true, ); $allowedposttags\['iframe'\] = array( 'src' => true, 'width' => true, 'height' => true, 'class' => true, 'frameborder' => true, 'webkitAllowFullScreen' => true, 'mozallowfullscreen' => true, 'allowFullScreen' => true ); return $allowedposttags; } add\_filter('wp\_kses\_allowed\_html','allow\_post\_tags', 1); \[/cc\] I'm not sure when this became an issue, but I'm running WordPress 3.9 and I didn't notice this until now.
