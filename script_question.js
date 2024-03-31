document.getElementById('submitBtn').addEventListener('click', function() {
    // Retrieve selected options for each question
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');

    // Check if all questions are answered
    if (q1Answer && q2Answer && q3Answer) {
        // Validate answers
        if (q1Answer.value === 'option3' && q2Answer.value === 'option3' && q3Answer.value === 'option2') {
            // All answers are correct
            alert('太厉害了！全都答对了！点击下面的按钮查看真相吧~');
            document.getElementById('unlockBtn').style.display = 'block'; // Show the unlock button
        } else {
            // Incorrect answers
            alert('啊哦，有题答错了，再好好思考下吧！');
        }
    } else {
        alert('懒狗如我是不会写明你答对了几个问题的，这种验证方式行不通哦~');
    }
});

// Event listener for unlocking the next page
document.getElementById('unlockBtn').addEventListener('click', function() {
    // Redirect to another page
    window.location.href = 'truth.html'; // Replace 'next_page.html' with the URL of the next page
});
