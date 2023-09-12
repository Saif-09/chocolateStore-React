const chocolates = [
    {
        "id": 1,
        "name": "ButterScotch Chocolate",
        "quantity": 10,
        "image_url": "https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        "price": 125
    },
    {
        "id": 2,
        "name": "Dark Chocolate",
        "quantity": 8,
        "image_url": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        "price": 135
    },
    {
        "id": 3,
        "name": "White Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        "price": 120
    },
    {
        "id": 4,
        "name": "Caramel Chocolate",
        "quantity": 12,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 149
    },
    {
        "id": 5,
        "name": "Hazelnut Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 142
    },
    {
        "id": 6,
        "name": "Mint Chocolate",
        "quantity": 9,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 133
    },
    {
        "id": 7,
        "name": "Peanut Butter Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 127
    },
    {
        "id": 8,
        "name": "Coconut Chocolate",
        "quantity": 4,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 144
    },
    {
        "id": 9,
        "name": "Almond Chocolate",
        "quantity": 11,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 138
    },
    {
        "id": 10,
        "name": "Raspberry Chocolate",
        "quantity": 3,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 147
    },
    {
        "id": 11,
        "name": "Orange Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 136
    },
    {
        "id": 12,
        "name": "Cherry Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 141
    },
    {
        "id": 13,
        "name": "Toffee Chocolate",
        "quantity": 8,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 139
    },
    {
        "id": 14,
        "name": "Cranberry Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 145
    },
    {
        "id": 15,
        "name": "Pistachio Chocolate",
        "quantity": 9,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 139
    },
    {
        "id": 16,
        "name": "Cappuccino Chocolate",
        "quantity": 4,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 149
    },
    {
        "id": 17,
        "name": "Strawberry Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 139
    },
    {
        "id": 18,
        "name": "Caramel Sea Salt Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 179
    },
    {
        "id": 19,
        "name": "Blueberry Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 199
    },
    {
        "id": 20,
        "name": "Chili Chocolate",
        "quantity": 3,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 119
    }
];

export default chocolates;
