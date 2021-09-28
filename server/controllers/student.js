import StudentData from "../models/student.js";

export const getStudents = async (request, response) => {
    try {
        const allStudents = await StudentData.find();
        response.status(200).json(allStudents);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const createStudent = async (request, response) => {
    const student = request.body;
    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        response.status(201).json(newStudent);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}
export const deleteStudent = async (request, response) => {
    const id = request.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        response.send('Sucessfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}