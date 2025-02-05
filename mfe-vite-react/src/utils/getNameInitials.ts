const getNameInitials = (nomeCompleto = '') => {
  const nomes = nomeCompleto.split(' ')
  let initials = ''

  for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i]
    initials += nome[0]?.toUpperCase()
  }

  initials = initials.replace(/[^A-Za-z]/g, '')

  if (initials.length > 2) {
    return initials[0] + initials[initials.length - 1]
  }

  return initials
}

export default getNameInitials
