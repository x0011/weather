/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
import React, {
  ComponentProps, createContext, useContext, useEffect,
} from 'react';

export const ImagePreloader = createContext<string[]>([]);
const { Provider } = ImagePreloader;

export const ImagePreloaderComponent = () => {
  const context = useContext(ImagePreloader);
  useEffect(() => {
    context.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [context]);
  return (null);
};

export const ImageProvider = (props:ComponentProps<typeof Provider>) => {
  const { children } = props;
  return (
    <Provider {...props}>
      <ImagePreloaderComponent />
      {children}
    </Provider>
  );
};
