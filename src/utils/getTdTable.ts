export const getTdTable = new Promise<number[]>((res, rej) => {
  const arr: number[] = []
  const num = Math.floor(Math.random() * 99) + 2

  setTimeout(() => {
    for (let i = 0; i <= num; i++) {
      arr.push(i)
    }
    res(arr)
  }, 1500)
})
