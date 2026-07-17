'use client';

import {SearchIcon} from 'lucide-react';
import {useSearchContext} from 'fumadocs-ui/contexts/search';

export function SearchEntryPoint() {
  const {setOpenSearch}=useSearchContext();
  return <button className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-left text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent" onClick={()=>setOpenSearch(true)} type="button"><SearchIcon className="size-5 text-primary" /><span className="flex-1">Search documentation</span><kbd className="hidden rounded-md border bg-muted px-2 py-1 text-xs sm:inline-block">⌘ K</kbd></button>;
}
