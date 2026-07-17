import Link from 'next/link';
import {ArrowRightIcon} from 'lucide-react';
import {SearchEntryPoint} from '@/components/search-entry-point';

const quickLinks=[
  ['Getting Started','/docs/getting-started'],
  ['Prompt Packs','/docs/prompt-packs'],
  ['Creative Studio','/docs/creative-studio'],
  ['Content Calendar','/docs/content-calendar'],
  ['Billing and Credits','/docs/billing-and-credits'],
  ['Troubleshooting','/docs/troubleshooting'],
] as const;

export default function HomePage() {
  return (
    <main className="jaxos-home min-h-[calc(100vh-4rem)]">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-32">
        <p className="mb-5 text-sm font-medium tracking-wide text-primary">JaxOS Help Center</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Clear answers for using JaxOS.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Find guidance, product information, and support resources as they become available.</p>
        <div className="mt-10 w-full max-w-2xl">
          <SearchEntryPoint />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map(([label,href])=>(
            <Link className="group rounded-2xl border border-border/70 bg-card/70 p-5 transition-colors hover:bg-accent" href={href} key={href}>
              <span className="flex items-center justify-between font-medium">{label}<ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground">
          Need more help? <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/docs/contact-support">Contact Support</Link>.
        </div>
      </section>
    </main>
  );
}
