
//Use the Jquery to get info from html
$("#submit").click(function () {
    //define variables
    var assignmentsScore;
    var groupProjectsScore;
    var quizzesScore;
    var examsScore;
    var intexScore;
    var finalGrade;
    var letterGrade;

    //get data using Jquery
    assignmentsScore = parseFloat($("#assignments").val());
    groupProjectsScore = parseFloat($("#groupProjects").val());
    quizzesScore = parseFloat($("#quizzes").val());
    examsScore = parseFloat($("#exams").val());
    intexScore = parseFloat($("#intex").val());
    finalGrade = assignmentsScore * 0.5 + groupProjectsScore * 0.1 + quizzesScore * 0.1 + examsScore * 0.2 + intexScore * 0.1;
    Math.round(finalGrade);


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

    //Pop up alert boxes when users enter the number correctly
    if ((finalGrade !== "NaN" || finalGrade != "")) { alert("Your final numeric grade is " + finalGrade + " and your final letter grade is " + letterGrade + ".") }
});

    

