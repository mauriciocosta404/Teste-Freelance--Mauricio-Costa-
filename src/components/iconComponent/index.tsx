// components/IconComponent.tsx

import React from 'react';
import { IconType } from 'react-icons';
import { ServicesType } from '@/types/servicesType';

interface IconComponentProps {
  service: ServicesType;
  size?: number;
}

const IconComponent: React.FC<IconComponentProps> = ({ service, size = 32 }) => {
  const Icon = service.icon as IconType;
  
  return  (
    <div>
      {Icon && <Icon size={size} />}
    </div>
    )
};

export default IconComponent;
