import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExercisePage.css';

const ExercisePage = () => {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/admins/exercise/getAll')
            .then(response => response.json())
            .then(data => setExercises(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="exercise-page">
            <h1>Exercise Data</h1>
            <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Instructions</th>
                        <th>Difficulty Level</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(exercise => (
                        <tr key={exercise.id}>
                            <td>{exercise.id}</td>
                            <td>{exercise.title}</td>
                            <td><img className='imagez' src={exercise.imageUrl} alt={exercise.title} /></td>
                            <td>{exercise.instructions}</td>
                            <td>{exercise.difficultyLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExercisePage;
