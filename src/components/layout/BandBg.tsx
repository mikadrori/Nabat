import { cn } from '../../lib/cn'

interface BandBgProps {
  viewBox: string
  path: string
  fill: string
  className?: string
}

export function BandBg({ viewBox, path, fill, className }: BandBgProps) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={cn('pointer-events-none absolute top-0 left-0 w-full h-full', className)}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill={fill} />
    </svg>
  )
}
