// Test data for different subjects
const testData = {
    java: {
        title: "Java Programming Test",
        questions: [
            {
                question: "What is the correct way to declare a variable in Java?",
                options: [
                    "int x = 5;",
                    "var x = 5;",
                    "x = 5;",
                    "int x; x = 5;"
                ],
                correct: 0
            },
            {
                question: "Which keyword is used to create a class in Java?",
                options: [
                    "class",
                    "Class",
                    "new",
                    "create"
                ],
                correct: 0
            },
            {
                question: "What is the default value of an int variable in Java?",
                options: [
                    "null",
                    "0",
                    "undefined",
                    "1"
                ],
                correct: 1
            },
            {
                question: "Which method is the entry point of a Java program?",
                options: [
                    "main()",
                    "start()",
                    "init()",
                    "run()"
                ],
                correct: 0
            },
            {
                question: "What is the size of a char in Java?",
                options: [
                    "8 bits",
                    "16 bits",
                    "32 bits",
                    "64 bits"
                ],
                correct: 1
            },
            {
                question: "Which collection class is synchronized in Java?",
                options: [
                    "ArrayList",
                    "LinkedList",
                    "Vector",
                    "HashMap"
                ],
                correct: 2
            },
            {
                question: "What does 'static' keyword mean in Java?",
                options: [
                    "The variable cannot be changed",
                    "The variable belongs to the class, not instances",
                    "The variable is private",
                    "The variable is public"
                ],
                correct: 1
            },
            {
                question: "Which exception is thrown when dividing by zero?",
                options: [
                    "NullPointerException",
                    "ArithmeticException",
                    "NumberFormatException",
                    "IndexOutOfBoundsException"
                ],
                correct: 1
            },
            {
                question: "What is the parent class of all classes in Java?",
                options: [
                    "Object",
                    "Class",
                    "Super",
                    "Parent"
                ],
                correct: 0
            },
            {
                question: "Which keyword is used for inheritance in Java?",
                options: [
                    "extends",
                    "implements",
                    "inherits",
                    "super"
                ],
                correct: 0
            }
        ]
    },
    oops: {
        title: "Object-Oriented Programming Test",
        questions: [
            {
                question: "What are the four main principles of OOP?",
                options: [
                    "Inheritance, Polymorphism, Abstraction, Encapsulation",
                    "Class, Object, Method, Property",
                    "Public, Private, Protected, Static",
                    "Constructor, Destructor, Getter, Setter"
                ],
                correct: 0
            },
            {
                question: "What is encapsulation in OOP?",
                options: [
                    "Hiding internal implementation details",
                    "Creating multiple objects from a class",
                    "Inheriting properties from parent class",
                    "Overriding methods in child class"
                ],
                correct: 0
            },
            {
                question: "What is polymorphism?",
                options: [
                    "One name, multiple forms",
                    "Data hiding",
                    "Code reusability",
                    "Memory management"
                ],
                correct: 0
            },
            {
                question: "What is inheritance?",
                options: [
                    "Creating objects from classes",
                    "Deriving new classes from existing ones",
                    "Hiding data members",
                    "Overloading methods"
                ],
                correct: 1
            },
            {
                question: "What is abstraction?",
                options: [
                    "Showing only essential features",
                    "Creating multiple objects",
                    "Inheriting properties",
                    "Overriding methods"
                ],
                correct: 0
            },
            {
                question: "What is a constructor?",
                options: [
                    "A special method to destroy objects",
                    "A special method to initialize objects",
                    "A regular method in a class",
                    "A static method"
                ],
                correct: 1
            },
            {
                question: "What is method overriding?",
                options: [
                    "Creating multiple methods with same name",
                    "Providing different implementation in child class",
                    "Hiding methods from parent class",
                    "Making methods private"
                ],
                correct: 1
            },
            {
                question: "What is method overloading?",
                options: [
                    "Creating methods with same name but different parameters",
                    "Inheriting methods from parent class",
                    "Overriding methods in child class",
                    "Making methods static"
                ],
                correct: 0
            },
            {
                question: "What is the 'this' keyword used for?",
                options: [
                    "Referring to parent class",
                    "Referring to current object",
                    "Creating new objects",
                    "Destroying objects"
                ],
                correct: 1
            },
            {
                question: "What is a virtual function?",
                options: [
                    "A function that can be overridden",
                    "A static function",
                    "A private function",
                    "A constructor"
                ],
                correct: 0
            }
        ]
    },
    sql: {
        title: "SQL Database Test",
        questions: [
            {
                question: "What does SQL stand for?",
                options: [
                    "Structured Query Language",
                    "Standard Query Language",
                    "Simple Query Language",
                    "System Query Language"
                ],
                correct: 0
            },
            {
                question: "Which SQL command is used to retrieve data?",
                options: [
                    "GET",
                    "SELECT",
                    "RETRIEVE",
                    "FETCH"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of the WHERE clause?",
                options: [
                    "To group data",
                    "To filter data",
                    "To sort data",
                    "To join tables"
                ],
                correct: 1
            },
            {
                question: "Which keyword is used to sort results?",
                options: [
                    "SORT",
                    "ORDER BY",
                    "GROUP BY",
                    "ARRANGE"
                ],
                correct: 1
            },
            {
                question: "What does JOIN do in SQL?",
                options: [
                    "Combines rows from multiple tables",
                    "Creates new tables",
                    "Deletes data",
                    "Updates data"
                ],
                correct: 0
            },
            {
                question: "Which SQL function counts rows?",
                options: [
                    "SUM()",
                    "COUNT()",
                    "TOTAL()",
                    "NUMBER()"
                ],
                correct: 1
            },
            {
                question: "What is a primary key?",
                options: [
                    "A foreign key",
                    "A unique identifier for each row",
                    "A column that can be null",
                    "A temporary key"
                ],
                correct: 1
            },
            {
                question: "Which command is used to update data?",
                options: [
                    "MODIFY",
                    "UPDATE",
                    "CHANGE",
                    "ALTER"
                ],
                correct: 1
            },
            {
                question: "What does GROUP BY do?",
                options: [
                    "Sorts data",
                    "Groups rows with same values",
                    "Joins tables",
                    "Filters data"
                ],
                correct: 1
            },
            {
                question: "Which keyword prevents duplicate rows?",
                options: [
                    "UNIQUE",
                    "DISTINCT",
                    "DIFFERENT",
                    "SINGLE"
                ],
                correct: 1
            }
        ]
    },
    javaCoding: {
        title: "Java Coding Test",
        questions: [
            {
                question: "What is the output of the following code?\\nint x = 5;\\nSystem.out.println(x++ + ++x);",
                options: [
                    "11",
                    "12",
                    "10",
                    "13"
                ],
                correct: 1
            },
            {
                question: "What does this print?\\nString s = null;\\nSystem.out.println(s + 1);",
                options: [
                    "null",
                    "1",
                    "null1",
                    "NullPointerException"
                ],
                correct: 2
            },
            {
                question: "Predict the output:\\nint[] a = {1,2,3};\\nSystem.out.println(a.length);",
                options: ["0","2","3","Runtime Error"],
                correct: 2
            },
            {
                question: "What is printed?\\nfor(int i=0;i<3;i++){\\n  if(i==1) continue;\\n  System.out.print(i);\\n}",
                options: ["012","02","01","12"],
                correct: 1
            },
            {
                question: "Output?\\nclass A{static{System.out.print(\"S\");} {System.out.print(\"I\");} A(){System.out.print(\"C\");}}\\npublic class T{public static void main(String[] args){new A(); new A();}}",
                options: ["SIC","SICIC","ICSI","SSICIC"],
                correct: 1
            },
            {
                question: "What is the result?\\nString a=\"abc\"; String b=\"ab\"+\"c\"; System.out.println(a==b);",
                options: ["true","false","Compiler error","Depends on JVM"],
                correct: 0
            },
            {
                question: "Time complexity of searching in HashMap (average case)?",
                options: ["O(1)","O(log n)","O(n)","O(n log n)"],
                correct: 0
            },
            {
                question: "What happens?\\ntry{throw new RuntimeException();} finally {System.out.print(\"F\");}",
                options: ["Prints F then program continues","Prints F then rethrows","Does not print","Compile-time error"],
                correct: 1
            },
            {
                question: "Output?\\nInteger x = 128, y = 128; System.out.println(x==y);",
                options: ["true","false","Compiler error","NullPointerException"],
                correct: 1
            },
            {
                question: "Which will compile?",
                options: [
                    "int _=5;",
                    "int 1a=5;",
                    "int class=5;",
                    "int a-b=5;"
                ],
                correct: 0
            }
        ]
    }
};

// Global variables
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let testStartTime = null;
let testScores = JSON.parse(localStorage.getItem('testScores')) || { java: 0, oops: 0, sql: 0, javaCoding: 0 };
let totalTestsCompleted = parseInt(localStorage.getItem('totalTestsCompleted')) || 0;
let totalTimeSpent = parseInt(localStorage.getItem('totalTimeSpent')) || 0;
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || null;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateUserUI();
    if (!userProfile) {
        const next = encodeURIComponent('index.html');
        window.location.href = `login.html?next=${next}`;
        return;
    }
    // Fetch latest results for this user from server and update dashboard
    if (userProfile && userProfile.email) {
        loadServerResults(userProfile.email);
    }
});

