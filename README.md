pureJavascriptAccordion
=======================

How to
===

First step:
We need to define the wrapper for our widget. You can put it anywhere in your DOM.

<div class="accordionContainer">...</div>

After that we can start adding accordions. 
First div with a calss "accordionItem" is a individual accordion tab.
<div class="accordionItem">...</div>
Where h2 tag contains header and div is content holder.
<div class="accordionItem">
<h2> Tab Title ...

HTML

<div class="accordionItem">
	  <h2>Lorem Ipsum</h2>
	  <div>
	    <img class="accordionItem"/>
	  </div>
</div>

Also we have to include our JS file:
<script src="script.js" type="text/javascript"></script>

To initiate we are using init() function which accepts 2 parameters:

function init(styleDirectory,initialOpen) 

styleDirectory - defines style elements;
initialOpen - defines which tab should be expanded on load;

Pure Javascript Accordion with ability to define styles.
