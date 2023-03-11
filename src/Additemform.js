import Input from './Input'
import classes from './Input.module.css'
import { useRef } from 'react'
const Additemform=(props)=>{
    const amountInputRef=useRef()
    const submitHandler=event =>{
        event.preventDefault()
        const Medname=amountInputRef.current.value
        
        props.onAddToCart(Medname)
        const medprice=amountInputRef.current.value
        const Medprice = +medprice
        props.onAddToCart(Medprice)
        const medcount=amountInputRef.current.value
        const Medcount = +medcount
        props.onAddToCart(Medcount)
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <h1>Medname</h1>
    <Input
    ref={amountInputRef}
    label='medname' input={{id:'number',type:'text',min:1,defaultValue :1}}/>
      <h1>Medprice</h1>
    <Input
    ref={amountInputRef}
    label='medprice' input={{id:'number',type:'number',min:1,defaultValue :1}}/>
      <h1>Medquantity</h1>
    <Input
    ref={amountInputRef}
    label='medcount' input={{id:'number',type:'number',min:1,defaultValue :1}}/>
    <h1>Medid</h1>
    <Input
    ref={amountInputRef}
    label='medcount' input={{id:'number',type:'number',min:1,defaultValue :1}}/>
        <button>+ Add Item</button>
    </form>
}
export default Additemform