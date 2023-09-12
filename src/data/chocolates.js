const chocolates = [
    {
        "id": 1,
        "name": "ButterScotch Chocolate",
        "quantity": 10,
        "image_url": "https://images.aws.nestle.recipes/original/2020_06_09T08_18_13_mrs_ImageRecipes_28693lrg.jpg",
        "price": 199
    },
    {
        "id": 2,
        "name": "Dark Chocolate",
        "quantity": 8,
        "image_url": "https://cdn.pixabay.com/photo/2022/09/24/16/10/chocolate-7476669_1280.jpg",
        "price": 139
    },
    {
        "id": 3,
        "name": "White Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        "price": 129
    },
    {
        "id": 4,
        "name": "Caramel Chocolate",
        "quantity": 12,
        "image_url": "https://images.unsplash.com/photo-1607920591413-4ec007e70023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        "price": 149
    },
    {
        "id": 5,
        "name": "Hazelnut Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1551529674-48920e9b835b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=994&q=80",
        "price": 299
    },
    {
        "id": 6,
        "name": "Mint Chocolate",
        "quantity": 9,
        "image_url": "https://images.unsplash.com/photo-1615170874642-352fa6b63751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        "price": 279
    },
    {
        "id": 7,
        "name": "Peanut Butter Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1676905188691-dca3aa1b99d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
        "price": 199
    },
    {
        "id": 8,
        "name": "Coconut Chocolate",
        "quantity": 4,
        "image_url": "https://cdn.pixabay.com/photo/2016/02/26/18/40/sweets-1224509_1280.jpg",
        "price": 189
    },
    {
        "id": 9,
        "name": "Almond Chocolate",
        "quantity": 11,
        "image_url": "https://cdn.pixabay.com/photo/2017/04/04/17/00/chocolate-2202067_1280.jpg",
        "price": 138
    },
    {
        "id": 10,
        "name": "Raspberry Chocolate",
        "quantity": 3,
        "image_url": "https://cdn.pixabay.com/photo/2018/04/08/21/13/dessert-3302502_1280.jpg",
        "price": 147
    },
    {
        "id": 11,
        "name": "Orange Chocolate",
        "quantity": 7,
        "image_url": "https://www.thespruceeats.com/thmb/T7xvrNzJYEBk7ytthdsu_b_3NbM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chocolate-dipped-candied-orange-peel-recipe-1375194-a562a318245241e18170ca41b1ec82e0.jpg",
        "price": 136
    },
    {
        "id": 12,
        "name": "Cherry Chocolate",
        "quantity": 5,
        "image_url": "https://cdn.pixabay.com/photo/2017/05/27/04/16/cherries-2347644_1280.jpg",
        "price": 141
    },
    {
        "id": 13,
        "name": "Toffee Chocolate",
        "quantity": 8,
        "image_url": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        "price": 139
    },
    {
        "id": 14,
        "name": "Cranberry Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1515347419056-fc01db3c9f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
        "price": 145
    },
    {
        "id": 15,
        "name": "Pistachio Chocolate",
        "quantity": 9,
        "image_url": "https://cdn.pixabay.com/photo/2020/03/25/12/52/chocolate-cake-4967195_1280.jpg",
        "price": 139
    },
    {
        "id": 16,
        "name": "Cappuccino Chocolate",
        "quantity": 4,
        "image_url": "https://images.unsplash.com/photo-1529077246295-f6c7172c8165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
        "price": 149
    },
    {
        "id": 17,
        "name": "Strawberry Chocolate",
        "quantity": 7,
        "image_url": "https://cdn.pixabay.com/photo/2015/07/13/00/52/brigadier-842646_1280.jpg",
        "price": 139
    },
    {
        "id": 18,
        "name": "Caramel Sea Salt Chocolate",
        "quantity": 5,
        "image_url": "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17759-chocolate-sea-salt-caramels-600x600.jpg?ext=.jpg",
        "price": 179
    },
    {
        "id": 19,
        "name": "Blueberry Chocolate",
        "quantity": 6,
        "image_url": "https://cdn.pixabay.com/photo/2020/06/02/18/55/cake-5252175_1280.jpg",
        "price": 199
    },
    {
        "id": 20,
        "name": "Chili Chocolate",
        "quantity": 3,
        "image_url": "https://cdn.pixabay.com/photo/2014/03/25/14/18/chocolate-296319_1280.jpg",
        "price": 119
    }
];

export default chocolates;
