module.exports = {
    port: 2000,
    IPv4: 'localhost',
    // agentSev: 'http://101.37.173.51', //php文件上传地址
    agentSev: 'http://192.168.2.11:1780',//家校通内网地址
    // agentSev: 'http://sxt.17find.com',//家校通线上地址
    agentSevWx: 'http://192.168.2.13:8800',//随寻通内网地址
    // agentSevWx: 'http://api.17find.com',//随寻通线上地址
    // agentSev: 'http://192.168.2.165:8080',//吴生春地址
    // agentSevWY: 'http://192.168.2.216:8080',//陈文玉地址
    // agentSevCXQ: 'http://192.168.2.25:8080',//陈显强地址
    // agentIMG: 'http://101.37.77.7',//图片显示地址
    agentSevTest: 'http://www.cnzoom.com',

    getAgent: function() {
        return {
            '/server/*': {
                target: this.agentSev
            },
            '/jxt-commonbackground/*': {
                target: this.agentSev
            },
            '/jxt-nyxt/*': {
                target: this.agentSev
            },
            '/jxt-score/*': {
                target: this.agentSev
            },
            '/jxt-bbzx/*': {
                target: this.agentSev
            },
            '/jxt-api/*': {
                target: this.agentSev
            },
            '/api/*': {
                target: this.agentSev
            },
            '/thirdparty/*': {
                target: this.agentSevWx
            },
            '/teacherapp/*': {
                target: this.agentSevWx
            },
            '/banner/*': {
                target: this.agentSevWx
            },
            '/tag/*': {
                target: this.agentSevWx
            },
            '/integral/*': {
                target: this.agentSevWx
            }
        }
    },
    getIP: function() {
      try {
          const network = require('os').networkInterfaces()
          this.IPv4 = network[Object.keys(network)[0]][1].address
          if(this.IPv4.length<7)
            this.IPv4 = network[Object.keys(network)[1]][1].address
      } catch (e) {
          this.IPv4 = '127.0.0.1';
      } finally {
          const httpStr = 'http://' + this.IPv4 + ':' + this.port;
          const opn = require('opn');
          console.log(httpStr);
          setTimeout(function() {
              opn(httpStr);
          }, 20000);
          return this.IPv4;
      }
    }
}
