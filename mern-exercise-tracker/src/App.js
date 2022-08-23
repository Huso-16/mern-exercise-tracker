import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
   * Starts rendering the app
   * @return {ReactNode} main app component
   */
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route exact path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    );
  }
}