const { parse, stringify } = require("svgson");
const fs = require("fs");

// ----------------------------
// Convert SVG to JSON AST
// ----------------------------

parse(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 660 506.7" style="enable-background:new 0 0 660 506.7;" xml:space="preserve">
<style type="text/css">
.st0{fill:#CCCCCC;}
.st1{fill:none;stroke:#16212D;stroke-width:3.2047;stroke-opacity:0.7;}
.st2{fill:none;stroke:#16212D;stroke-width:3.156;stroke-opacity:0.7;}
</style>
<path class="st0" d="M-97.8,496.6h239c2.3,0,4.2-1.9,4.2-4.2v-70c0-2.3-1.9-4.2-4.2-4.2h-239c-2.3,0-4.2,1.9-4.2,4.2v70
C-102,494.7-100.1,496.6-97.8,496.6z"/>
<path class="st0" d="M-97.7,417.1h238.8c2.4,0,4.3-1.9,4.3-4.3v-97.4c0-2.4-1.9-4.3-4.3-4.3H-97.7c-2.4,0-4.3,1.9-4.3,4.3v97.4
C-102,415.1-100.1,417.1-97.7,417.1z"/>
<path class="st1" d="M-1.9,398.9V409H8.9"/>
<path class="st2" d="M-1.9,329.8v-10.5H8.7"/>
<path class="st1" d="M129.9,398.9V409h-10.8"/>
<path class="st1" d="M129.9,329.8v-10.7h-10.8"/>
<path class="st0" d="M150.8,417.1h154.3c2.4,0,4.3-1.9,4.3-4.3v-97.4c0-2.4-1.9-4.3-4.3-4.3H150.8c-2.4,0-4.3,1.9-4.3,4.3v97.4
C146.5,415.1,148.4,417.1,150.8,417.1z"/>
<path class="st1" d="M162.1,398.9V409h10.8"/>
<path class="st2" d="M162.1,329.8v-10.5h10.6"/>
<path class="st1" d="M293.9,398.9V409h-10.8"/>
<path class="st1" d="M293.9,329.8v-10.7h-10.8"/>
<path class="st0" d="M314.8,417.1h238.9c2.4,0,4.3-1.9,4.3-4.3v-97.4c0-2.4-1.9-4.3-4.3-4.3H314.8c-2.4,0-4.3,1.9-4.3,4.3v97.4
C310.5,415.1,312.4,417.1,314.8,417.1z"/>
<path class="st1" d="M326,398.9V409h10.8"/>
<path class="st2" d="M326,329.8v-10.5h10.6"/>
<path class="st1" d="M457.8,398.9V409H447"/>
<path class="st1" d="M457.8,329.8v-10.7H447"/>
<path class="st0" d="M-97.7,310h238.8c2.4,0,4.3-1.9,4.3-4.3v-97.2c0-2.4-1.9-4.3-4.3-4.3H-97.7c-2.4,0-4.3,1.9-4.3,4.3v97.2
C-102,308.1-100.1,310-97.7,310z"/>
<path class="st1" d="M-1.9,291.9V302H8.9"/>
<path class="st2" d="M-1.9,222.8v-10.5H8.7"/>
<path class="st1" d="M129.9,291.9V302h-10.8"/>
<path class="st1" d="M129.9,222.8v-10.7h-10.8"/>
<path class="st0" d="M150.8,310h154.3c2.4,0,4.3-1.9,4.3-4.3v-97.2c0-2.4-1.9-4.3-4.3-4.3H150.8c-2.4,0-4.3,1.9-4.3,4.3v97.2
C146.5,308.1,148.4,310,150.8,310z"/>
<path class="st1" d="M162.1,291.9V302h10.8"/>
<path class="st2" d="M162.1,222.8v-10.5h10.6"/>
<path class="st1" d="M293.9,291.9V302h-10.8"/>
<path class="st1" d="M293.9,222.8v-10.7h-10.8"/>
<path class="st0" d="M314.8,310h238.9c2.4,0,4.3-1.9,4.3-4.3v-97.2c0-2.4-1.9-4.3-4.3-4.3H314.8c-2.4,0-4.3,1.9-4.3,4.3v97.2
C310.5,308.1,312.4,310,314.8,310z"/>
<path class="st1" d="M326,291.9V302h10.8"/>
<path class="st2" d="M326,222.8v-10.5h10.6"/>
<path class="st1" d="M457.8,291.9V302H447"/>
<path class="st1" d="M457.8,222.8v-10.7H447"/>
<path class="st0" d="M-97.7,203.1h238.8c2.4,0,4.3-1.9,4.3-4.3v-97.4c0-2.4-1.9-4.3-4.3-4.3H-97.7c-2.4,0-4.3,1.9-4.3,4.3v97.4
C-102,201.2-100.1,203.1-97.7,203.1z"/>
<path class="st1" d="M-1.9,185v10.1H8.9"/>
<path class="st2" d="M-1.9,115.8v-10.5H8.7"/>
<path class="st1" d="M129.9,185v10.1h-10.8"/>
<path class="st1" d="M129.9,115.8v-10.7h-10.8"/>
<path class="st0" d="M150.8,203.1h154.3c2.4,0,4.3-1.9,4.3-4.3v-97.4c0-2.4-1.9-4.3-4.3-4.3H150.8c-2.4,0-4.3,1.9-4.3,4.3v97.4
C146.5,201.2,148.4,203.1,150.8,203.1z"/>
<path class="st1" d="M162.1,185v10.1h10.8"/>
<path class="st2" d="M162.1,115.8v-10.5h10.6"/>
<path class="st1" d="M293.9,185v10.1h-10.8"/>
<path class="st1" d="M293.9,115.8v-10.7h-10.8"/>
<path class="st0" d="M314.8,203.1h238.9c2.4,0,4.3-1.9,4.3-4.3v-97.4c0-2.4-1.9-4.3-4.3-4.3H314.8c-2.4,0-4.3,1.9-4.3,4.3v97.4
C310.5,201.2,312.4,203.1,314.8,203.1z"/>
<path class="st1" d="M326,185v10.1h10.8"/>
<path class="st2" d="M326,115.8v-10.5h10.6"/>
<path class="st1" d="M457.8,185v10.1H447"/>
<path class="st1" d="M457.8,115.8v-10.7H447"/>
<path class="st0" d="M-97.7,96.1h238.8c2.4,0,4.3-1.9,4.3-4.3V-5.6c0-2.4-1.9-4.3-4.3-4.3H-97.7c-2.4,0-4.3,1.9-4.3,4.3v97.4
C-102,94.2-100.1,96.1-97.7,96.1z"/>
<path class="st1" d="M-1.9,77.9V88H8.9"/>
<path class="st2" d="M-1.9,8.8V-1.7H8.7"/>
<path class="st1" d="M129.9,77.9V88h-10.8"/>
<path class="st1" d="M129.9,8.8V-1.9h-10.8"/>
<path class="st0" d="M150.8,96.1h154.3c2.4,0,4.3-1.9,4.3-4.3V-5.6c0-2.4-1.9-4.3-4.3-4.3H150.8c-2.4,0-4.3,1.9-4.3,4.3v97.4
C146.5,94.2,148.4,96.1,150.8,96.1z"/>
<path class="st1" d="M162.1,77.9V88h10.8"/>
<path class="st2" d="M162.1,8.8V-1.7h10.6"/>
<path class="st1" d="M293.9,77.9V88h-10.8"/>
<path class="st1" d="M293.9,8.8V-1.9h-10.8"/>
<path class="st0" d="M314.8,96.1h238.9c2.4,0,4.3-1.9,4.3-4.3V-5.6c0-2.4-1.9-4.3-4.3-4.3H314.8c-2.4,0-4.3,1.9-4.3,4.3v97.4
C310.5,94.2,312.4,96.1,314.8,96.1z"/>
<path class="st1" d="M326,77.9V88h10.8"/>
<path class="st2" d="M326,8.8V-1.7h10.6"/>
<path class="st1" d="M457.8,77.9V88H447"/>
<path class="st1" d="M457.8,8.8V-1.9H447"/>
</svg>
`).then((json) => {
  console.log('success!');
  fs.writeFile("deckmap/ot3deckmap.json", JSON.stringify(json, null, 2), (err) => {
    if (err) {
      console.log("oops");
      console.error(err);
    }
    // file written successfully
  });
});





// <rect xmlns="http://www.w3.org/2000/svg" x="99.55" y="9" width="128" height="86" fill="red"/></svg>