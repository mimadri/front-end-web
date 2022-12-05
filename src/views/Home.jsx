import React from 'react';
import { Link } from 'react-router-dom';
import PropertiesGallery from '../components/home/PropertiesGallery';
import '../styles/home.css';

export default function Home() {
  return (
    <div>
      <h2>Welcome to FindHomy</h2>
      <Link to="/property">View the property</Link>
      <PropertiesGallery className="text-white" />
    </div>
  );
}