// Start a test
function startTest(testType) {
    if (!userProfile) {
        const next = encodeURIComponent('index.html');
        window.location.href = `login.html?next=${next}`;
        return;
    }
    currentTest = testType;
    currentQuestionIndex = 0;
    userAnswers = [];
    testStartTime = Date.now();
    
    document.getElementById('test-title').textContent = testData[testType].title;
    document.getElementById('total-questions').textContent = testData[testType].questions.length;
    
    showQuestion();
    document.getElementById('test-modal').style.display = 'block';
}

// Show current question
function showQuestion() {
    const question = testData[currentTest].questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / testData[currentTest].questions.length) * 100;
    document.getElementById('test-progress-bar').style.width = progress + '%';
    
    // Update buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').style.display = currentQuestionIndex === testData[currentTest].questions.length - 1 ? 'none' : 'inline-flex';
    document.getElementById('submit-btn').style.display = currentQuestionIndex === testData[currentTest].questions.length - 1 ? 'inline-flex' : 'none';
    
    // Restore previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const selectedOption = document.querySelector(`input[value="${userAnswers[currentQuestionIndex]}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
            selectedOption.parentElement.classList.add('selected');
        }
    }
    
    // Add event listeners to options
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', function() {
            // Remove selected class from all options
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            // Add selected class to current option
            this.parentElement.classList.add('selected');
            // Store answer
            userAnswers[currentQuestionIndex] = parseInt(this.value);
        });
    });
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < testData[currentTest].questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Submit test
async function submitTest() {
    const testTime = Math.round((Date.now() - testStartTime) / 1000 / 60); // in minutes
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === testData[currentTest].questions[index].correct
    ).length;
    
    const score = correctAnswers;
    testScores[currentTest] = score;
    totalTestsCompleted++;
    totalTimeSpent += testTime;
    
    // Save to localStorage
    localStorage.setItem('testScores', JSON.stringify(testScores));
    localStorage.setItem('totalTestsCompleted', totalTestsCompleted.toString());
    localStorage.setItem('totalTimeSpent', totalTimeSpent.toString());

    // Save to server (best-effort)
    try {
        if (userProfile && userProfile.email) {
            // 1) Record attempt history
            await saveAttempt({
                email: userProfile.email,
                testType: currentTest,
                score,
                total: testData[currentTest].questions.length,
                timeTaken: testTime,
                answers: userAnswers,
            });

            // 2) Upsert latest result snapshot
            await saveResult({
                email: userProfile.email,
                testType: currentTest,
                score,
                total: testData[currentTest].questions.length,
                timeTaken: testTime,
                answers: userAnswers,
            });
        }
    } catch (e) {
        console.warn('Failed to save result to server', e);
    }
    
    // Show results
    showResults(correctAnswers, userAnswers.length - correctAnswers, testTime);
}

