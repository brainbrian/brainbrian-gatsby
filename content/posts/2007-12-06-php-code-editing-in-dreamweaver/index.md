---
title: 'PHP code editing in Dreamweaver'
date: '2007-12-06'
categories:
    - 'adobe'
    - 'php-mysql'
---

I know dreamweaver isn't the best choice for editing PHP code by hand, but it's worked relatively well for me over the past 2 years. There are better tools out there that offer code/syntax validation such as the Eclipse IDE with php, and even simple text editors like textmate. But for those of you that do use dreamweaver and use include files, it has always been a bother that Dreamweaver doesn't color-code include files. Well here's how:I found an article on adobe about this:[http://kb.adobe.com](http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_16410&sliceId=1). Basically find your file titled MMDocumentTypes.xml... on a mac just use spotlight to find this, otherwise you have to dig through the application package. After locating the file and opening it, just add inc to the XML where the documenttype is listed as PHP_MySQL:

> <documenttype id="PHP\_MySQL" servermodel="PHP MySQL" internaltype="Dynamic" winfileextension="php,php3,php4,php5,inc" macfileextension="php,php3,php4,php5,inc" file="Default.php" writebyteordermark="false">

And Voila. A simple code-coloring solution for editing include files with the .inc extension in dreamweaver.
