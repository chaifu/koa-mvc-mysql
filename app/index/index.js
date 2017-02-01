var Mip= require('../../server/Mip')
 
module.exports=class index extends Mip {
	
 index(){

    return this.fetch('index/index');

    }

}
