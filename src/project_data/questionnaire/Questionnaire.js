import {useEffect, useState, useRef} from 'react';

const Questionnaire = () => {

    // State to store form data entered by the user
    const [formData, setFormData] = useState({});

    // State to track whether the form has been submitted
    const [submitted, setSubmitted] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0); // Tracks the current question index

    // Example questions data
    const questions = [
        {
            type: 'text',
            label: 'What is your favorite book?',
            name: 'favoriteBook',
        },
        {
            type: 'radio',
            label: 'What is your favorite season?',
            name: 'favoriteSeason',
            options: ['Spring', 'Summer', 'Autumn', 'Winter'],
        },
        {
            type: 'radio',
            label: 'How satisfied are you with this questionnaire?',
            name: 'satisfaction',
            options: ['1 (Not satisfied)', '2', '3', '4', '5 (Very satisfied)'],
        },
    ];

    // Handle changes in form inputs
    const handleChange = (e) => {
        // Update the specific field in formData while keeping other fields intact
        // setFormData({
        //     ...formData, // Spread operator to retain existing data
        //     [e.target.name]: e.target.value, // Update the field corresponding to the input's name
        // });
        console.log(`${e.target.name}: ${e.target.value}`);
    };

    // Go to the next question
    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1); // Increment the index
        } else {
            console.log('Reached the last question.'); // Log when the end is reached
        }
    };

    const renderQuestion = (question) => {
        switch (question.type) {
            case 'text':
                return (
                    <div className="question">
                        <label htmlFor={question.name}>{question.label}</label>
                        <input
                            type="text"
                            id={question.name}
                            name={question.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                );
            case 'radio':
                return (
                    <div className="question">
                        <p>{question.label}</p>
                        {question.options.map((option, index) => (
                            <div key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={question.name}
                                        value={option}
                                        onChange={handleChange}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload)
        setSubmitted(true); // Mark the form as submitted
        console.log(formData); // Log the form data to the console (can be replaced with an API call)
    };

    return (
        <div className="page">
            <h1 style={{color: '#73AD21'}}>Questionnaire</h1>
            {/* Conditional rendering: show the form if not submitted, otherwise show a thank-you message */}
            {!submitted ? (
                <form>
                {/* Render the current question */}
                {renderQuestion(questions[currentQuestion])}
                {/* Button to go to the next question */}
                <button
                    type="button"
                    onClick={handleNextQuestion}
                    disabled={currentQuestion >= questions.length - 1} // Disable when at the last question
                >
                    Next Question
                </button>
                <br></br>
                <br></br>
                {/* Submit button */}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            ) : (
                // Thank-you message displayed after form submission
                <div className="thank-you">
                    <h2>Thank you for your response!</h2>
                </div>
            )}
        </div>
    );
};

export default Questionnaire;