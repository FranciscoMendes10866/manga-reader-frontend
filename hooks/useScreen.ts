import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export const useScreen = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 803) setIsDesktop(true);
    else setIsDesktop(false);
  }, [width]);

  return isDesktop;
};
