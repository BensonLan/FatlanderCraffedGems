
//建構
this.AppConstructor=function AppConstructor()
{
   var app = angular.module('store', ['store-products']);

    app.controller('StoreController', function()
    {
        this.products=gems;
    });

    app.controller("ReviewController",function(){

        //init
        this.review =new Review(1,'','');

        //when Submit doing
        this.addReview=function(product) {
            product.reviews.push(this.review);
            this.review =new Review(1,'','');
        };
    } );




    var gems=[
        {
            name:'Dodecahedron',
            price:5.95,
            description:'Some gems have hidden qualities beyond their luster,beyond their shine...Dodeca is one of those gems.',
            date:1388123412323,
            img:'http://content.screencast.com/users/BensonLan/folders/Jing/media/3244f630-438f-42ea-9f1f-cd8645b3f024/2014-07-10_1510.png',

            //新增回覆屬性
            reviews:[
                new Review(3,'I love this product!','I love this product!','Benson@hotmail.com')                ,
                new Review(5,'good for you!','tom@yahoo.com.tw')

            ]
        },
        {
            name:'pentagonalGem',
            price:5,
            description:'Some gems have hidden qualities beyond their luster,beyond their shine...Dodeca is one of those gems.',
            date:1288123412323,
            img:'http://content.screencast.com/users/BensonLan/folders/Jing/media/f6c03fe4-6d0a-421f-904e-9ad3890ed755/2014-07-10_1511.png',
            reviews:[
                new Review(1,'good for you!','joe@yahoo.com.tw')
                ,
                new Review(5,'cheap!','tom@yahoo.com.tw')
            ]
        },
        {
            name:'redGem',
            price:3.85,
            description:'Red.',
            date:1299123412323,
            img:'http://content.screencast.com/users/BensonLan/folders/Jing/media/ea8c267d-032d-4d54-b9a4-cb5861e2c7ca/2014-07-10_1512.png',
            reviews:[
                new Review(4,'well done!','amber@yahoo.com.tw')
                ,
                new Review(5,'pretty!','mark@yahoo.com.tw')

            ]

        }
        ,
        {
            name:'bigGem',
            price:3.20,
            description:'big',
            date:132123412323,
            img:' http://content.screencast.com/users/BensonLan/folders/Jing/media/c8d1f866-8cc0-4475-84e5-b671176367e2/2014-07-10_1512.png',
            reviews:[
                new Review(3,'oh my god!','san@yahoo.com.tw')
                ,
                new Review(2,'i want it!','qq@yahoo.com.tw')
            ]
        }
    ]

}

this.AppConstructor()