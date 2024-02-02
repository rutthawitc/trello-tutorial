'use client';

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { AccordionContent } from '@radix-ui/react-accordion';
import { Button } from '@/components/ui/button';

export type Organization = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};
interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: 'Boards',
      icon: <Layout className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Setting',
      icon: <Settings className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/setting`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className='h-4 w-4 mr-2' />,
      href: `/organization/${organization.id}/billing`,
    },
  ];
  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className='border-none'>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition no-underline',
          isActive && !isExpanded && 'bg-neutral-500/10 text-sky-700'
        )}>
        <div className='flex items-center gap-x-2'>
          <div className='w-7 h-7 relative'>
            <Image
              fill
              src={organization.imageUrl}
              alt={organization.name}
              className='rounded-md object-cover'
            />
          </div>
          <span className='font-medium text-sm'>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='pt-1 text-neutral-700'>
        {routes.map((route) => (
          <Button
            key={route.href}
            onClick={() => onClick(route.href)}
            size='sm'
            className={cn(
              'w-full font-normal justify-start pl-10 mb-1',
              pathname === route.href && 'text-sky-700 bg-sky-500/10'
            )}
            variant='ghost'>
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
