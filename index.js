'use strict';

var koa = require('koa');
var route = require('koa-route');
const bodyParser = require('koa-bodyparser');
var app = koa();
const config=require('./server/config');
var U = '';
var MOD='';
var CTR='';
var ACT='';
var DIR='';
var render = require('koa-ejs');
var path = require('path');

app.use(bodyParser());
render(app, {
    root: path.join(__dirname, 'template'),
    layout: '',
    viewExt: 'html',
    cache: false,
    debug: true
});
app.use(function *(next){
   U =this.request.url;

    if(config.app.isModuleName){
        //待开发
    }else{
        if(U=='/favicon.ico'){return false;}
        if(U=='/'){
            U='index/index';
            ACT = 'index';
        }else{
            U = U.substring(1);
            if(U.substr(U.length-1,1)=='/'){
                U = U.substring(0,U.length-1);
            }
            U = U.split("/");
            switch(U.length){
                case 1:
                    MOD=U[0];
                    CTR=U[0];
                    ACT=U[0];
                break;
                case 2:
                    MOD=U[0];
                    CTR=U[0];
                    ACT=U[1];
                    if(new RegExp("^[0-9]*$").test(ACT)){
                       ACT='detail';
                    }
                break;
                case 3:
                    MOD=U[0];
                    CTR=U[0];
                    ACT=U[1];
                break;
            }
            U=MOD+'/'+CTR;
        }
   }

    //载入控制器内容
    var controller =require('./app/'+U);
    // 实例化 控制器导出的内容
    var p = new controller();
    // 解析方法
    var tplData=yield p[ACT]();
    yield this.render(tplData.tplPath,tplData.data)
    yield next;
});
// 错误处理
app.on('error', function(err, ctx) {
    console.log(err);
});
app.listen(3000);

 