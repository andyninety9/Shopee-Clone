import { range } from 'lodash'
import { useEffect, useState } from 'react'

interface Props {
  onChange?: (value: Date) => void
  value?: Date
  errorMessage?: string
}

export default function DateSelect({ onChange, value, errorMessage }: Props) {
  const [date, setDate] = useState({
    date: value?.getDate() || 1,
    month: value?.getMonth() || 0,
    year: value?.getFullYear() || 1990
  })

  useEffect(() => {
    if (value) {
      setDate({
        date: value?.getDate(),
        month: value?.getMonth(),
        year: value?.getFullYear()
      })
    }
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: valueFromSelect, name } = event.target
    const newDate = {
      date: value?.getDate() || date.date,
      month: value?.getMonth() || date.month,
      year: value?.getFullYear() || date.year,
      [name]: Number(valueFromSelect)
    }
    setDate(newDate)
    onChange && onChange(new Date(newDate.year, newDate.month, newDate.date))
  }
  return (
    <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
      <div className='truncate pt-3 text-left capitalize sm:w-[20%] sm:text-right'>Ngày sinh</div>
      <div className='sm:w-[80%] sm:pl-5'>
        <div className='flex justify-between'>
          <select
            value={value?.getDate() || date.date}
            name='date'
            className='h-10 w-[32%] cursor-pointer rounded-sm border border-black/10 px-3 outline-none hover:border-orange'
            onChange={handleChange}
          >
            <option disabled>Ngày</option>
            {range(1, 32).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            value={value?.getMonth() || date.month}
            className='h-10 w-[32%] cursor-pointer rounded-sm border border-black/10 px-3 outline-none hover:border-orange'
            name='month'
            onChange={handleChange}
          >
            <option disabled>Tháng</option>
            {range(1, 13).map((item) => (
              <option value={item} key={item}>
                Tháng {item}
              </option>
            ))}
          </select>
          <select
            value={value?.getFullYear() || date.year}
            className='h-10 w-[32%] cursor-pointer rounded-sm border border-black/10 px-3 outline-none hover:border-orange'
            name='year'
            onChange={handleChange}
          >
            <option disabled>Năm</option>
            {range(1990, 2024).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='mt-1 flex min-h-[1.25rem] w-full items-center justify-end text-sm text-red-600'>
        {errorMessage}
      </div>
    </div>
  )
}
