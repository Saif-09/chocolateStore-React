const chocolates = [
    {
        "name": "ButterScotch Chocolate",
        "quantity": 10,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 125.99
    },
    {
        "name": "Dark Chocolate",
        "quantity": 8,
        "image_url": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        "price": 135.49
    },
    {
        "name": "White Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 120.79
    },
    {
        "name": "Caramel Chocolate",
        "quantity": 12,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 149.99
    },
    {
        "name": "Hazelnut Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 142.29
    },
    {
        "name": "Mint Chocolate",
        "quantity": 9,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 133.59
    },
    {
        "name": "Peanut Butter Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 127.79
    },
    {
        "name": "Coconut Chocolate",
        "quantity": 4,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 144.49
    },
    {
        "name": "Almond Chocolate",
        "quantity": 11,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 138.89
    },
    {
        "name": "Raspberry Chocolate",
        "quantity": 3,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 147.09
    },
    {
        "name": "Orange Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 136.69
    },
    {
        "name": "Cherry Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 141.19
    },
    {
        "name": "Toffee Chocolate",
        "quantity": 8,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 139.99
    },
    {
        "name": "Cranberry Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 145.29
    },
    {
        "name": "Pistachio Chocolate",
        "quantity": 9,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 137.79
    },
    {
        "name": "Cappuccino Chocolate",
        "quantity": 4,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 147.09
    },
    {
        "name": "Strawberry Chocolate",
        "quantity": 7,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 138.89
    },
    {
        "name": "Caramel Sea Salt Chocolate",
        "quantity": 5,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 144.49
    },
    {
        "name": "Blueberry Chocolate",
        "quantity": 6,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 136.69
    },
    {
        "name": "Chili Chocolate",
        "quantity": 3,
        "image_url": "https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
        "price": 141.19
    }
]


export default chocolates;