import React from "react";
import { useParams } from "react-router-dom";
import StudentDetailsForm from "./StudentDetailsForm";
import "./StudentDetails.css";

const StudentDetails = ({
    students,
    determineTrackStatusStudentDetails,
    getBirthdayString,
}) => {
    const { id } = useParams();
    const student = students.find((s) => s.id === id);

    if (!student) {
        return <div>Student not found</div>;
    }


    const calculatePercentage = (current, goal) =>
        ((current / goal) * 100).toFixed(2);
    return (
        <div>
            <section className="student">
                <section>
                    <div key={student.id} className="student-details">
                        <img
                            src={student.profilePhoto}
                            alt={`${student.names.preferredName}'s Profile`}
                        />
                        <ul className="student-details-ul">
                            <li>
                                Name: {student.names.preferredName}{" "}
                                {student.names.middleName}{" "}
                                {student.names.surname}
                            </li>
                            <li>Email: {student.username}</li>
                            <li>Date of Birth: {getBirthdayString(student)}</li>
                            {/* Boolean stuff to determine ontrack/offtrack status */}
                            <li>
                                Status:{" "}
                                {determineTrackStatusStudentDetails([student])[0]
                                }
                                {/* only passing one student in this scenario, it's wrapped in an array to match expected input format of the function (array as arg). The [0] at the end is used to access the first (and in this case, only) result returned by the function, which is the track status of the given student */}
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="scores">
                    <div>
                        <p><strong>Codewars</strong></p>
                        <ul className="student-codewars-ul">
                            <li>
                                Current Total: {student.codewars.current.total}
                            </li>
                            <li>
                                Last Week: {student.codewars.current.lastWeek}
                            </li>
                            <li>Goal: {student.codewars.goal.total}</li>
                            <li>
                                Percent of Goal Achieved:{" "}
                                {calculatePercentage(
                                    student.codewars.current.total,
                                    student.codewars.goal.total
                                )}
                                %
                            </li>
                            <li>Cohort: {student.cohort.cohortCode}</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Scores</strong></p>
                        <ul className="student-codewars-ul">
                            <li>
                                Assignments: {student.cohort.scores.assignments}
                            </li>
                            <li>Projects: {student.cohort.scores.projects}</li>
                            <li>
                                Assessments: {student.cohort.scores.assessments}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Certifications</strong></p>
                        <ul className="student-codewars-ul">
                            <li>
                                Resume:{" "}
                                {student.certifications.resume ? "Yes" : "No"}
                            </li>
                            <li>
                                LinkedIn:{" "}
                                {student.certifications.linkedin ? "Yes" : "No"}
                            </li>
                            <li>
                                Mock Interview:{" "}
                                {student.certifications.mockInterview
                                    ? "Yes"
                                    : "No"}
                            </li>
                            <li>
                                Github:{" "}
                                {student.certifications.github ? "Yes" : "No"}
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <StudentDetailsForm student={student} />
        </div>
    );
};

export default StudentDetails;
