var defaultDirectory = "Assets/";
var styleDirectory = "";
var accordionItems = new Array();
var imgContent = new Array();

 function init(styleDirectory,initialOpen) {

 	
      var divs = document.getElementsByTagName( 'div' );
      var imgs = document.getElementsByTagName( 'img' );

     
		for ( var i = 0; i < imgs.length; i++ ) {
       		 if ( imgs[i].className == 'accordionItem' ) imgContent.push( imgs[i] );
     	 }

      for ( var i = 0; i < divs.length; i++ ) {
        if ( divs[i].className == 'accordionItem' ) accordionItems.push( divs[i] );
        // Assign class for wrapper
        if ( divs[i].className == 'accordionContainer' ) divs[i].className=divs[i].className+" "+styleDirectory;
      }

      	// Get proper image for style
		for ( var i = 0; i < imgContent.length; i++ ) {
			imgContent[i].src=defaultDirectory+"/"+styleDirectory+"/"+styleDirectory.toLowerCase()+"-content.jpg";
        }

      // Assign onclick
      for ( var i = 0; i < accordionItems.length; i++ ) {
        var h2 = getFirstChildWithTagName( accordionItems[i], 'H2' );
        h2.onclick = toggleItem;
      }

      // Hide all tabs except chosen
      for ( var i = 0; i < accordionItems.length; i++ ) {
        if(i!=initialOpen)accordionItems[i].className = 'accordionItem hide';
      }
    }

    function toggleItem() {
      var itemClass = this.parentNode.className;
      var openCounter = 0;

      for ( var i = 0; i < accordionItems.length; i++ ) {
      	if(accordionItems[i].className==="accordionItem")openCounter++;
        accordionItems[i].className = 'accordionItem hide';
      }
        if ( itemClass == 'accordionItem hide') {
        this.parentNode.className = 'accordionItem';

      }else{
      	this.parentNode.className = 'accordionItem hide';
      }
      //Check if more than 1 open
      if(openCounter>1)this.parentNode.className = 'accordionItem';

      }

      function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if (element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }

     function toggleAll(whichOne) {
      for ( var i = 0; i < accordionItems.length; i++ ) {
        if(whichOne!="-"){
        	accordionItems[i].className = 'accordionItem hide';
        }else{
        	accordionItems[i].className = 'accordionItem';
        }
      }
    }