// Show test results
function showResults(correct, incorrect, timeTaken) {
    document.getElementById('final-score').textContent = correct;
    document.getElementById('correct-answers').textContent = correct;
    document.getElementById('incorrect-answers').textContent = incorrect;
    document.getElementById('time-taken').textContent = timeTaken + ' min';
    
    // Score message
    const percentage = (correct / testData[currentTest].questions.length) * 100;
    let message = '';
    if (percentage >= 90) message = 'Excellent!';
    else if (percentage >= 80) message = 'Great Job!';
    else if (percentage >= 70) message = 'Good Work!';
    else if (percentage >= 60) message = 'Not Bad!';
    else message = 'Keep Practicing!';
    
    document.getElementById('score-message').textContent = message;
    // Build weak terms from incorrect answers for targeted recommendations
    const weakTerms = testData[currentTest].questions
        .map((q, idx) => ({ q, idx }))
        .filter(({ q, idx }) => userAnswers[idx] !== q.correct)
        .map(({ q }) => (q.question || '').replace(/\s+/g, ' ').trim())
        .slice(0, 3);
    // Recommendations (async)
    renderRecommendations(currentTest, percentage, weakTerms);
    
    // Close test modal and show results
    document.getElementById('test-modal').style.display = 'none';
    document.getElementById('results-modal').style.display = 'block';
    
    // Update dashboard
    updateDashboard();
}

// Close test modal
function closeTest() {
    document.getElementById('test-modal').style.display = 'none';
}

// Close results modal
function closeResults() {
    document.getElementById('results-modal').style.display = 'none';
}

// Retake test
function retakeTest() {
    closeResults();
    startTest(currentTest);
}

