import { PageContainer } from './PageContainer'
import { PageGrid } from './PageGrid'
import { useDevGrid } from '../../hooks/useDevGrid'

const COLUMN_COUNT = 6

export function DevGridOverlay() {
  const { visible } = useDevGrid()

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    >
      <PageContainer className="h-full">
        <PageGrid className="h-full">
          {Array.from({ length: COLUMN_COUNT }, (_, index) => {
            const columnNumber = index + 1

            return (
              <div
                key={columnNumber}
                className="relative h-full border border-[#FF0000]/25 bg-[#FF0000]/10"
              >
                <span className="absolute top-2 left-1/2 flex h-7 min-w-7 -translate-x-1/2 items-center justify-center rounded-full bg-[#FF0000] px-1.5 font-sans text-sm font-bold not-italic text-white">
                  {columnNumber}
                </span>
              </div>
            )
          })}
        </PageGrid>
      </PageContainer>
    </div>
  )
}
