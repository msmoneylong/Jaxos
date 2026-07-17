import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

export function baseOptions():BaseLayoutProps {
  return {
    nav:{
      title:'JaxOS',
      url:'/',
    },
    links:[
      {text:'Documentation',url:'/docs',active:'nested-url'},
      {text:'Support',url:'/docs/contact-support',active:'url'},
    ],
  };
}
