import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWorldNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';
import { allNewsSelector } from '../selectors/newsSelectors';

const mapStateToProps = state => ({
  news: allNewsSelector(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadWorldNews
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
