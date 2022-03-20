<h1 align="center"> Aura </h1>

<p align="center"> A customizable startpage that lives in your browser.  </p>

![Preview](/Docs/Templates/default.png)

Aura is a minimal, customizable and functional startpage designed to be used alongside with browser extensions such as <a href="https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/">New Tab Override</a>  in order to have a personalized startpage without the hassle of self-hosting.

It's especially useful if you want to use the same startpage with multiple machines/browsers as the list of links can be changed on a per-browser basis without needing to touch any HTML or hosting multiple versions.

It's import/export capabilities also provide an easy way of transferring link lists or custom themes between machines, browsers or users.

To start using Aura, head over to the live page and set it as your homepage/new tab page.

Learn how to customize your link list with <a href="https://github.com/KazaKazan/aura/blob/main/Docs/commands.md#link-list-commands">the documentation</a>.

Learn how to personalize your startpage with <a href="https://github.com/KazaKazan/aura/blob/main/Docs/commands.md#theming">the documentation</a> or use one of the <a href="https://github.com/KazaKazan/aura/blob/main/Docs/templates.md">pre-made themes</a>.

---

<h2 align="center"> Live Page

https://kazakazan.github.io/aura/</h2>

---

<h2> Known Bugs </h2>

* On your first visit, the page might be completely broken. Thankfully this is  an easy fix. Simply type `au:sr` in the searchbar and hit enter. The page should be fixed, to retain its fixed form in future visits, type `au:ss` and hit enter. I'm looking into the cause of this, hopefully I'll be able to fix it soon.

---

<h2> Planned Features </h2>

* General layout improvements.
  * Better multi-line link list support.
* More customization options.
  * Allow the customization of the corner decorations (change shape, hide/show etc.).
  * ~~More clock / calendar options (long-form day names, hide/show etc.).~~ (Feature complete.)
  * ~Dark and light mode support with support for automatic switching in-between and appropriate settings/commands.~ (Feature implemented, right now it's very wonky.)
  * ~More search engine options (wikipedia).~ (Feature complete.)
  * More pre-made themes.
  * More display image options (ability to position the image inside the display, filters etc.)
* Improved functionality.
  * Weather widget with appropriate settings.
  * Text display widget with appropriate settings.
  * More utility functions (simple cli calculator, ~one-time search engine change etc.~). (One time search implemented.)
  * ~More and improved link list functions (swap link positions, edit just name or just URL, remove all links etc.).~(Feature complete.)
* GUI settings.
  * GUI settings may be implemented after all other planned features are implemented.