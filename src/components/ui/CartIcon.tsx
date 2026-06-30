import cartIcon from '../../assets/cart icon.svg'

interface CartIconProps {
  className?: string
}

export function CartIcon({ className }: CartIconProps) {
  return (
    <img
      src={cartIcon}
      alt=""
      className={className ?? 'h-[45px] w-[45px]'}
      aria-hidden="true"
    />
  )
}
