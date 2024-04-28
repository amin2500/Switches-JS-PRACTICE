let TestScore = 75
let GradeLetter

switch (true) {
    case TestScore >= 90:
        GradeLetter = "A"
        break;
    case TestScore >= 80:
        GradeLetter = "B"
        break;
    case TestScore >= 70:
        GradeLetter = "C"
        break;
    case TestScore >= 60:
        GradeLetter = "D"
        break;

    default:
        TestScore >= 50
        GradeLetter = "F"
        break;
}

console.log(GradeLetter)