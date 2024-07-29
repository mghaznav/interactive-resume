import { useState } from 'react';

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
    const [answers, setAnswers] = useState([]);

    return (
        <p>Currently active question</p>
    );
}