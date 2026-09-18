import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import type { IconType } from 'react-icons';

export interface LinkOptions {
  isExternal?: boolean;
  color?: string;
  icon?: IconType;
}

export default function MyLink({
  url,
  text,
  options,
}: {
  url: string;
  text: string;
  options?: LinkOptions;
}) {
  const color = options?.color;
  const Icon = options?.icon;

  const borderClasses = !color
    ? 'border-neutral-500 hover:border-neutral-400'
    : '';

  return (
    <Link
      href={url}
      className="group inline-flex items-center gap-2"
      style={color ? { color } : undefined}
    >
      {Icon && (
        <Icon
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        />
      )}

      <span
        className={`border-b border-dashed transition-colors ${borderClasses}`}
        style={color ? { borderColor: color } : undefined}
      >
        {text}
      </span>

      {options?.isExternal && (
        <ArrowUpRightIcon
          className="
            h-4 w-4 shrink-0
            transition-transform duration-200
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      )}
    </Link>
  );
}