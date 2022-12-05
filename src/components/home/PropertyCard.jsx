import React from 'react';

const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'CLP',
});

const imageDefault = 'https://media-exp3.licdn.com/dms/image/C561BAQHddZs-FHoAQg/company-background_10000/0/1581376458617?e=2159024400&v=beta&t=sO0482rfuhVftxj5ltfPJKhZYqDn1s5I7rjBefN76c4';

export default function PropertiesGallery(props) {
  const { propertyData } = props;
  const {
    name, price, location, description, imagePath,
  } = propertyData;
  return (
    <div className="propertyCard w-80 m-4 rounded shadow relative overflow-hidden">
      <img src={imagePath || imageDefault} alt={name} className="max-w-full" />
      <div className="items-center p-4 text-center">
        <h3 className="font-bold">{`$${formatter.format(price)}`}</h3>
        <span className="icon-text">
          <span className="icon has-text-warning">
            { /* eslint-disable-next-line react/self-closing-comp */ }
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span>
            {location}
          </span>
        </span>
      </div>

      <div className="property-over p-4">
        <h2 className="m-0 font-bold">Sobre la propiedad:</h2>
        <p>{description}</p>
        <div className="mt-4 flex flex-col justify-center items-center">
          <button className="button is-info" type="button">Ver propiedad</button>
        </div>
      </div>
    </div>
  );
}
