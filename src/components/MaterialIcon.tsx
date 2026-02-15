import React from 'react';

interface MaterialIconProps {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ icon, className = '', style }) => {
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {icon}
    </span>
  );
};

export default MaterialIcon;
