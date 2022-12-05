import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Deserializer } from 'jsonapi-serializer';
import PropertyCard from './PropertyCard';

export default function PropertiesGallery() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYyNjAzODU4NiwiZXhwIjoxNjI2MDQxNTg2fQ.j5Kw7ly-pw54_tqn_bW-NRbtmZVJYVyzO-XocB3vh80';

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/api/properties`, {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          setError(true);
          return [];
        }
        return response.json();
      })
      .then((data) => {
        new Deserializer({ keyForAttribute: 'camelCase' })
          .deserialize(data, (_error, propertiesList) => setProperties(propertiesList));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {error ? (
        <h2>Something went wrong, please try again later</h2>
      ) : (
        <div>
          <h2>Property #1</h2>
          <Link to="/">Home</Link>
          <div className="propertiesGallery flex flex-wrap text-white">
            {properties.length > 0 && properties.map((prop) => (
              <PropertyCard key={prop.id} propertyData={prop} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
