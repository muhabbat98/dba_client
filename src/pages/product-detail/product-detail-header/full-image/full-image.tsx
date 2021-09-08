import { useEffect, useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/down-arrow2.svg';
import { ReactComponent as Xicon } from '../../../../assets/icons/xicon.svg';
import { Counter, LeftArrow, RightArrow, Wrapper, Xbutton } from './style';

interface FullImageProps {
    currentImage?: any;
    imageList?: any;
    setIsOpen: any;
}

const FullImage: React.FC<FullImageProps> = ({ currentImage, imageList, setIsOpen }) => {
    const [mainImage, setMainImage] = useState<any>(currentImage());
    const [temp, setTemp] = useState([]);
    const [counter,setCounter] = useState();
    useEffect(() => {
        setTemp(mainImage ? imageList.filter((item: any) => item.photoUrl == mainImage)
            : imageList.filter((item: any) => item.photoUrl == currentImage())
        );

    }, [mainImage]);

    useEffect(()=>{
        setCounter(imageList.indexOf(temp[0])+1)
    },[temp])
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const clickHandler = (e: any) => {
        if (e.target.classList.contains('glass-container')) {
            setIsOpen(false);
        }
    };
    const leftButton = () => {
        let k = imageList.indexOf(temp[0]);
        if (k > 0) {
            k--;
        } else {
            k = 0;
        }
        if (k >= 0) {
            setMainImage(imageList[k].photoUrl);
        }

    };
    const rightButton = () => {
        let k = imageList.indexOf(temp[0]);

        if(k==imageList.length-1){
            setMainImage(imageList[0].photoUrl);
            k=0;
        }
        if (k < imageList.length) {
            k++;
        }
        else {
             k = imageList.length - 1;
        }
        if (k < imageList.length) {
            setMainImage(imageList[k].photoUrl);
        }

    };
    return (
        <Wrapper className="glass-container" onClick={clickHandler}>
            <Counter>{counter}/{imageList.length}</Counter>
            <Xbutton onClick={() => setIsOpen(false)}><Xicon /></Xbutton>
            <LeftArrow onClick={leftButton}>
                <ArrowIcon />
            </LeftArrow>
            <img src={mainImage ? mainImage : currentImage()} />
            <RightArrow onClick={rightButton}>
                <ArrowIcon />
            </RightArrow>
        </Wrapper>
    );
};

export default FullImage;