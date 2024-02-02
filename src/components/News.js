import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps={
    category: 'general',
    country: 'in',
    pageSize: 9,
    totalResults: 0
  }
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    
  };
  
  
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading : false
    };
  }

  async updatenews(pageNo){
    this.props.setProgress(25)
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=010c5941e11f45a18efcd66c38ecc98b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  this.props.setProgress(50)
  let data = await fetch(url);
  let parsedData = await data.json();
  this.props.setProgress(75)
  this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading: false});
  this.props.setProgress(100)
  }

  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=010c5941e11f45a18efcd66c38ecc98b&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading: false});
    this.setState({page: 1})
    this.updatenews()
  }
  handleNext= async()=>{
  
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=010c5941e11f45a18efcd66c38ecc98b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles });
    // this.setState({
    //   page: this.state.page +1,
    //   loading : false
    // })
    this.setState({page: this.state.page+1})
    this.updatenews()
  }
  handlePevious= async()=>{
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=010c5941e11f45a18efcd66c38ecc98b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles })
    // this.setState({
    //     page: this.state.page-1,
    //     loading : false
    // })
    this.setState({page: this.state.page-1})
    this.updatenews()
  }
   fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=010c5941e11f45a18efcd66c38ecc98b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults ,loading: false});
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center">TODAYS TOP HEADLINES</h2>
          {/* {this.state.loading&&<Loading/>} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults>this.state.articles.length}
          loader={<Loading></Loading>}
        >
          <div className="row">
            {this.state.articles.map((element,index) => {
              return (
                <div className="col-md-4" key={index}>
                  {<NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />}
                </div>
                
              );
            })}
          </div>
           </InfiniteScroll>
        </div>
       
        {/* <div className="d-flex justify-content-around my-5">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePevious}>
            Previous &larr;
          </button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults / 9)}type="button" className="btn btn-primary" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
