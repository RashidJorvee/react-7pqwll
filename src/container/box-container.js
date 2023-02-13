import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
class BoxCon extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: `${this.props.color}` }}>
        <div handleClick={this.props.loadColor}>Change me</div>
        <button onClick={this.props.handleClick}>click meee</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxCon);
