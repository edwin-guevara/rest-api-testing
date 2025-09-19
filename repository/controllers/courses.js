const courseServices = require('../services/courses');
class CourseController {
  getCoursesBySubject(request) {
    const subjectCode = request.subjectCode;
    return JSON.stringify(courseServices.getCoursesBySubject(subjectCode));
  }
  getGenEdCoursesByCategory(request) {
    const category = request.category;
    return JSON.stringify(courseServices.getCoursesByGenEdCategory(category));
  }
}
module.exports = new CourseController();
