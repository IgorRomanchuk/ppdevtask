interface IProps {
  td: number[] | null
  indexTr: number
  itemTr: number
}

const TdTag = ({ td, indexTr, itemTr }: IProps) => {
  return (
    <>
      {td &&
        td.map((itemTd: number, indexTd: number) => {
          const randomNum = Math.random()
          return (
            <td
              key={itemTd}
              style={{
                backgroundColor:
                  indexTd > 0 && indexTr !== 0 && randomNum > 0.5
                    ? 'green'
                    : 'white',
              }}
            >
              <span
                style={{
                  writingMode: indexTd > 0 ? 'vertical-rl' : 'horizontal-tb',
                  transform: 'scale(-1)',
                }}
              >
                {indexTd > 0 && indexTr === 0 && `Заголовок ${itemTd}`}
                {indexTr > 0 && indexTd === 0 && `Заказ ${itemTr}`}
              </span>
            </td>
          )
        })}
    </>
  )
}

export default TdTag
