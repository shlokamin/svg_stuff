const { parse, stringify } = require("svgson");
const fs = require("fs");

// ----------------------------
// Convert SVG to JSON AST
// ----------------------------

parse(`<svg version="1.1" id="_0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 386.2 267.2" style="enable-background:new 0 0 386.2 267.2;" xml:space="preserve">
<style type="text/css">
.st0{fill:none;stroke:#000000;stroke-width:0.71;stroke-linecap:round;stroke-linejoin:round;}
</style>
<g id="LINE-325">
<line class="st0" x1="119" y1="94" x2="119" y2="91.4"/>
</g>
<g id="LINE-326">
<line class="st0" x1="121" y1="94" x2="119" y2="94"/>
</g>
<g id="LINE-327">
<line class="st0" x1="121" y1="92.3" x2="121" y2="94"/>
</g>
<g id="ELLIPSE">
<path class="st0" d="M119,91.4c0,0.5,0.9,0.9,2,0.9"/>
</g>
<g id="LINE-328">
<line class="st0" x1="17" y1="91.4" x2="17" y2="94"/>
</g>
<g id="ELLIPSE-2">
<path class="st0" d="M15,92.3c1.1,0,2-0.4,2-0.9"/>
</g>
<g id="LINE-329">
<line class="st0" x1="15" y1="94" x2="15" y2="92.3"/>
</g>
<g id="LINE-330">
<line class="st0" x1="17" y1="94" x2="15" y2="94"/>
</g>
<g id="LINE-331">
<line class="st0" x1="17" y1="0" x2="17" y2="2.6"/>
</g>
<g id="LINE-332">
<line class="st0" x1="15" y1="0" x2="17" y2="0"/>
</g>
<g id="LINE-333">
<line class="st0" x1="15" y1="1.7" x2="15" y2="0"/>
</g>
<g id="ELLIPSE-3">
<path class="st0" d="M17,2.6c0-0.5-0.9-0.9-2-0.9"/>
</g>
<g id="LINE-334">
<line class="st0" x1="131" y1="92.3" x2="131" y2="90.3"/>
</g>
<g id="ARC-309">
<path class="st0" d="M130.8,90.2c0.1,0,0.1,0.1,0.2,0.1"/>
</g>
<g id="ARC-310">
<path class="st0" d="M130.8,90.2c-0.2-0.1-0.4-0.2-0.6-0.2"/>
</g>
<g id="LINE-335">
<line class="st0" x1="119" y1="90" x2="130.2" y2="90"/>
</g>
<g id="LINE-336">
<line class="st0" x1="119" y1="91.4" x2="119" y2="90"/>
</g>
<g id="LINE-337">
<line class="st0" x1="131" y1="92.3" x2="121" y2="92.3"/>
</g>
<g id="LINE-338">
<line class="st0" x1="130.2" y1="4" x2="119" y2="4"/>
</g>
<g id="ARC-311">
<path class="st0" d="M130.2,4c0.2,0,0.5-0.1,0.6-0.2"/>
</g>
<g id="ARC-312">
<path class="st0" d="M131,3.7c-0.1,0-0.1,0.1-0.2,0.1"/>
</g>
<g id="LINE-339">
<line class="st0" x1="131" y1="1.7" x2="131" y2="3.7"/>
</g>
<g id="LINE-340">
<line class="st0" x1="121" y1="1.7" x2="131" y2="1.7"/>
</g>
<g id="ELLIPSE-4">
<path class="st0" d="M121,1.7c-1.1,0-2,0.4-2,0.9"/>
</g>
<g id="LINE-341">
<line class="st0" x1="119" y1="4" x2="119" y2="2.6"/>
</g>
<g id="LINE-342">
<line class="st0" x1="134.3" y1="5" x2="132.3" y2="5"/>
</g>
<g id="ARC-313">
<path class="st0" d="M132.2,5.2c0-0.1,0.1-0.1,0.1-0.2"/>
</g>
<g id="ARC-314">
<path class="st0" d="M132.2,5.2c-0.1,0.2-0.2,0.4-0.2,0.6"/>
</g>
<g id="LINE-343">
<line class="st0" x1="132" y1="17" x2="132" y2="5.8"/>
</g>
<g id="LINE-344">
<line class="st0" x1="133.4" y1="17" x2="132" y2="17"/>
</g>
<g id="ELLIPSE-5">
<path class="st0" d="M133.4,17c0.5,0,0.9-0.9,0.9-2"/>
</g>
<g id="LINE-345">
<line class="st0" x1="134.3" y1="5" x2="134.3" y2="15"/>
</g>
<g id="LINE-346">
<line class="st0" x1="4" y1="5.8" x2="4" y2="17"/>
</g>
<g id="ARC-315">
<path class="st0" d="M4,5.8c0-0.2-0.1-0.5-0.2-0.6"/>
</g>
<g id="ARC-316">
<path class="st0" d="M3.7,5c0,0.1,0.1,0.1,0.1,0.2"/>
</g>
<g id="LINE-347">
<line class="st0" x1="1.7" y1="5" x2="3.7" y2="5"/>
</g>
<g id="LINE-348">
<line class="st0" x1="1.7" y1="15" x2="1.7" y2="5"/>
</g>
<g id="ELLIPSE-6">
<path class="st0" d="M1.7,15c0,1.1,0.4,2,0.9,2"/>
</g>
<g id="LINE-349">
<line class="st0" x1="4" y1="17" x2="2.6" y2="17"/>
</g>
<g id="LINE-350">
<line class="st0" x1="5" y1="1.7" x2="5" y2="3.7"/>
</g>
<g id="ARC-317">
<path class="st0" d="M5.2,3.8C5.1,3.7,5.1,3.7,5,3.7"/>
</g>
<g id="ARC-318">
<path class="st0" d="M5.2,3.8C5.4,3.9,5.6,4,5.8,4"/>
</g>
<g id="LINE-351">
<line class="st0" x1="17" y1="4" x2="5.8" y2="4"/>
</g>
<g id="LINE-352">
<line class="st0" x1="17" y1="2.6" x2="17" y2="4"/>
</g>
<g id="LINE-353">
<line class="st0" x1="5" y1="1.7" x2="15" y2="1.7"/>
</g>
<g id="LINE-354">
<line class="st0" x1="5.8" y1="90" x2="17" y2="90"/>
</g>
<g id="ARC-319">
<path class="st0" d="M5.8,90c-0.2,0-0.5,0.1-0.6,0.2"/>
</g>
<g id="ARC-320">
<path class="st0" d="M5,90.3c0.1,0,0.1-0.1,0.2-0.1"/>
</g>
<g id="LINE-355">
<line class="st0" x1="5" y1="92.3" x2="5" y2="90.3"/>
</g>
<g id="LINE-356">
<line class="st0" x1="15" y1="92.3" x2="5" y2="92.3"/>
</g>
<g id="LINE-357">
<line class="st0" x1="17" y1="90" x2="17" y2="91.4"/>
</g>
<g id="LINE-358">
<line class="st0" x1="1.7" y1="89" x2="3.7" y2="89"/>
</g>
<g id="ARC-321">
<path class="st0" d="M3.8,88.8c0,0.1-0.1,0.1-0.1,0.2"/>
</g>
<g id="ARC-322">
<path class="st0" d="M3.8,88.8C3.9,88.6,4,88.4,4,88.2"/>
</g>
<g id="LINE-359">
<line class="st0" x1="4" y1="77" x2="4" y2="88.2"/>
</g>
<g id="LINE-360">
<line class="st0" x1="2.6" y1="77" x2="4" y2="77"/>
</g>
<g id="ELLIPSE-7">
<path class="st0" d="M2.6,77c-0.5,0-0.9,0.9-0.9,2"/>
</g>
<g id="LINE-361">
<line class="st0" x1="1.7" y1="89" x2="1.7" y2="79"/>
</g>
<g id="LINE-362">
<line class="st0" x1="132" y1="88.2" x2="132" y2="77"/>
</g>
<g id="ARC-323">
<path class="st0" d="M132,88.2c0,0.2,0.1,0.5,0.2,0.6"/>
</g>
<g id="ARC-324">
<path class="st0" d="M132.3,89c0-0.1-0.1-0.1-0.1-0.2"/>
</g>
<g id="LINE-363">
<line class="st0" x1="134.3" y1="89" x2="132.3" y2="89"/>
</g>
<g id="LINE-364">
<line class="st0" x1="134.3" y1="79" x2="134.3" y2="89"/>
</g>
<g id="ELLIPSE-8">
<path class="st0" d="M134.3,79c0-1.1-0.4-2-0.9-2"/>
</g>
<g id="LINE-365">
<line class="st0" x1="132" y1="77" x2="133.4" y2="77"/>
</g>
<g id="LINE-366">
<line class="st0" x1="0" y1="77" x2="2.6" y2="77"/>
</g>
<g id="LINE-367">
<line class="st0" x1="0" y1="79" x2="0" y2="77"/>
</g>
<g id="LINE-368">
<line class="st0" x1="1.7" y1="79" x2="0" y2="79"/>
</g>
<g id="LINE-369">
<line class="st0" x1="2.6" y1="17" x2="0" y2="17"/>
</g>
<g id="LINE-370">
<line class="st0" x1="0" y1="15" x2="1.7" y2="15"/>
</g>
<g id="LINE-371">
<line class="st0" x1="0" y1="17" x2="0" y2="15"/>
</g>
<g id="LINE-372">
<line class="st0" x1="133.4" y1="77" x2="136" y2="77"/>
</g>
<g id="LINE-373">
<line class="st0" x1="136" y1="79" x2="134.3" y2="79"/>
</g>
<g id="LINE-374">
<line class="st0" x1="136" y1="77" x2="136" y2="79"/>
</g>
<g id="LINE-375">
<line class="st0" x1="119" y1="2.6" x2="119" y2="0"/>
</g>
<g id="LINE-376">
<line class="st0" x1="121" y1="0" x2="121" y2="1.7"/>
</g>
<g id="LINE-377">
<line class="st0" x1="119" y1="0" x2="121" y2="0"/>
</g>
<g id="LINE-378">
<line class="st0" x1="136" y1="17" x2="133.4" y2="17"/>
</g>
<g id="LINE-379">
<line class="st0" x1="136" y1="15" x2="136" y2="17"/>
</g>
<g id="LINE-380">
<line class="st0" x1="134.3" y1="15" x2="136" y2="15"/>
</g>
<g id="ARC-325">
<path class="st0" d="M0,89c0,2.8,2.2,5,5,5"/>
</g>
<g id="ARC-326">
<path class="st0" d="M1.7,89c0,1.8,1.5,3.3,3.3,3.3"/>
</g>
<g id="LINE-381">
<line class="st0" x1="0" y1="89" x2="0" y2="79"/>
</g>
<g id="LINE-382">
<line class="st0" x1="15" y1="94" x2="5" y2="94"/>
</g>
<g id="SPLINE">
<path class="st0" d="M5,90.3c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.2
 s-0.2-0.2-0.2-0.3s-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0.1-0.3"/>
</g>
<g id="ARC-327">
<path class="st0" d="M134.3,5c0-1.8-1.5-3.3-3.3-3.3"/>
</g>
<g id="ARC-328">
<path class="st0" d="M136,5c0-2.4-2-4.4-4.4-4.4"/>
</g>
<g id="LINE-383">
<line class="st0" x1="136" y1="5" x2="136" y2="15"/>
</g>
<g id="LINE-384">
<line class="st0" x1="121" y1="0" x2="131" y2="0"/>
</g>
<g id="ARC-329">
<path class="st0" d="M131,92.3c1.8,0,3.3-1.5,3.3-3.3"/>
</g>
<g id="ARC-330">
<path class="st0" d="M131,94c2.8,0,5-2.2,5-5"/>
</g>
<g id="LINE-385">
<line class="st0" x1="136" y1="79" x2="136" y2="89"/>
</g>
<g id="LINE-386">
<line class="st0" x1="131" y1="94" x2="121" y2="94"/>
</g>
<g id="ARC-331">
<path class="st0" d="M5,1.7C3.2,1.7,1.7,3.2,1.7,5"/>
</g>
<g id="SPLINE-2">
<path class="st0" d="M3.7,5c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0.1-0.3s0.1-0.2,0.2-0.3C4,3.7,4,3.7,4.1,3.7
 s0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0.1"/>
</g>
<g id="SPLINE-3">
<path class="st0" d="M131,3.7c0.1,0,0.2-0.1,0.3-0.1s0.2,0,0.3,0s0.2,0,0.3,0.1c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.2,0.3
 c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2-0.1,0.3"/>
</g>
<g id="ARC-332">
<path class="st0" d="M5,0C2.2,0,0,2.2,0,5"/>
</g>
<g id="LINE-387">
<line class="st0" x1="5" y1="0" x2="15" y2="0"/>
</g>
<g id="LINE-388">
<line class="st0" x1="0" y1="15" x2="0" y2="5"/>
</g>
<g id="SPLINE-4">
<path class="st0" d="M132.3,89c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2-0.1,0.3s-0.1,0.2-0.2,0.3
 c-0.1,0.1-0.2,0.2-0.3,0.2s-0.2,0.1-0.3,0.1s-0.2,0-0.3,0s-0.2,0-0.3-0.1"/>
</g>
<g id="LINE-389">
<line class="st0" x1="19" y1="0" x2="19" y2="4"/>
</g>
<g id="LINE-390">
<line class="st0" x1="19" y1="4" x2="17" y2="4"/>
</g>
<g id="LINE-391">
<line class="st0" x1="17" y1="0" x2="19" y2="0"/>
</g>
<g id="LINE-392">
<line class="st0" x1="132" y1="75" x2="136" y2="75"/>
</g>
<g id="LINE-393">
<line class="st0" x1="132" y1="77" x2="132" y2="75"/>
</g>
<g id="LINE-394">
<line class="st0" x1="136" y1="75" x2="136" y2="77"/>
</g>
<g id="LINE-395">
<line class="st0" x1="136" y1="19" x2="132" y2="19"/>
</g>
<g id="LINE-396">
<line class="st0" x1="132" y1="19" x2="132" y2="17"/>
</g>
<g id="LINE-397">
<line class="st0" x1="136" y1="17" x2="136" y2="19"/>
</g>
<g id="LINE-398">
<line class="st0" x1="0" y1="75" x2="4" y2="75"/>
</g>
<g id="LINE-399">
<line class="st0" x1="4" y1="75" x2="4" y2="77"/>
</g>
<g id="LINE-400">
<line class="st0" x1="0" y1="77" x2="0" y2="75"/>
</g>
<g id="LINE-401">
<line class="st0" x1="4" y1="19" x2="0" y2="19"/>
</g>
<g id="LINE-402">
<line class="st0" x1="4" y1="17" x2="4" y2="19"/>
</g>
<g id="LINE-403">
<line class="st0" x1="0" y1="19" x2="0" y2="17"/>
</g>
<g id="LINE-404">
<line class="st0" x1="19" y1="90" x2="19" y2="94"/>
</g>
<g id="LINE-405">
<line class="st0" x1="17" y1="90" x2="19" y2="90"/>
</g>
<g id="LINE-406">
<line class="st0" x1="19" y1="94" x2="17" y2="94"/>
</g>
<g id="LINE-407">
<line class="st0" x1="117" y1="94" x2="117" y2="90"/>
</g>
<g id="LINE-408">
<line class="st0" x1="117" y1="90" x2="119" y2="90"/>
</g>
<g id="LINE-409">
<line class="st0" x1="119" y1="94" x2="117" y2="94"/>
</g>
<g id="LINE-410">
<line class="st0" x1="117" y1="4" x2="117" y2="0"/>
</g>
<g id="LINE-411">
<line class="st0" x1="119" y1="4" x2="117" y2="4"/>
</g>
<g id="LINE-412">
<line class="st0" x1="117" y1="0" x2="119" y2="0"/>
</g>
<g id="LINE-651">
<line class="st0" x1="136" y1="75" x2="136" y2="19"/>
</g>
<g id="LINE-652">
<line class="st0" x1="117" y1="0" x2="19" y2="0"/>
</g>
<g id="LINE-653">
<line class="st0" x1="0" y1="19" x2="0" y2="75"/>
</g>
<g id="LINE-654">
<line class="st0" x1="19" y1="94" x2="117" y2="94"/>
</g>
</svg>
`).then((json) => {
  console.log(json);
  fs.writeFile("magblock.json", JSON.stringify(json, null, 2), (err) => {
    if (err) {
      console.log("oops");
      console.error(err);
    }
    // file written successfully
  });
});
