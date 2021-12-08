// 当值为0时也是有效值，不应该删除
export const isFalsy = (value) => value === 0 ? false : !value

// 在一个函数里，改变传入的对象本身是不好的
// 这个方法用来清除对象中的空值
export const cleanObject = (object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}