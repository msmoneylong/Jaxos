import type {MDXComponents} from 'mdx/types';
import type {ComponentProps} from 'react';
import {Accordion,Accordions} from 'fumadocs-ui/components/accordion';
import {ImageZoom} from 'fumadocs-ui/components/image-zoom';
import {Step,Steps} from 'fumadocs-ui/components/steps';
import {Tab,Tabs} from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export function getMDXComponents(components?:MDXComponents):MDXComponents {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    Step,
    Steps,
    Tab,
    Tabs,
    img:(props)=><ImageZoom {...(props as ComponentProps<typeof ImageZoom>)} />,
    ...components,
  };
}
