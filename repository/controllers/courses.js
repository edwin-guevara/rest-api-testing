const courseServices = require('../services/courses');
class CourseController {
  async getCoursesBySubject(request) {
    const subjectCode = request.subjectCode;
    const result = await courseServices.getCoursesBySubject(subjectCode);
    return JSON.stringify(result);
  }
  async getGenEdCoursesByCategory(request) {
    const category = request.category;
    const result = await courseServices.getCoursesByGenEdCategory(category);
    return JSON.stringify(result);
  }
}
module.exports = new CourseController();
