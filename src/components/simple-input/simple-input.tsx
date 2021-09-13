import React, { useEffect, useState } from 'react';
import {} from './style';
import { InputElement, InputWrapper, Label } from './style';
import inputLetter, {
  maskForMoney,
  onlyNumber,
} from '../../utils/input-letter';

interface Propses extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  style?: any;
  defaultValue?: any;
  inputValueHandler?: any;
  parentId?: any;
  inputType?: 'string' | 'number' | 'moneyFormat';
  isReset?: any;
}

const SimpleInput: React.FC<Propses> = ({
  label,
  placeholder,
  defaultValue,
  style,
  inputType,
  inputValueHandler,
  isReset,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [number, setNumber] = useState<any>('');
  const [string, setString] = useState<any>('');
  const [money, setMoney] = useState<any>('');

  const getStates = () => {
    if (inputType && inputType == 'string') return string;
    if (inputType && inputType == 'number') return number;
    if (inputType && inputType == 'moneyFormat') return money;
  };

  useEffect(() => {
    inputValueHandler && inputValueHandler(getStates());
    //   inputValueHandler(inputType && inputType == 'string' ? string : number);
  }, [number, string, money]);

  useEffect(() => {
    if (isReset >= 1) {
      setNumber('');
      setString('');
      setMoney('');
    }
  }, [isReset]);

  console.log('money--', money);

  const onBlur = (e: any) => {
    setIsFocus(true);
    const val = e.target.value;
    if (val.length > 0) {
      setIsFocus(true);
    } else setIsFocus(false);
  };
  console.log('res-->', isReset);
  const inputMaskType = () => {
    if (inputType == 'number') {
      return (
        <InputElement
          {...rest}
          onChange={(e: any) => setNumber(onlyNumber(e.target.value))}
          value={number}
          defaultValue={defaultValue}
          autoFocus={isFocus ? true : false}
          placeholder={!isFocus ? placeholder : ''}
          isfocus={isFocus}
          onBlur={(e) => onBlur(e)}
        />
      );
    } else if (inputType == 'string') {
      return (
        <InputElement
          {...rest}
          onChange={(e: any) => setString(inputLetter(e.target.value))}
          value={string}
          defaultValue={defaultValue}
          autoFocus={isFocus ? true : false}
          placeholder={!isFocus ? placeholder : ''}
          isfocus={isFocus}
          onBlur={(e) => onBlur(e)}
        />
      );
    } else if (inputType == 'moneyFormat') {
      console.log('moneyy--->', money);
      console.log('inputType', inputType);
      return (
        <InputElement
          {...rest}
          onChange={(e: any) => setMoney(maskForMoney(e.target.value))}
          value={money}
          defaultValue={defaultValue}
          autoFocus={isFocus ? true : false}
          placeholder={!isFocus ? placeholder : ''}
          isfocus={isFocus}
          onBlur={(e) => onBlur(e)}
        />
      );
    }
  };

  return (
    <>
      <InputWrapper
        onFocus={() => setIsFocus(true)}
        onBlur={(e) => onBlur(e)}
        style={style}
      >
        {isFocus && <Label isfocus={isFocus}>{label} </Label>}
        {inputType ? (
          inputMaskType()
        ) : (
          <InputElement
            {...rest}
            defaultValue={defaultValue}
            autoFocus={isFocus ? true : false}
            placeholder={!isFocus ? placeholder : ''}
            isfocus={isFocus}
            onBlur={(e) => onBlur(e)}
          />
        )}
      </InputWrapper>
    </>
  );
};
export default SimpleInput;
