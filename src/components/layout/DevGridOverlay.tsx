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
          {Array.from({ length: COLUMN_COUNT }, (_, index) => (
            <div key={index} className="h-full bg-[#FF0000]/10" />
          ))}
        </PageGrid>
      </PageContainer>
    </div>
  )
}
