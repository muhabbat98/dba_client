import React, {
  useState,
  ReactHTMLElement,
  TextareaHTMLAttributes,
} from 'react';
import { TextareaContainer, TextareaInput, Label } from './style';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: any;
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  children,
  register,
  placeholder,
  label,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <TextareaContainer isFocus={isFocus}>
      <TextareaInput
        name=''
        id=''
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => setInputValue(e.target.value)}
        //placeholder='wefewfwef'
        ref={register}
        placeholder={placeholder}
        {...rest}
      ></TextareaInput>

      <Label isFocus={isFocus} length={inputValue?.length}>
        {label}
      </Label>
    </TextareaContainer>
  );
};

export default Textarea;
