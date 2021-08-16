import React,{useState,useEffect} from 'react'
import FormatMoney from '../../../utils/format-money';
import Button from '../../../components/button';
import { useParams } from 'react-router-dom';
import { useActionCreators, useSelector} from '../../../hooks';
import {useWindowSize} from '../../../hooks/useWindowSize';
import MobileSlider from '../../../components/mobile-slider';
import {ReactComponent as Star} from '../../../assets/icons/star-full.svg';
import  PhoneMain from '../product-detail-header/images/phoneMain.svg'
import  Phone1 from '../product-detail-header/images/phone1.svg'
import  iPhone12 from '../product-detail-header/images/iPhone12.svg'
import  Phone3 from '../product-detail-header/images/phone3.svg'
import {ReactComponent as Heart} from '../../../assets/icons/heart2.svg'
import {ReactComponent as HeartFull} from '../../../assets/icons/heart-full2.svg'
import {
    ProductTitle,
    Reviews,
    ReviewsContainer,
    BinaryTextConatiner,
    ColorsContainer

} from './style'

const images = [
    {img:iPhone12},
    {img:PhoneMain},
    {img:Phone3},
    {img:iPhone12},
]

const MobileProductHeader = () => {
    const { id } = useParams<any>();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCart, setIsInCart] = useState(false);
    const { addToCart, removeCart, addToWishlist, removeWishlist } = useActionCreators();
    const { cartItems } = useSelector((state) => state.cart);
    const addToCartHandle = (item: any) => {
        addToCart(item);
        setIsInCart(!isInCart);
    };
    useEffect(() => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === item.id) {
                setIsInCart(true);
            }
        }

    }, []);
    const deleteFromCartHandle = (item: any) => {
        removeCart(item);
        setIsInCart(!isInCart);
    };

    const addToWishlistHandle = (item: any) => {
        setIsInWishlist(!isInWishlist);
        addToWishlist(item);
    };

    const removeFromWishlistHandle = (item: any) => {
        setIsInWishlist(!isInWishlist);
        removeWishlist(item);
    };
    const item = {
        "id": id,
        "route": "/catalog/details/samsung-6063033fb1a9f83cc5c612330",
        "name": "Apple / Смартфон iPhone 11 128GB (новая комплектация)",
        "images": [
            PhoneMain
        ],
        "priceResponse": {
            "value": "7574000",
            "currency": {
                "id": "6063033fb1a9f83cc5c612330",
                "name": "Uzbekistan Sum",
                "shortName": "сум",
                "code": 860,
                "format": 2
            }
        }
    }
    return(
        <>
            <ProductTitle>Apple / Смартфон iPhone 11 128GB (новая комплектация)</ProductTitle>
            <ReviewsContainer>
                <Reviews><Star/><span>4</span> <p>(1241) отзывов</p></Reviews>
                <div
                    onClick={() =>
                        isInWishlist
                            ? removeFromWishlistHandle(item)
                            : addToWishlistHandle(item)
                    }
                >{isInWishlist ?<HeartFull style={{width:17,height:17}}/>:<Heart style={{width:17,height:17}}/>}</div>

            </ReviewsContainer>
            <MobileSlider items={images}/>
            <BinaryTextConatiner>
                <p>Цвет товара:</p><span>синий</span>
            </BinaryTextConatiner>
            <ColorsContainer>
                {
                    ["#FF4242",'#0091FF',"#22B573","#FFFFFF","#000000"].map((item,index)=>(
                        <div key={index} style={{background:item}}></div>
                    ))
                }
            </ColorsContainer>
            <BinaryTextConatiner>
                <p>Доставка:</p><span>25-27 апреля</span>
            </BinaryTextConatiner>
            <BinaryTextConatiner>
                <p>Продавец:</p><span style={{color:"#264796"}}>Marketplace ООО</span>
            </BinaryTextConatiner>
            {isInCart
                ?<Button size={"large"} style={{marginTop:27}} btnType="disabled">Товар добавлен в корзину</Button>
                :<Button size={"large"}  style={{marginTop:27}} onClick={() =>
                    isInCart ? deleteFromCartHandle(item) : addToCartHandle(item)}
                >{isInCart ? "Товар добавлен в корзину" : "Добавить в корзину"}</Button>
            }
        </>
    )
}

 export default MobileProductHeader;