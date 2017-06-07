const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    var allItems = loadAllItems();  //所有商品的清单
    var itemsNums = []; //所有商品的清单中，每类商品对应的购买数量
    var actualPay = []; //所有商品的清单中，每类商品对应的总价钱
    for (var i = 0; i < allItems.length; i ++) {
        itemsNums[i] = 0;
        actualPay[i] = 0;
    }
    
    //计算购物清单中，相同类别商品的数量
    for (var i = 0; i < inputs.length; i ++) {
        for (var j = 0; j < allItems.length; j ++) {
            if (inputs[i] === allItems[j].barcode){
                itemsNums[j] += 1;
            }
        }
     }
    
    //计算每类商品的总价钱
    for (var i = 0; i < allItems.length; i ++) {
        actualPay[i] = allItems[i].price * itemsNums[i];
    }    
    
    //开始打印清单
    var expectText = '***<没钱赚商店>购物清单***\n';     //清单内容
    //打印每类商品总价格
    for (var i = 0; i < itemsNums.length; i ++) {
        if (itemsNums[i] != 0) {
            expectText = expectText + '名称：' + allItems[i].name + '，数量：' + itemsNums[i] + allItems[i].unit +
            '，单价：' + (allItems[i].price).toFixed(2) + '(元)，小计：' + (actualPay[i]).toFixed(2)+ '(元)\n';
        }
    }
    
    expectText = expectText + '----------------------\n';
    
    //计算所有商品的总价格
    var totalPay = 0;
    for (var i = 0; i < actualPay.length; i++){
        totalPay += actualPay[i]; 
    }
    
    //打印所有商品的总价格
    expectText = expectText + '总计：' + totalPay.toFixed(2) + '(元)\n' + '**********************';
    return expectText;
}
