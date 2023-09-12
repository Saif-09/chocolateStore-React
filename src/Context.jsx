import { createContext, useState, useContext } from "react";

const itemContext = createContext();

const useValue = () => {
    const value = useContext(itemContext)
    return value;
}

const ChocoContext = ({ children }) => {

    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [cart, setCart] = useState([]);
    const [qty, SetQty] = useState(0)

    const handleAdd = (prod) => {
        if(cart.length<8){
        console.log('inside handleAdd');
        console.log('first',cart)
        const index = cart.findIndex((item) => item.id === prod.id);
        console.log('second',cart)
        console.log('index',index)
        

        if (index === -1) {
            setCart([...cart, { ...prod, qty: 1 }]);
            setTotal(total + prod.price);
        } else if(cart.reduce((acc, item) => acc + item.qty, 0) < 8){
            const updatedCart = [...cart];
            updatedCart[index].qty++;
             SetQty(updatedCart[index].qty)
            setCart(updatedCart);
            setTotal(total + prod.price);
        }else {
            
            alert('Custom pack is full. You cannot add more items.');
            return
        }
        setItem(item + 1);
    }else{
        alert('Custom pack is full. You cannot add more items.');
        return
    }

}


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



    return (
        <itemContext.Provider value={{ total, item, handleAdd, handleRemove,qty ,cart}}>
            {children}
        </itemContext.Provider>
    )
}
export default ChocoContext;
export { useValue };