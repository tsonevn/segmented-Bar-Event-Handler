var observableModule = require("data/observable");
var observableObject = new observableModule.Observable();
var SegmentedBarModule =require("ui/segmented-bar");


exports.load=function(args){
    var page = args.object;
    
    var segmentedbar =  page.getViewById("segmentedBarId");
    
    var contextObj = new observableModule.Observable();
    contextObj.set("segmentedBarIndex", 1);
    
    page.bindingContext = contextObj;
   
   
   contextObj.addEventListener(observableModule.Observable.propertyChangeEvent, function (event) {
        console.log('The object changed!');
        console.log('Event:        ' + event.eventName);
        console.log('propertyName: ' + event.propertyName);
        console.log('New value:     ' + event.value);
        console.log('')
    });
    
     console.log(segmentedbar.selectedIndex);
        segmentedbar.on(SegmentedBarModule.SegmentedBar.selectedIndexChangedEvent, function(args){
        console.log(args.newIndex);
    });

}

