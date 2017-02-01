
const Mip = require('../server/Mip');

module.exports=class Article extends Mip{

    getArticleList(num=10,order='post_date desc'){

        return this.db.query(`select * from wp_posts where post_status='publish' order by ${order} limit ${num}`);

    }

    getArticleInfoById(id){

        return this.db.query(`select * from wp_posts where ID= ${id}`);

    }

}