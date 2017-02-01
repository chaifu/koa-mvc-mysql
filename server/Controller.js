
module.exports=class Controller {
    constructor() {
        var assignData={};
        this.assign =function(dataKey,dataVal){
            assignData[dataKey] = dataVal;
            return assignData;
        }
        this.fetch = function(tplPath){
            return {tplPath:tplPath,data:assignData}
        }
    }
   
}