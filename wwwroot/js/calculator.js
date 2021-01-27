var assignmentsScore;
var groupProjectsScore;
var quizzesScore;
var examsScore;
var intexScore;
var finalGrade;
var letterGrade;


$("#submit").click(function () {
    var assignmentsScore;
    var groupProjectsScore;
    var quizzesScore;
    var examsScore;
    var intexScore;
    var finalGrade;
    var letterGrade;

    //get data
    assignmentsScore = parseFloat($("#assignments").val());
    groupProjectsScore = parseFloat($("#groupProjects").val());
    quizzesScore = parseFloat($("#quizzes").val());
    examsScore = parseFloat($("#exams").val());
    intexScore = parseFloat($("#intex").val());
    finalGrade = assignmentsScore * 0.5 + groupProjectsScore * 0.1 + quizzesScore * 0.1 + examsScore * 0.2 + intexScore * 0.1;
    Math.round(finalGrade);

    //Though I set min and max limit in the input, they don't work sometimes. I add the if statements and alert boxes to remind the user again.
    if (assignmentsScore > 100 || assignmentsScore < 0) {
        alert("Please enter a valid number between 0 and 100 for assignmentsScore.")}
    if (groupProjectsScore > 100 || groupProjectsScore < 0) {
        alert("Please enter a valid number between 0 and 100 for groupProjectsScore.")}
    if (quizzesScore > 100 || quizzesScore < 0) {
        alert("Please enter a valid number between 0 and 100 for quizzesScore.")}
    if (examsScore > 100 || examsScore < 0) {
        alert("Please enter a valid number between 0 and 100 for examsScore.")}
    if (intexScore > 100 || intexScore < 0) {
        alert("Please enter a valid number between 0 and 100 for intexScore.")}

    //calculate letter grade
    if (finalGrade >= 94) { letterGrade = "A"; }
    else if (finalGrade >= 90 && finalGrade < 94) { letterGrade = "A-"; }
    else if (finalGrade >= 87 && finalGrade < 90) { letterGrade = "B+"; }
    else if (finalGrade >= 84 && finalGrade < 87) { letterGrade = "B"; }
    else if (finalGrade >= 80 && finalGrade < 84) { letterGrade = "B-"; }
    else if (finalGrade >= 77 && finalGrade < 80) { letterGrade = "C+"; }
    else if (finalGrade >= 74 && finalGrade < 77) { letterGrade = "C"; }
    else if (finalGrade >= 70 && finalGrade < 74) { letterGrade = "C-"; }
    else if (finalGrade >= 67 && finalGrade < 70) { letterGrade = "D+"; }
    else if (finalGrade >= 64 && finalGrade < 67) { letterGrade = "D"; }
    else if (finalGrade >= 60 && finalGrade < 64) { letterGrade = "D-"; }
    else { letterGrade = "E"; }
    alert("Your final numeric grade is " + finalGrade + " and your final letter grade is " + letterGrade + ".")
});
