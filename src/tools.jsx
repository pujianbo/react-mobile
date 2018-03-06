/**
 * [json转化为数据字符]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const formatParams = data => {
  var arr = [];
  for (var name in data) {
    arr.push(name + '=' + data[name]);
  }
  arr.push('time=' + new Date().getTime());
  return arr.join('&');
}
/**
 * URL获取关键字内容
 * @param keyName
 * @param newStr
 * @returns {string}
 */
export const urlKey = (keyName, newStr = location.href) => {
  var reg = new RegExp(keyName + '=([^&]*)(&|$)', 'i');
  var keyValue = reg.test(newStr)
    ? reg.exec(newStr)[1]
    : '';
  return keyValue.replace(/\s/ig, '');
};
/**
 * Ajax请求
 */
export const ajax = (config = {}) => {
  if (config.async == undefined)
    config.async = true
  var request = new XMLHttpRequest();
  var sign = config.url.indexOf('?') > -1
    ? '&'
    : '?';
  var data = formatParams(config.data)
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      var status = request.status;
      if (status == 200) {
        config.success(request.responseText);
      } else {
        if (config.fail)
          config.fail(status);
        Tips('连接网络失败');
      }
    }
  };

  if (config.type == 'post') {
    request.open('POST', config.url, config.async);
    request.send(config.data);
  } else {
    request.open('GET', config.url + sign + formatParams(config.data), config.async);
    request.send(null);
  }
}

/**
 * Tips提示消息
 * @param msg
 * @param duration
 * @constructor
 */
export let msgTout = null;
export const Tips = (msg = '未获取到信息', duration = 3) => {
  var msgObj = document.querySelector('.tips'),
    msgSpan = msgObj
      ? msgObj.querySelector('span')
      : null;
  if (msgObj == undefined) {
    msgObj = document.createElement('div');
    msgSpan = document.createElement('span');
    msgObj.appendChild(msgSpan);
    msgObj.className = 'tips';
    document.body.appendChild(msgObj);
  }
  msgSpan.innerHTML = msg;
  msgObj.style.bottom = '10rem';
  msgObj.style.display = 'block';
  setTimeout(() => {
    msgObj.style.bottom = '11rem';
    msgObj.style.opacity = '1';
  }, 10);
  clearTimeout(msgTout);
  if (duration == 0)
    return;
  if (msg == '关闭')
    msgObj.style.display = 'none';
  msgTout = setTimeout(function() {
    msgObj.style.display = 'none';
    msgObj.style.bottom = '10rem';
    msgObj.style.opacity = '0';
  }, duration * 1000);
};
