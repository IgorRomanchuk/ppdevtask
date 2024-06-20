import { useEffect, useState } from 'react'

import { getTdTable } from '../utils/getTdTable'
import { getTrTable } from '../utils/getTrTable'
import TdTag from './TdTagComponent'

const Table = () => {
  const [tr, setTr] = useState<null | number[]>(null)
  const [td, setTd] = useState<null | number[]>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const promiseGetTr = getTrTable
    const promiseGetTd = getTdTable

    Promise.all([promiseGetTr, promiseGetTd]).then((values) => {
      setLoading(false)
      setTr(values[0])
      setTd(values[1])
    })
  }, [])
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <table>
          <tbody>
            {tr &&
              tr.map((itemTr: number, indexTr: number) => (
                <tr key={itemTr}>
                  <TdTag td={td} indexTr={indexTr} itemTr={itemTr} />
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Table
