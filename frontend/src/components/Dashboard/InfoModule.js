import React from 'react';
import Checkbox from 'material-ui/Checkbox';

class InfoModule extends React.Component {

    render() {
      /** cases: 
        this.props.courses is not undefined and options is
        this.props.options is not undefined and courses is
        this.props.credits is not undefined and credits is
       */
      //courses is passing properly
      const courses = this.props.courses
      const options = this.props.options
      
      if (typeof courses !== "undefined") {
        return(
            <div className="module">
              {courses.map(function(course, i) {
                return (
                    <div key={i} className="courseLabel">
                      <Checkbox className="course-title" label={course.title}/>
                      <div className="courseLabel-id">
                        <p className="course-number">{course.id}</p>
                        <p className="course-credit">{course.credits + " credits"}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          )
       } else if (typeof options !== "undefined") {
        return (
            <div className="module">
              {options.map(function(option, i) {
                return (
                    <div key={i} className="courseLabel">
                      <Checkbox className="course-title" label={option.label}/>
                      <div className="courseLabel-id">
                        <p className="course-number">{option.type}</p>
                        <p className="course-credit">{option.credits + " credits"}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          );
        }
    }
}

export default InfoModule;
