import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useParams } from 'react-router-dom';

import ReklamaMobileApp from '../../components/reklama-mobile-app';
import Container from '../../components/grid/container';
import ProductsTitle from '../../components/products-title';
import ProductDetailHeader from './product-detail-header';
import Characteristic from './characteristic';
import Testimonial from './testimonial';
import Slider from '../../components/slider';

import { TabBarHead, DescriptionText, Cont } from './style';
import MobileProductHeader from './mobile-product-header';

import { axios } from '../../hooks';

import CardImage from '../../assets/images/card-item1.png';
import CardImage2 from '../../assets/images/card-item2.png';
import CardImage3 from '../../assets/images/card-item3.png';
import CardImage4 from '../../assets/images/card-item4.png';
import CardImage5 from '../../assets/images/card-item5.png';
import CardImage6 from '../../assets/images/card-item6.png';
import CardImage7 from '../../assets/images/card-item7.png';
import CardImage8 from '../../assets/images/card-item8.png';
import CardImage9 from '../product-detail/product-detail-header/images/phoneMain.svg';

const data = [
  {
    id: '6063033fb1a9f83cc5c612330',
    route: '/catalog/details/samsung-6063033fb1a9f83cc5c612330',
    name: 'Apple / Смартфон iPhone 11 128GB (новая комплектация)',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage9
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '7574000',
      currency: {
        id: '6063033fb1a9f83cc5c612330',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },


  
  {
    id: '6063033fb1a9f83cc5c61050',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Умные часы Samsung Galaxy Watch Active2...',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '9148000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '6063033fb1a9f83cc5c123120',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Adidas / Мяч TEAM TrainingPr.',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage2
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '206049',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '6063033fb1a9f83cc523423',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Apple / Медиаплеер Apple TV 32GB...',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage3
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '1849000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },

  {
    id: '606dfsd83cc52sd3423',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Adidas / Кроссовки D Rose 773 2020...',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage4
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '629000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgreteewwsd3423',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'PUMA / Сникеры Puma Backcourt Mid',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage5
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '682900',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgretee36343643',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Apple / Смартфон iPhone 12 Pro 128GB',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage6
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '12798000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgretee3634453643',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Apple / Наушники AirPods Pro с беспроводным...',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage7
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '2572000 ',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgretee3avcc3443',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Sweet Baby / Прогулочная коляска... ',
    addedPhotoWithImageUrls: [{
        photoUrl:CardImage8
    }],
    addProductData:{
        name:"Iphone"
    },
    priceResponse: {
      value: '2085000 ',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
];


interface UseParams{
    id: string,
    name: string
}

const ProductDetail = () => {
    const [width, height] = useWindowSize();
    const {id, name} = useParams<UseParams>();
    const [product,setProduct] = useState<any>();

    const [tabBar, setTabBar] = useState({
        item1: true,
        item2: false,
        item3: false
    });

    const tabBar1 = () => {
        setTabBar({
            item1: true,
            item2: false,
            item3: false
        });
    };

    const tabBar2 = () => {
        setTabBar({
            item1: false,
            item2: true,
            item3: false
        });
    };
    const tabBar3 = () => {
        setTabBar({
            item1: false,
            item2: false,
            item3: true
        });
    };

    useEffect(()=>{
        getProduct();
    },[])

    const getProduct = async () => {
        try{
            const response = await axios.get(`product/${name}/${id}`);
            setProduct(response.data );
            console.log('res->',response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <Container>
                {/*{width > 768 &&*/}
                {/*<ProductsTitle title='iPhone 11 128GB' />*/}
                {/*}*/}
                {width > 1000
                    ? <ProductDetailHeader product={product} />
                    : <MobileProductHeader product={product} />
                }
                <TabBarHead>
                    <div
                        onClick={tabBar1}
                        style={
                            {
                                borderBottom: tabBar.item1 ? '4px solid #264796' : '',
                                color: tabBar.item1 ? '#000000' : ''
                            }}>
                        Характеристика
                    </div>
                    <div
                        onClick={tabBar2}
                        style={
                            {
                                borderBottom: tabBar.item2 ? '4px solid #264796' : '',
                                color: tabBar.item2 ? '#000000' : ''
                            }}>
                        Описание
                    </div>
                    {/*<div*/}
                    {/*    onClick={tabBar3}*/}
                    {/*    style={*/}
                    {/*        {*/}
                    {/*            borderBottom: tabBar.item3 ? '4px solid #264796' : '',*/}
                    {/*            color: tabBar.item3 ? '#000000' : ''*/}
                    {/*        }}>Отзывы*/}
                    {/*</div>*/}
                </TabBarHead>
                <div>
                    {tabBar.item1 &&
                    <Characteristic product={product}/>
                    }
                    {tabBar.item2 &&
                    <div>
                      <ProductsTitle title='Описание' />
                      <DescriptionText>{product.addProductData.productComment}</DescriptionText>
                    </div>
                    }
                    {tabBar.item3 &&
                        <Testimonial />
                    }
                </div>
            </Container>
            {width > 768 &&
            <>
              <Cont>
                <Container>
                  <ProductsTitle style={{ marginBottom: '0px' }} title='Похожие товары' />
                  <Slider data={data} />
                </Container>
              </Cont>

              <ReklamaMobileApp />
            </>}

        </>
    );
};

export default ProductDetail;
