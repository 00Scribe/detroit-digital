/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'tiger_legend',
            type:'image',
            rect:['78%','455px','19%','125px','auto','auto'],
            fill:["rgba(0,0,0,0)",'tiger_legend.png','0px','0px','100%','100%']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_tiger_legend}": [
            ["style", "top", '455px'],
            ["style", "height", '125px'],
            ["style", "left", '78%'],
            ["style", "width", '19%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-88968000");
