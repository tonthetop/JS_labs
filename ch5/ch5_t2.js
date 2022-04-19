function highOrderLoop(value, testFunct, updateFunct, bodyFunct) {
    for (let i = value; testFunct(i); i = updateFunct(i)) {
        bodyFunct(i);
    }
}


function highOrderLoopRecursive(value, testFunct, updateFunct, bodyFunct) {
    if (!testFunct(value)) return;
    bodyFunct(value);
    return highOrderLoopRecursive(updateFunct(value), testFunct, updateFunct, bodyFunct)
}
highOrderLoopRecursive(5, n => n > 0, n => n - 1, console.log)