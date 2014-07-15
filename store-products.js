
function Review(inputStars,inputBody,inputAuthor)
{
    this.stars=inputStars;
    this.body=inputBody
    this.author=inputAuthor
}

this.AppConstructor=function ()
{
    var app = angular.module('store-products', [ ]);
    app.directive('productTitle',function()
    {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'};
    });

    //html的Element在使用時是用product-panels (中間字段有大寫前面加上'-' )
    app.directive('productPanels',function()
    {
        return {
            restrict: 'E',
            templateUrl: 'productPanels.html',
            //將panelController當作controller
            controller:this.panelController,
            //使用別名'panel'
            controllerAs:'panel'
        };
    });

    //原 panelController
    this.panelController=function()
    {
        //controller內的屬性一有變動就會自動檢查html與controller有綁定方法的元素
        //所以只需 將html 元素 與 controll綁定就好 不用擔心何時觸發
        //這部分 是否有人可以幫忙補充?
        this.tabIndex = 1;
        this.selectTab = function(setTab) {
            this.tabIndex = setTab;
        }

        //判斷選擇的頁面 是否 等於 該tabIndex
        this.isSelected = function(checkTab){
            return this.tabIndex === checkTab;
        };
    }
}



this.AppConstructor()