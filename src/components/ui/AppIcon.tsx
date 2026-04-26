'use client';

import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string; // Changed to string to accept dynamic values
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: Readonly<IconProps>) {
    const iconSet = variant === 'solid' ? HeroIconsSolid : HeroIcons;
    const iconEntry = iconSet[name as keyof typeof iconSet] as unknown;
    const IconComponent = (
        (iconEntry as { default?: React.ComponentType<any> })?.default ??
        iconEntry
    ) as React.ComponentType<any> | undefined;
    let interactiveClass = '';
    if (disabled) {
        interactiveClass = 'opacity-50 cursor-not-allowed';
    } else if (onClick) {
        interactiveClass = 'cursor-pointer hover:opacity-80';
    }

    if (!IconComponent || (typeof IconComponent !== 'function' && typeof IconComponent !== 'object')) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${interactiveClass} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 