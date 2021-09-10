import React,{useState} from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize';
import isEmptyObj from '../../../utils/isEmptyObj';
import ProductTitle from '../../../components/products-title';
import {
    WrapperContainer,
    CharacterContainer,
    CharacterText,
    Dots,
    SizeText,
    HandeleOpen, MobileContainer
} from './style';

interface Propses {
    product?:any;
}

const Characteristic:React.FC<Propses> = ({product}) => {
    const [characters,setCharacters] = useState<boolean>(false)
    const [width,height] = useWindowSize();

    return (
        <div>
            <Products product={product} isOpen={characters}/>

            <HandeleOpen onClick={()=>setCharacters(open=>!open)}>
                {characters?"Свернуть характеристики":"Развернуть характеристики"}
            </HandeleOpen>
        </div>
    )
}
export default Characteristic;




interface ProductsProps {
    product?:any;
    isOpen?:boolean
}

const Products:React.FC<ProductsProps> = ({product,isOpen}) => {
    const deep = product && product;
    const [width,height] = useWindowSize();


    return(
        <>
            <ProductTitle title={!isEmptyObj(deep) && deep.name}/>
            <WrapperContainer>
            {width>768 ?
                <>
                    <div>
                        {!isEmptyObj(deep)&&deep.fields.map((item:any,index:number)=>(
                            <CharacterContainer key={index} style={{display:"flex"}}>
                                <CharacterText>{item.name}</CharacterText>
                                <Dots></Dots>
                            </CharacterContainer>

                        ))}
                    </div>
                    <div>
                        {!isEmptyObj(deep)&&deep.fields.map((item:any)=>(
                            <SizeText key={item.id}>{item.format=="REFERENCE"?item.selectedName:item.value}</SizeText>
                        ))}
                    </div>
                </>
                :<>
                {!isEmptyObj(deep)&&deep.fields.map((item:any)=>(
                    <MobileContainer key={item.id}>
                        <CharacterText>{item.name}</CharacterText>
                        <SizeText >{item.format=="REFERENCE"?item.selectedName:item.value}</SizeText>
                    </MobileContainer>
                ))}
                </>}
            </WrapperContainer>

            {isOpen && (!isEmptyObj(deep) && deep.products.length>0 && deep.products.map((item:any)=><Products product={item}/>))}

        </>
    );
}