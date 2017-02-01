module.exports={
    //控制器配置区域
    app:{
        isDirectory:false,//是否控制器增加分类目录规划 如：home为pc端目录 API为移动端接口目录
        isModuleName:false,//是否开启模块名称显示在url路径中
    },
    //数据库配置区域
    dbOptions:{
        host : 'localhost',
        port : 3306 ,
        database : 'xxx',
        user: 'root',
        password : 'xxx'
    },
}