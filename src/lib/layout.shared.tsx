import Image from 'next/image';
import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

export function baseOptions():BaseLayoutProps {
  return {
    nav:{
      title:(
        <span className="flex min-w-0 items-center">
          <Image
            src="/images/brand/JaxOS-Logo-Black.png"
            alt="JaxOS"
            width={917}
            height={225}
            className="h-7 w-auto shrink-0 object-contain dark:hidden sm:h-8"
            priority
          />
          <Image
            src="/images/brand/Jaxos-Logo-White.png"
            alt="JaxOS"
            width={917}
            height={225}
            className="hidden h-7 w-auto shrink-0 object-contain dark:block sm:h-8"
            priority
          />
        </span>
      ),
      url:'/',
    },
    links:[
      {text:'Documentation',url:'/docs',active:'nested-url'},
      {text:'Support',url:'/docs/contact-support',active:'url'},
    ],
  };
}
