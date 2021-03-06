import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const cardStyle = {
  width: '18rem',
}

const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vogelhaus_Modell_Eduard_4.JPG/2560px-Vogelhaus_Modell_Eduard_4.JPG'

function PropertyCard({ property }) {
  return (
      <Link to={`/properties/${property.id}`}>
        <Card style={cardStyle}>
          <Card.Img variant="top"
            src={property.photo || defaultImg} />
          <Card.Body>
            <Card.Title>{property.title}</Card.Title>
            <Card.Text>{property.address}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
  )
}

export default PropertyCard