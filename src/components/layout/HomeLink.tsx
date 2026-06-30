import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToTop } from '../../lib/scroll'

type HomeLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'children'> & {
  children: ReactNode
}

export function HomeLink({ onClick, children, ...props }: HomeLinkProps) {
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()

  return (
    <Link
      to="/"
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        e.preventDefault()

        if (pathname === '/' && !hash) {
          scrollToTop()
          return
        }

        navigate('/')
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
