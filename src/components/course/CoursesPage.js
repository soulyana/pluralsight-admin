import React, { PropTypes } from 'react';
import { connect } from 'react-redux'; // connect function creates components that interact with redux: "container components"
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux'; // help save us from manually wrapping our dispatch call
import CourseList from './CourseList'; 

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }


  render() {
    // destructuring for cleaner code
    const { courses } = this.props;
    // debugger;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses = {courses}/>  
      </div>
    );
  }
}
CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
