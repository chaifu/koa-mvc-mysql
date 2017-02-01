
var Mip = require('../../server/Mip');

module.exports=class about extends Mip {
    about(){
        var title = '关于我';
        var about = 'QQ:380822670';
        this.assign('title',title);
        this.assign('about',about);
        return this.fetch('about/about');
    }
}