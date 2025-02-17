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
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    if (inputRef.current) {
      inputRef.current.addEventListener('focus', handleFocus);
      inputRef.current.addEventListener('blur', handleBlur);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('focus', handleFocus);
        inputRef.current.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return { inputRef, isFocused };
};

export default useInputFocus;
