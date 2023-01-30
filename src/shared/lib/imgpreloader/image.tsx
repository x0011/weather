/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import React, {
  ImgHTMLAttributes, useContext, useEffect, useState,
} from 'react';
import { ImagePreloader } from '.';

document.addEventListener('readystatechange', () => (document.readyState === 'complete' ? console.log('Сука') : null));

export const Image:React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  // const [saved, setSaved] = useState(false);
  const context = useContext(ImagePreloader);
  const { src } = props;
  useEffect(() => {
    if (src !== undefined && src.length) {
      context.push(src);
      console.log(context);
      // setSaved(true);
    }
    return () => {
      if (src !== undefined && src.length) {
        const index = context.indexOf(src);
        context.splice(index, 1);
      }
    };
  }, [src]);
  return (
    <img {...props} />
  );
};
