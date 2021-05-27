import React,{useState} from 'react'
import ReklamaMobileApp from '../../components/reklama-mobile-app';
import Container from '../../components/grid/container';
import ProductsTitle from '../../components/products-title'
import ProductDetailHeader from './product-detail-header';
import Characteristic from './characteristic';
import Testimonial from './testimonial';
import {TabBarHead,DescriptionText} from './style';

const ProductDetail = () => {
    const [tabBar,setTabBar] = useState({
        item1:true,
        item2:false,
        item3:false
    });
    const tabBar1 = () =>{
        setTabBar({
            item1:true,
            item2:false,
            item3:false
        })
    }
    const tabBar2 = () =>{
        setTabBar({
            item1:false,
            item2:true,
            item3:false
        })
    }
    const tabBar3 = () =>{
        setTabBar({
            item1:false,
            item2:false,
            item3:true
        })
    }

    return (
        <>
            <Container>
                <ProductsTitle title="iPhone 11 128GB"/>
                <ProductDetailHeader/>
                
                <TabBarHead>
                    <div 
                        onClick={tabBar1} 
                        style={
                            {borderBottom:tabBar.item1?"4px solid #264796":"",
                            color:tabBar.item1?"#000000":""
                            }}>
                                Характеристика
                    </div>
                    <div 
                        onClick={tabBar2} 
                        style={
                            {borderBottom:tabBar.item2?"4px solid #264796":"",
                            color:tabBar.item2?"#000000":""
                            }}>
                            Описание
                    </div>
                    <div 
                        onClick={tabBar3} 
                        style={
                            {borderBottom:tabBar.item3?"4px solid #264796":"",
                            color:tabBar.item3?"#000000":""
                            }}>Отзывы</div>
                </TabBarHead>
                <div>
                    {tabBar.item1 && 
                        <Characteristic/>
                    }
                    {tabBar.item2 && 
                        <div>
                            <ProductsTitle title="Описание"/>
                            <DescriptionText>Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу. Для этого он оснащен мощным процессором Apple A13 Bionic из 6 ядер, поддерживающим слаженную работу всех комплектующих, а также модулем ОЗУ объемом в 4 ГБ, что предусматривает быстрое переключение между открытыми приложениями и возможность играть в игры. Основная (12;12 Мп) и фронтальная (12 Мп) камеры позволят создавать фотошедевры. Изображение на экране смартфона Apple iPhone 11 диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей. Олеофобное покрытие исключает сильное загрязнение экрана. Корпус смартфона имеет высокую степень пылевлагозащиты (IP68), благодаря чему обеспечивается эффективная и длительная работа устройства. Несъемный аккумулятор емкостью 3110 мА·ч поддерживает беспроводную зарядку, что сделает данный процесс более легким и быстрым.</DescriptionText>
                        </div>
                    }
                    {tabBar.item3 && 
                        <Testimonial/>
                    }
                </div>

            </Container>
            
            <ReklamaMobileApp/>
        </>
    )
}

export default ProductDetail;
