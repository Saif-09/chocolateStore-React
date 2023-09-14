//I have used ContextAPI in  my code to make code cleaner and maintainable, context api make it easy to handle state management, I have to update the value of cart, total price and individual quantity of each chocolate, so i used context API.
//When the user selects the chocolate then he will not add more than 8 chocolates in the cart, as per requirement in assesment i have made functionality that when user add more than 8 chocolate then it will give alert that user cannot add more than this.
import { createContext, useState, useContext } from "react";

// Create a context for storing cart-related data
const itemContext = createContext();

// Custom hook to access the context's value
const useValue = () => {
    const value = useContext(itemContext);
    return value;
}

// Context provider component for managing cart state
const ChocoContext = ({ children }) => {
    // State variables to manage cart data
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [cart, setCart] = useState([]);
    const [qty, SetQty] = useState(0);

    // Function to add a product to the cart
    const handleAdd = (prod) => {
        if (cart.length < 8) {
            console.log('inside handleAdd');
            console.log('first', cart);

            // Find the index of the product in the cart
            const index = cart.findIndex((item) => item.id === prod.id);
            console.log('second', cart);
            console.log('index', index);

            if (index === -1) {
                // If the product is not in the cart, add it with a quantity of 1
                setCart([...cart, { ...prod, qty: 1 }]);
                setTotal(total + prod.price);
            } else if (cart.reduce((acc, item) => acc + item.qty, 0) < 8) {
                // If the product is already in the cart, increment its quantity
                const updatedCart = [...cart];
                updatedCart[index].qty++;
                SetQty(updatedCart[index].qty);
                setCart(updatedCart);
                setTotal(total + prod.price);
            } else {
                // If the custom pack is full, show an alert
                alert('Custom pack is full. You cannot add more items.');
                return;
            }
            setItem(item + 1);
        } else {
            // If the custom pack is full, show an alert
            alert('Custom pack is full. You cannot add more items.');
            return;
        }
    }

    // Function to remove a product from the cart
    const handleRemove = (prod) => {
        const index = cart.findIndex((item) => item.id === prod.id);

        if (index !== -1 && cart[index].qty > 0) {
            const updatedCart = [...cart];
            updatedCart[index].qty--;
            setItem(item - 1);
            setTotal(total - cart[index].price);
            if (cart[index].qty === 0) {
                updatedCart.splice(index, 1);
            }
            setCart(updatedCart);
        }
    };

    // Provide cart-related data to child components using the context
    return (
        <itemContext.Provider value={{ total, item, handleAdd, handleRemove, qty, cart }}>
            {children}
        </itemContext.Provider>
    )
}

export default ChocoContext;
export { useValue };
