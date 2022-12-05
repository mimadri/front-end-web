import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Property #1</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