// Update dashboard with current progress
function updateDashboard() {
    // Update progress bars and scores
    Object.keys(testScores).forEach(testType => {
        const progress = (testScores[testType] / 10) * 100;
        const bar = document.getElementById(`${testType}-progress`);
        const scoreEl = document.getElementById(`${testType}-score`);
        if (bar) bar.style.width = progress + '%';
        if (scoreEl) scoreEl.textContent = `${testScores[testType]}/10`;
    });
    
    // Update overall progress
    const totalScore = Object.values(testScores).reduce((sum, score) => sum + score, 0);
    const overallProgress = (totalScore / 40) * 100;
    document.getElementById('overall-progress').textContent = Math.round(overallProgress) + '%';
    
    // Update statistics
    document.getElementById('total-tests').textContent = totalTestsCompleted;
    document.getElementById('time-spent').textContent = totalTimeSpent + ' min';
    
    const averageScore = totalTestsCompleted > 0 ? (totalScore / (totalTestsCompleted * 10)) * 100 : 0;
    document.getElementById('average-score').textContent = Math.round(averageScore) + '%';
    
    // Calculate streak (simplified - based on total tests)
    const streak = Math.min(totalTestsCompleted, 7); // Max 7 days
    document.getElementById('streak').textContent = streak + ' days';
}

// Load progress from localStorage
function loadProgress() {
    const savedScores = localStorage.getItem('testScores');
    if (savedScores) {
        testScores = { java: 0, oops: 0, sql: 0, javaCoding: 0, ...JSON.parse(savedScores) };
    }
    
    const savedTests = localStorage.getItem('totalTestsCompleted');
    if (savedTests) {
        totalTestsCompleted = parseInt(savedTests);
    }
    
    const savedTime = localStorage.getItem('totalTimeSpent');
    if (savedTime) {
        totalTimeSpent = parseInt(savedTime);
    }
    
    updateDashboard();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const testModal = document.getElementById('test-modal');
    const resultsModal = document.getElementById('results-modal');
    
    if (event.target === testModal) {
        closeTest();
    }
    if (event.target === resultsModal) {
        closeResults();
    }
} // Added closing bracket here

function updateUserUI() {
    const el = document.getElementById('user-name');
    if (el && userProfile && userProfile.name) {
        el.textContent = `Welcome, ${userProfile.name}!`;
    }
}

// Persist result to backend
async function saveResult(payload) {
    const res = await fetch('http://localhost:3000/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Failed to save result');
    return res.json();
}

// Persist attempt to backend
async function saveAttempt(payload) {
    const res = await fetch('http://localhost:3000/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Failed to save attempt');
    return res.json();
}

// Load latest results for a user and merge into dashboard
async function loadServerResults(email) {
    try {
        const url = `http://localhost:3000/results?email=${encodeURIComponent(email)}`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        const results = (data && data.results) || {};
        // Merge scores from server
        ['java','oops','sql','javaCoding'].forEach(t => {
            if (results[t] && typeof results[t].score === 'number') {
                testScores[t] = results[t].score;
            }
        });
        localStorage.setItem('testScores', JSON.stringify(testScores));
        updateDashboard();
    } catch (e) {
        console.warn('Failed to load results from server', e);
    }
}

// Async recommendations renderer
async function renderRecommendations(testType, percent, weakTerms) {
    const recList = document.getElementById('recommendations-list');
    if (!recList) return;
    recList.innerHTML = '';
    const loading = document.createElement('li');
    loading.textContent = 'Loading recommendations...';
    recList.appendChild(loading);

    let items = [];
    try {
        if (window.RecommendService && typeof window.RecommendService.getRecommendations === 'function') {
            items = await window.RecommendService.getRecommendations(testType, percent, weakTerms);
        }
    } catch (e) {
        console.warn('Recommendation service failed', e);
    }

    // Fallback to curated docs only if empty
    if (!items || items.length === 0) {
        const cfg = window.REC_CONFIG || {};
        const tier = percent < 60 ? 'low' : percent < 80 ? 'mid' : 'high';
        const docs = (cfg.docs && cfg.docs[testType] && cfg.docs[testType][tier]) || [];
        items = docs.map(d => ({ title: d.title, url: d.url, type: 'doc' }));
        // Also provide topic-focused search links for the user's weak terms
        if (Array.isArray(weakTerms) && weakTerms.length) {
            const topical = weakTerms.slice(0, 2).map(term => ({
                title: `Learn: ${term}`,
                url: `https://www.google.com/search?q=${encodeURIComponent(term + ' Java tutorial')}`,
                type: 'doc'
            }));
            items = topical.concat(items);
        }
    }

    recList.innerHTML = '';
    items.forEach(r => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = r.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = r.title;
        li.appendChild(a);
        recList.appendChild(li);
    });
}
