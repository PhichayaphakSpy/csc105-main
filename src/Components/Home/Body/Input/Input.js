import React,{useState} from 'react'

import { Button, ButtonGroup } from 'reactstrap';


export const Input = ({onAdd}) => {
    const [flavor, setflavor] = useState("");
    const [additonal, setadditonal] = useState("");
    const [size, setsize] = useState("");

    const onClickHandler = () => {
        onAdd(flavor,additonal,size);
        setflavor("");
        setadditonal("");
        setsize("");
    }

    

    return (
        <div>
        <div className="step">STEP 1<span>&nbsp;&nbsp;&nbsp;&nbsp;Choose Based-flavor</span></div>
        <div className="element">
            <ButtonGroup className="element">
            <div><Button className="rounded-circle vanilla"  variant="secondary" value="Vanilla" onClick = {(e) => setflavor(e.target.value)} > </Button></div>
            <div><Button className="rounded-circle straw" variant="secondary" value="Strawberry" onClick = {(e) => setflavor(e.target.value)}></Button></div>
            <div><Button className="rounded-circle choc" variant="secondary" value="Chocolate" onClick = {(e) => setflavor(e.target.value)}></Button></div>
            <div><Button className="rounded-circle matcha" variant="secondary" value="Matcha" onClick = {(e) => setflavor(e.target.value)}></Button></div>
            <div><Button className="rounded-circle milk" variant="secondary" value="Milk" onClick = {(e) => setflavor(e.target.value)}></Button></div>
            <div><Button className="rounded-circle coffee" variant="secondary" value="Coffee" onClick = {(e) => setflavor(e.target.value)}> </Button></div>
            </ButtonGroup>  
        </div>
        <div className="step">STEP 2<span>&nbsp;&nbsp;&nbsp;&nbsp;Choose additional ingredients</span></div>
        <div className="element">
            <ButtonGroup className="element">
            <div><Button className="rounded-circle caramel" variant="secondary" value="caramel" onClick = {(e) => setadditonal(e.target.value)}> </Button></div>
            <div><Button className="rounded-circle bs" variant="secondary" value="butterscotch"onClick = {(e) => setadditonal(e.target.value)}></Button></div>
            <div><Button className="rounded-circle maple" variant="secondary" value="maple syrup"onClick = {(e) => setadditonal(e.target.value)}></Button></div>
            <div><Button className="rounded-circle chocolate" variant="secondary" value="chocolate"onClick = {(e) => setadditonal(e.target.value)}></Button></div>
            <div><Button className="rounded-circle chip" variant="secondary" value="Chocolate chip"onClick = {(e) => setadditonal(e.target.value)}></Button></div>
            <div><Button className="rounded-circle oreo" variant="secondary" value="oreo"onClick = {(e) => setadditonal(e.target.value)}></Button></div>
            <div><Button className="rounded-circle biscuit" variant="secondary" value="biscuit"onClick = {(e) => setadditonal(e.target.value)}> </Button></div>
            <div><Button className="rounded-circle rose" variant="secondary" value="rose syrup" onClick = {(e) => setadditonal(e.target.value)}> </Button></div>
            <div><Button className="rounded-circle berry" variant="secondary" value="berry syrup" onClick = {(e) => setadditonal(e.target.value)}> </Button></div>
            <div> <Button className="rounded-circle strawberry" variant="secondary" value="strawberry" onClick = {(e) => setadditonal(e.target.value)}> </Button></div>
            </ButtonGroup>  
        </div>
        <div className="step">STEP 3<span>&nbsp;&nbsp;&nbsp;&nbsp;Size</span></div>
        <div className="element3">
            <Button className="buttons" value="S" onClick = {(e) => setsize(e.target.value)}>S</Button>
            <Button className="buttons" value="M" onClick = {(e) => setsize(e.target.value)}>M</Button>
            <Button className="buttons" value = "L" onClick = {(e) => setsize(e.target.value)}>L</Button>
        </div>

        <div className="element3">
            <button className="AddToCartButton" onClick={onClickHandler}>Add to cart!</button>
        </div>
        </div>
    )
}
