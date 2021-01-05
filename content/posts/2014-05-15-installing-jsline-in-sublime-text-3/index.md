---
title: 'Installing JSLint in Sublime Text 3'
date: '2014-05-15'
categories:
    - 'development'
    - 'javascript'
    - 'technology'
    - 'work'
---

I got a new computer today and needed a refresher on installing JSLint with Sublime Text. Linters are now run through the SublimeLinter package/framework. To install Package Control and SublimeLinter follow the links below.

Install Package Control specific to the version of Sublime Text you’re running: [sublime.wbond.net/installation](https://sublime.wbond.net/installation)

Install SublimeLinter and Linter plugins: [sublimelinter.readthedocs.org/en/latest/installation.html](https://sublimelinter.readthedocs.org/en/latest/installation.html)

The links provide simple straightforward instructions for basic linter configurations for Sublime Text.

Happy Linting!

Also... you likely want to set up Sublime Text's command line tool. Do so by running the following in Terminal: \[cc lang="bash"\]sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl\[/cc\]

This will set up a symlink to the command 'subl' within Terminal.

More documentation here: [www.sublimetext.com/docs/3/osx_command_line.html](https://www.sublimetext.com/docs/3/osx_command_line.html)
