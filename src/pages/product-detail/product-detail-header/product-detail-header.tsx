import React,{useState} from 'react'
import StarRaiting from '../../../components/star-rating';
import FormatMoney from '../../../utils/format-money';
import Button from '../../../components/button';
import  PhoneMain from './images/phoneMain.svg'
import  Phone1 from './images/phone1.svg'
import  Phone2 from './images/phone2.svg'
import  Phone3 from './images/phone3.svg'
import  Phone4 from './images/phone4.svg'
import  Phone5 from './images/phone5.svg'
import {ReactComponent as Heart} from '../../../assets/icons/heart2.svg'
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


} from './style'

const images = [
    {img:Phone1},
    {img:Phone2},
    {img:Phone3},
    {img:Phone4},
    {img:Phone5},
]
const  ProductDetailHeader = () => {
    const [mainImage,setMainImage] = useState();
    const starRaitingResult = (num:number) => {
        console.log("num-star----->",num)
    }
    const setMainPicture = (item:any) => {
        setMainImage(item);
    }
    return (
        <DetailHeaderContainer>
            <LeftPictureContainer>
                {
                    images.map((item,index)=>(
                        <PicturesItem key={index} onClick={()=> setMainPicture(item.img)}>
                            <div><img src={item.img} alt="phone"/></div>
                        </PicturesItem>    
                    ))
                }
            </LeftPictureContainer>
            <MainPicture>
                <div>
                    <img src={mainImage||PhoneMain} alt="phone"/>
                </div>
            </MainPicture>
            <ProductInformation>
                <InfoTitleContainer>
                    <p>Apple / Смартфон iPhone 11 128GB (новая комплектация)</p>
                    <Heart/>
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
                <Button style={{marginTop:27}}>Добавить в корзину</Button>
            </ProductInformation>
            
        </DetailHeaderContainer>
    )
}

export default ProductDetailHeader