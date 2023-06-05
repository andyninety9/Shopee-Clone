import { createSearchParams, useNavigate } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import path from 'src/constants/path'
import { QueryConfig } from 'src/pages/ProductList/ProductList'

interface Props {
  queryConfig: QueryConfig
}

export default function RatingStars({ queryConfig }: Props) {
  const navigate = useNavigate()

  const handleFilterStar = (ratingFilter: number) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        rating_filter: String(ratingFilter)
      }).toString()
    })
  }

  return (
    <ul className='my-3 ml-3'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <li className='py-1' key={index}>
            <div
              className='flex cursor-pointer items-center text-sm'
              onClick={() => handleFilterStar(5 - index)}
              aria-hidden='true'
              tabIndex={0}
              role='button'
            >
              {Array(5)
                .fill(0)
                .map((_, indexStar) => {
                  if (indexStar < 5 - index) {
                    return (
                      <StarOutlinedIcon
                        sx={{
                          color: 'gold',
                          fontSize: '19px',
                          marginRight: '5px'
                        }}
                        key={indexStar}
                      />
                    )
                  }
                  return (
                    <StarOutlineOutlinedIcon
                      sx={{
                        color: 'gray',
                        fontSize: '19px',
                        marginRight: '5px'
                      }}
                      key={indexStar + 1}
                    />
                  )
                })}
              {index !== 0 && <span>Trở lên</span>}
            </div>
          </li>
        ))}
    </ul>
  )
}
