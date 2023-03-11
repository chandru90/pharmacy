import Additemform from "./Additemform"

const Addmeditem =(props)=>{
   
    const cartCtx = useContext(CartContext)
    
    const addToCartHandler=(amount)=>{
     cartCtx.addItem({
         id :props.id,
         name: props.name,
         amount:amount,
         price:props.price
       }  )
   
    }
       
   
   const meditems=dummymed.map((item)=><Additemform><li> id={item.id}  name={item.name} price={item.price} count={item.count}</li></Additemform>)

    return<ul>
        <div> {meditems}</div>
    </ul>
      
        
        
    
     
}
export default Addmeditem
