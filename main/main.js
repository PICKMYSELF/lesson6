const loadAllItems = require('./loadAllItems.js');

module.exports = function main (inputs) { 
    var detaild_list = '***<没钱赚商店>购物清单***';  
    var sum = 0;  
    for (var i = 0; i < inputs.length; i ++) {  
        detaild_list = detaild_list + '\n' + '名称:' + inputs[i].name + ',' + '数量:' + inputs[i].count + inputs[i].unit + 
        ',' + '单价:' + inputs[i].price + '.00' + '(元)' + ',' + '小计:' + inputs[i].count * inputs[i].price + '.00' + '(元)';  
        
        sum += inputs[i].count * inputs[i].price;  
    }  
    return detaild_list + '\n' + '----------------------' + '\n' + '总计:' + sum + '.00' + '(元)' + '\n' + '**********************';
};
