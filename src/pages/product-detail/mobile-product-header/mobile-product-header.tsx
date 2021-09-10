import React,{useState,useEffect} from 'react'
import FormatMoney from '../../../utils/format-money';
import { useParams } from 'react-router-dom';
import { useActionCreators, useSelector,useRole} from '../../../hooks';
import Button from '../../../components/button';
import MobileSlider from '../../../components/mobile-slider';
import {ReactComponent as Star} from '../../../assets/icons/star-full.svg';
import  PhoneMain from '../product-detail-header/images/phoneMain.svg'
import  Phone1 from '../product-detail-header/images/phone1.svg'
import  iPhone12 from '../product-detail-header/images/iPhone12.svg'
import  Phone3 from '../product-detail-header/images/phone3.svg'
import Defaultimage from '../../../assets/images/defaultProductimage.svg';
import {ReactComponent as Heart} from '../../../assets/icons/heart2.svg'
import {ReactComponent as HeartFull} from '../../../assets/icons/heart-full2.svg'
import {
    ProductTitle,
    Reviews,
    ReviewsContainer,
    BinaryTextConatiner,
    ColorsContainer,
    PriceTitles
} from './style'
import isEmptyObj from '../../../utils/isEmptyObj';

const images = [
    {img:iPhone12},
    {img:PhoneMain},
    {img:Phone3},
    {img:iPhone12},
]

interface UseProductProps{
    product?:any
}
const MobileProductHeader:React.FC<UseProductProps> = ({product}) => {
    const { id } = useParams<any>();
    const isBuyer = useRole().userRole=='ROLE_SELLER';
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
    const heartButton = () => {
        !isBuyer && (isInWishlist
            ? removeFromWishlistHandle(item)
            : addToWishlistHandle(item))
    }
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
            <ProductTitle>{!isEmptyObj(product)?product.addProductData.name:'Apple / Смартфон iPhone 11 128GB (новая комплектация)'}</ProductTitle>

            <ReviewsContainer>
                <Reviews>
                    {/*<Star/><span>4</span> <p>(1241) отзывов</p>*/}
                </Reviews>
                <div onClick={heartButton}>
                    {!isBuyer && isInWishlist ?
                        <HeartFull style={{width:17,height:17}}/>
                        :<Heart style={{width:17,height:17}}/>}
                </div>
            </ReviewsContainer>

            <PriceTitles>{product?FormatMoney(product.addProductData.price):FormatMoney(7574000)} сум
                {/*сум <span>8 416 000 сум</span>*/}
            </PriceTitles>
            <MobileSlider items={!isEmptyObj(product)&&product.addedPhotoWithImageUrls!=null?!isEmptyObj(product)&&product.addedPhotoWithImageUrls:[{photoUrl:Defaultimage,img:"Default"}]}/>

            {/*<BinaryTextConatiner>*/}
            {/*    <p>Цвет товара:</p><span>синий</span>*/}
            {/*</BinaryTextConatiner>*/}
            {/*<ColorsContainer>*/}
            {/*    {*/}
            {/*        ["#FF4242",'#0091FF',"#22B573","#FFFFFF","#000000"].map((item,index)=>(*/}
            {/*            <div key={index} style={{background:item}}></div>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</ColorsContainer>*/}
            {/*<BinaryTextConatiner>*/}
            {/*    <p>Доставка:</p><span>25-27 апреля</span>*/}
            {/*</BinaryTextConatiner>*/}

            <BinaryTextConatiner>
                <p>Продавец:</p><span style={{color:"#264796"}}>{!isEmptyObj(product)&&product.addProductData.quantity}</span>
            </BinaryTextConatiner>
            {isBuyer
                ?<Button
                    size={"large"}
                    style={{marginTop:27}}
                    btnType="disabled"
                >Добавить в корзину</Button>
                :<Button
                    size={"large"}
                    style={{marginTop:27}}
                    btnType={isInCart?'disabled':'default'}
                    onClick={() =>isInCart ? deleteFromCartHandle(item) : addToCartHandle(item)}
                >{isInCart ? "Товар добавлен в корзину" : "Добавить в корзину"}</Button>
            }
        </>
    )
}

 export default MobileProductHeader;
