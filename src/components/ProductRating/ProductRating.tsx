import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { SxProps, Theme } from '@mui/material'

export default function ProductRating({
  rating,
  activeClassname = { color: 'gold', fontSize: '13px', marginRight: '3px', zIndex: '20' },
  nonActiveClassname = { color: 'gray', fontSize: '13px', marginRight: '3px', zIndex: '20' }
}: {
  rating: number
  activeClassname?: SxProps<Theme> | undefined
  nonActiveClassname?: SxProps<Theme> | undefined
}) {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }
    return '0%'
  }
  return (
    <div className='flex items-end text-[11px]'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div
              className='absolute left-0 top-0 h-full overflow-hidden'
              style={{
                width: handleWidth(index + 1)
              }}
            >
              <StarOutlinedIcon sx={activeClassname} />
            </div>
            <StarOutlinedIcon sx={nonActiveClassname} />
          </div>
        ))}
    </div>
  )
}
