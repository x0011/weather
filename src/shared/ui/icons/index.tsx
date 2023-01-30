import React from 'react';

interface IIcon {
  className?: string,
}

export const CloseIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M9.12134 11.1213L15 16.9999L17.1213 14.8786L11.2427 8.99993L17.2634 2.97914L15.1421 0.857823L9.12134 6.87861L2.97917 0.73644L0.857847 2.85776L7.00002 8.99993L0.999989 15L3.12131 17.1213L9.12134 11.1213Z" />
    </svg>
  );
};

export const ActionIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="2" r="2" className={className} />
      <circle cx="10" cy="2" r="2" className={className} />
      <circle cx="18" cy="2" r="2" className={className} />
    </svg>
  );
};

export const BackIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H6" className={className} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M12 19L5 12L12 5" className={className} strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
};

export const CheckIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2L7 13L2 8" className={className} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  );
};
