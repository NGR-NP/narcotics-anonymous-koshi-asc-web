'use client';
import React, { useEffect, useState } from 'react';
import { BarChart, ChevronDown, GlobeIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function NavLinksComp() {
  return <Tabs />;
}

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState<'r' | 'l' | null>(null);

  const handleSetSelected = (val: any) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };
  return (
    <nav
      onMouseLeave={() => handleSetSelected(null)}
      className="relative text-primary hidden font-bold  md:flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t}
            comp={t.Component}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </nav>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected, comp }: any) => {
  const pathname = usePathname();
  return (
    <>
      {comp ? (
        <button
          id={`shift-tab-${tab.id}`}
          onMouseEnter={() => handleSetSelected(tab.id)}
          onClick={() => handleSetSelected(tab.id)}
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors font-semibold ${
            tab.title === pathname
              ? 'bg-primary text-white'
              : selected === tab.id
                ? 'bg-muted text-secondary-foreground'
                : 'text-muted-foreground'
          }`}
        >
          <span>{children}</span>
          <ChevronDown
            className={`transition-transform ${
              selected === tab.id ? 'rotate-180' : ''
            }`}
          />
        </button>
      ) : (
        <Link
          onMouseEnter={() => handleSetSelected(null)}
          href={children == 'home' ? '/' : children.toLocaleLowerCase()}
          className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors font-semibold text-muted-foreground hover:bg-muted hover:text-secondary-foreground capitalize"
        >
          {children}
        </Link>
      )}
    </>
  );
};

const Content = ({ selected, dir }: any) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute z-10 left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-border bg-gradient-to-b from-primary-foreground via-primary-foreground to-muted  p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                {t.Component && <t.Component />}
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: any) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-border bg-secondary"
    />
  );
};
const MettingTypes = () => {
  return (
    <div className="grid grid-cols-2 gap-4 divide-x divide-secondary-foreground">
      <LinkMettingTypes
        icon={GlobeIcon}
        name="Online Metting"
        link="/metting/online"
      />
      <LinkMettingTypes
        icon={BarChart}
        name="Phycical Metting"
        link="/metting"
      />
    </div>
  );
};
interface LinkMettingTypesProp {
  icon: any;
  name: string;
  link: string;
  linkClass?: string;
  iconClass?: string;
  nameClass?: string;
}
const LinkMettingTypes = ({
  icon,
  link,
  name,
  iconClass,
  linkClass,
  nameClass,
}: LinkMettingTypesProp) => {
  const Icon = icon;
  return (
    <Link
      href={link}
      className={cn(
        'flex w-full text-foreground/80 flex-col group items-center justify-center py-2 transition-colors ',
        linkClass,
      )}
    >
      <Icon
        className={cn(
          'mb-2 text-2xl text-indigo-300 group-hover:text-indigo-400',
          iconClass,
        )}
      />
      <span className={cn('text-xs  group-hover:text-foreground', nameClass)}>
        {name}
      </span>
    </Link>
  );
};

const TABS = [
  {
    title: 'home',
    Component: null,
  },
  {
    title: 'Metting',
    Component: MettingTypes,
  },
  {
    title: 'About',
    Component: null,
  },
  {
    title: 'contact',
    Component: null,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
