import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import CreateExercise from './components/create-exercise.component';
import EditExercise from './components/edit-exercise.component';
import CreateUser from './components/create-user.component';

/**
 * Main App Component is described here.
 */
export default class App extends React.Component {
  /**
   * Starting point of the app
   * @return {React.ReactNode} main app component
   */
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <br />
          <Routes>
            <Route exact path="/" element={<ExerciseList />} />
            <Route path="/edit/:id" element={<EditExercise />} />
            <Route path="/create" element={<CreateExercise />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
