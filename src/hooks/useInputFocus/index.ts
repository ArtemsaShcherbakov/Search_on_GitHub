import { useEffect, useRef, useState } from 'react';
import { InputRefType } from '../../types';

interface IUseInputFocusReturn {
  inputRef: InputRefType;
  isFocused: boolean;
}

const useInputFocus = (): IUseInputFocusReturn => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    const inputElement = inputRef.current;

    if (inputElement) {
      const handleFocus = () => setIsFocused(true);
      const handleBlur = () => setIsFocused(false);

      inputElement.addEventListener('focus', handleFocus);
      inputElement.addEventListener('blur', handleBlur);

      return () => {
        inputElement.removeEventListener('focus', handleFocus);
        inputElement.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return { inputRef, isFocused };
};

export default useInputFocus;
