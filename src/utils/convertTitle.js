import changeCase from 'change-case'

const convertTitle = title => changeCase.hyphenCase(title)

export default convertTitle
