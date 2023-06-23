// Write your code here

const LanguageFilterItem = props => {
  const {filterItem, filterOptionChange, activeOption} = props
  const {id, language} = filterItem

  const isActive = activeOption === id
  const btnActiveClass = isActive ? 'active-button' : ''
  const onbuttonClick = () => {
    filterOptionChange(id)
  }

  return (
    <button
      onClick={onbuttonClick}
      type="button"
      className={`filter - button ${btnActiveClass}`}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
