import Course from '../../model/GymCourses.js';

// Create a single Course
export const createGymCourse = async (req, res, next) => {
  const newGymCourse = new Course(req.body);
  try {
    const savedCourse = await newGymCourse.save();
    res.status(200).json(savedCourse);
  } catch (error) {
    next(error);
  }
};
// Get all the Courses
export const getGymCourses = async (req, res, next) => {
  try {
    const gymCourses = await Course.find({});
    res.status(200).json(gymCourses);
  } catch (error) {
    next(error);
  }
};
// Get a single Course
export const getGymCourse = async (req, res, next) => {
  try {
    const gymCourse = await Course.findById(req.params.id);
    res.status(200).json(gymCourse);
  } catch (error) {
    next(error);
  }
};
// Updating a single Course
export const updateGymCourse = async (req, res, next) => {
  try {
    const updatedGymCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedGymCourse);
  } catch (error) {
    next(error);
  }
};
// Delete a Course
export const deleteGymCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json('La Classe è stata Eliminata');
  } catch (error) {
    next(error);
  }
};
