function getAverage(scores) {
  let total = 0;

  for (const score of scores) {
    total += score;
  }
  const average = total / scores.length

  return average;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let passed = getGrade(score) !== "F";
  return passed;
}

function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores); 
  let grade = getGrade(studentScore);
  let text;

  if (grade === "F") {
    text = "You failed the course.";
  } else {
    text = "You passed the course.";
  }
  
  return "Class average: " + classAverage + ". Your grade: " + grade + ". " + text;
}