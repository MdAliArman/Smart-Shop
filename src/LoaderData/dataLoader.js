import { getStoredCart } from "../utils/fakeDB";

export const dataLoader=async()=>{
    const productData= await fetch('products.json');
    const product= await productData.json();

const saveCart=getStoredCart();
    const initialCart=[]

    for(const id in saveCart){
        const foundProduct=product.find(pd=>pd.id=== id);
        if(foundProduct){
            const quantity=saveCart[id];
            foundProduct.quantity=quantity
            initialCart.push(foundProduct)
        }
    }

return { product, initialCart};
}