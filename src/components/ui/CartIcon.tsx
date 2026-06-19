interface CartIconProps {
  className?: string
}

export function CartIcon({ className }: CartIconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 5H20.5L19 13H8.5L7 5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M7 5L6 3H3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="18.5" r="1.5" fill="currentColor" />
      <circle cx="17" cy="18.5" r="1.5" fill="currentColor" />
    </svg>
  )
}
