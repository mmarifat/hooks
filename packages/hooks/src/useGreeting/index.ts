import React from 'react';

export interface GreetingOptions {
  prefix?: string;
  suffix?: string;
  transform?: 'uppercase' | 'capitalize';
}

export default function useGreeting(options?: GreetingOptions): string {
  return React.useMemo(() => {
    const hour = new Date().getHours();
    let greeting;
    if (hour >= 4 && hour <= 11) greeting = 'morning';
    else if (hour >= 12 && hour <= 16) greeting = 'afternoon';
    else if (hour >= 17 && hour <= 20) greeting = 'evening';
    else greeting = 'night';

    switch (options?.transform) {
      case 'capitalize':
        greeting = greeting.charAt(0).toUpperCase() + greeting.slice(1);
        break;
      case 'uppercase':
        greeting = greeting.toUpperCase();
        break;
      default:
        break;
    }
    return `${options?.prefix || ''}${greeting}${options?.suffix || ''}`;
  }, [options, new Date().getHours()]);
}