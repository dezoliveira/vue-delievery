export const formatValue = (value) => {
  let newValue = value

  if (newValue !== null) {
    newValue = 'R$ ' + parseInt(value).toFixed(2).toString().replace('.', ',')
  } else {
    newValue = 'valor idisponivel no momento'
  }

  return newValue
}