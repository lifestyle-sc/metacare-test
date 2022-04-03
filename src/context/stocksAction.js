import instance from '../utils/axios'

export const getLabelAndDataSet = async () => {
  const res = await instance.get("stocks/1")

  const { data } = res.data

  let label = []
  let dataSet = []

  data.forEach((item) => {
    item.month = item.month[0] + item.month[1] + item.month[2]
    label.push(item.month)
    dataSet.push(item.open)
  })

  label = label.reverse()
  dataSet = dataSet.reverse()


  
  return { label, dataSet }
}