var Controllers = require('./Controller');
const wrapper = require('co-mysql'),
	  mysql   = require('mysql');
const config  = require('./config');
const pool    = mysql.createPool(config.dbOptions);
module.exports=class Mip extends Controllers {
    constructor(){
        super();
        this.db= wrapper(pool);
    }
}