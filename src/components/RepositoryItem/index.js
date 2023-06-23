// Write your code here

const RepositoryItem = props => {
  const {repoItem} = props
  const {name, avatarUrl, forksCount, issuesCount, starsCount} = repoItem

  return (
    <div className="repository-item">
      <img alt="" src={avatarUrl} className="avatar" />
      <h1 className="repo-item-title">{name}</h1>
      <div className="repo-list-item">
        <img
          className="repo-image"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
        />
        <p className="stars-title">{starsCount} stars</p>
      </div>
      <div className="repo-list-item">
        <img
          className="repo-image"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
        />
        <p className="stars-title">{forksCount} forks</p>
      </div>
      <div className="repo-list-item">
        <img
          className="repo-image"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
        />
        <p className="stars-title">{issuesCount} open issues</p>
      </div>
    </div>
  )
}
export default RepositoryItem
