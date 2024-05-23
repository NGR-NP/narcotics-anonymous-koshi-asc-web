'use client';
import { AppTheme } from '@/lib/utils';
import MoniterIcon from '@/components/Svg/MoniterSvgIcon';
import IconSun from '@/components/Svg/SunSvgIcon';
import IconMoon from '@/components/Svg/MoonSvgIcon';
import { type AppThemesType } from '@/types/theme.types';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

interface ThemeOptionProps {
  value: AppThemesType;
  icon: React.ReactNode;
}
const themeOptions: ThemeOptionProps[] = [
  {
    value: AppTheme.LIGHT,
    icon: <IconSun className="group-hover:rotate-90" />,
  },
  {
    value: AppTheme.DARK,
    icon: <IconMoon className="group-hover:animate-swing" />,
  },
  {
    value: AppTheme.SYSTEM,
    icon: <MoniterIcon className="group-hover:animate-bounce" />,
  },
];
export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  function changeTheme(keys: AppTheme) {
    setTheme(keys);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconSun className="rotate-0 scale-100 dark:-rotate-90 duration-500 dark:scale-0" />
          <IconMoon className="absolute rotate-90 dark:group-hover:animate-swing scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option: ThemeOptionProps) => {
          return (
            <DropdownMenuItem
              onClick={() => changeTheme(option.value)}
              key={option.value}
              className="justify-between"
            >
              {option.icon}
              <DropdownMenuLabel className="capitalize">
                {option.value}
              </DropdownMenuLabel>
              <DropdownMenuCheckboxItem
              
                className="justify-end pr-0"
                checked={theme === option.value}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
