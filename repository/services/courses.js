const coursesModel = require('../models/courses');
const genedModel = require('../models/gened');
class CourseServices {
  async getCoursesBySubject(subjectCode) {
    return await coursesModel.find(course => course.courseCode.startsWith(subjectCode));
  }
  async getCoursesByGenEdCategory(category) {
    const allCourses = await coursesModel.find();
    const offeredCodes = new Set(allCourses.map(c => c.courseCode));
    return await genedModel.find(gened => gened.category === category && offeredCodes.has(gened.courseCode));
  }
}
module.exports = new CourseServices();
