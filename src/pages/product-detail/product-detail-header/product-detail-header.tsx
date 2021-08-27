import React, { useState, useEffect } from 'react';
import StarRaiting from '../../../components/star-rating';
import FormatMoney from '../../../utils/format-money';
import Button from '../../../components/button';
import { useParams } from 'react-router-dom';
import { useActionCreators, useRole, useSelector } from '../../../hooks';
import { useWindowSize } from '../../../hooks/useWindowSize';
import PhoneMain from './images/phoneMain.svg';
import Phone1 from './images/phone1.svg';
import Phone2 from './images/phone2.svg';
import Phone3 from './images/phone3.svg';
import Phone4 from './images/phone4.svg';
import Phone5 from './images/phone5.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart2.svg';
import { ReactComponent as HeartFull } from '../../../assets/icons/heart-full2.svg';
import {
    DetailHeaderContainer,
    LeftPictureContainer,
    MainPicture,
    ProductInformation,
    PicturesItem,
    InfoTitleContainer,
    RatingContainer,
    NewPrice,
    OldPrice,
    BinaryTextConatiner,
    ColorsContainer

} from './style';

const images = [
    { img: Phone1 },
    { img: Phone2 },
    { img: Phone3 },
    { img: Phone4 },
    { img: Phone5 }
];
const ProductDetailHeader = () => {
    const { id } = useParams<any>();
    const isBuyer = useRole().userRole == 'ROLE_SELLER';
    const [mainImage, setMainImage] = useState();
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [width, height] = useWindowSize();
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

    const starRaitingResult = (num: number) => {
        console.log('num-star----->', num);
    };
    const setMainPicture = (item: any) => {
        setMainImage(item);
    };
    const heartButton = () => {
        !isBuyer && (isInWishlist
            ? removeFromWishlistHandle(item)
            : addToWishlistHandle(item));
    };
    const item = {
        'id': id,
        'route': '/catalog/details/samsung-6063033fb1a9f83cc5c612330',
        'name': 'Apple / Смартфон iPhone 11 128GB (новая комплектация)',
        'images': [
            PhoneMain
        ],
        'priceResponse': {
            'value': '7574000',
            'currency': {
                'id': '6063033fb1a9f83cc5c612330',
                'name': 'Uzbekistan Sum',
                'shortName': 'сум',
                'code': 860,
                'format': 2
            }
        }
    };

    return (
        <DetailHeaderContainer>
            <LeftPictureContainer>
                {
                    images.map((item, index) => (
                        <PicturesItem key={index} onClick={() => setMainPicture(item.img)}>
                            <div><img src={item.img} alt='phone' /></div>
                        </PicturesItem>
                    ))
                }
            </LeftPictureContainer>
            <MainPicture>
                <div>
                    <img src={mainImage || PhoneMain} alt='phone' />
                </div>
            </MainPicture>
            <ProductInformation>
                <InfoTitleContainer>
                    <p>Apple / Смартфон iPhone 11 128GB (новая комплектация)</p>
                    <div onClick={heartButton}>
                        {!isBuyer && isInWishlist ?
                            <HeartFull style={{ width: 17, height: 17 }} />
                            : <Heart style={{ width: 17, height: 17 }} />}
                    </div>
                </InfoTitleContainer>
                <RatingContainer>
                    <StarRaiting callback={starRaitingResult} />
                    <p>(1241)отзывов</p>
                </RatingContainer>
                <NewPrice>{FormatMoney(7574000)} сум</NewPrice>
                <OldPrice>{FormatMoney(8416000)} сум</OldPrice>
                <BinaryTextConatiner>
                    <p>Цвет товара:</p><span>синий</span>
                </BinaryTextConatiner>
                <ColorsContainer>
                    {
                        ['#FF4242', '#0091FF', '#22B573', '#FFFFFF', '#000000'].map((item, index) => (
                            <div key={index} style={{ background: item }}></div>
                        ))
                    }
                </ColorsContainer>
                <BinaryTextConatiner>
                    <p>Доставка:</p><span>25-27 апреля</span>
                </BinaryTextConatiner>
                <BinaryTextConatiner>
                    <p>Продавец:</p><span style={{ color: '#264796' }}>Marketplace ООО</span>
                </BinaryTextConatiner>
                {isBuyer
                    ? <Button
                        size={'medium'}
                        style={{ marginTop: 27 }}
                        btnType='disabled'
                    >Добавить в корзину</Button>
                    : <Button
                        size={'medium'}
                        style={{ marginTop: 27 }}
                        btnType={isInCart ? 'disabled' : 'default'}
                        onClick={() => isInCart ? deleteFromCartHandle(item) : addToCartHandle(item)}
                    >{isInCart ? 'Товар добавлен в корзину' : 'Добавить в корзину'}</Button>
                }
            </ProductInformation>

        </DetailHeaderContainer>
    );
};

export default ProductDetailHeader;
