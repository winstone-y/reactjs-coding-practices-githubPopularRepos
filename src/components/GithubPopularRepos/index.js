import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILED',
}

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeOption: languageFiltersData[0].id,
    productList: [],
    apiStatus: apiStatusConstants.inProgress,
  }

  componentDidMount() {
    this.getProducts()
  }

  filterOptionChange = id => {
    this.setState({activeOption: id})
  }

  getProducts = async () => {
    const {activeOption} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeOption}`

    const response = await fetch(apiUrl)
    const data = await response.json()

    const formattedData = data.popular_repos.map(productItem => ({
      avatarUrl: productItem.avatar_url,
      forksCount: productItem.forks_count,
      id: productItem.id,
      issuesCount: productItem.issues_count,
      name: productItem.name,
      starsCount: productItem.stars_count,
    }))
    this.setState(
      {
        productList: formattedData,
        apiStatus: apiStatusConstants.success,
      },
      this.getProducts,
    )
  }

  render() {
    const {activeOption, productList, apiStatus} = this.state

    return (
      <div className="github-popular-repos">
        <h1 className="popular-title">Popular</h1>
        <div className="language-filter-items">
          {languageFiltersData.map(filterItem => (
            <LanguageFilterItem
              key={filterItem.id}
              filterItem={filterItem}
              filterOptionChange={this.filterOptionChange}
              activeOption={activeOption}
            />
          ))}
        </div>
        <div>
          {apiStatus === apiStatusConstants.failure && (
            <div>
              <img
                alt="failure view"
                src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              />
            </div>
          )}
          {apiStatus === apiStatusConstants.inProgress && (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          )}
          {apiStatus === apiStatusConstants.success &&
            productList.map(repoItem => (
              <RepositoryItem
                repoItem={repoItem}
                key={repoItem.id}
                apiStatus={apiStatus}
              />
            ))}
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
