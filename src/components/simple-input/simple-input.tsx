import React, { useEffect, useState } from 'react';
import {} from './style';
import { InputElement, InputWrapper, Label } from './style';
import inputLetter, { maskForMoney, onlyNumber } from '../../utils/input-letter';

interface Propses extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  style?: any;
  defaultValue?: any;
  inputValueHandler?: any;
  parentId?: any;
  inputType?: 'string' | 'number'|'moneyFormat';
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

  useEffect(() => {
    inputValueHandler &&
      inputValueHandler(inputType && inputType == 'string' ? string : number);
    if (isReset == true) {
      setNumber('');
      setString('');
    }
  }, [number, string, isReset]);

  const onBlur = (e: any) => {
    setIsFocus(true);
    const val = e.target.value;
    if (val.length > 0) {
      setIsFocus(true);
    } else setIsFocus(false);
  };

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
    }
    else if(inputType=='moneyFormat'){
        return (
            <InputElement
                {...rest}
                onChange={(e: any) => setString(maskForMoney(e.target.value))}
                value={string}
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
