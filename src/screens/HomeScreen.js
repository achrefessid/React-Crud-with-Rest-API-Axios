import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PhotoItem from '../components/PhotoItem';
import services from '../services'

const HomeScreen = () => {
    const [photos, setPhotos] = useState(null)

    const fetchPhotos = async () => {
        try {
            const resp = await services.getAllPhotos()
            setPhotos(resp.data)
        }catch (error) {
            alert('Failed to fetch photos.')
        }
    }
    useEffect(() => {
        fetchPhotos()
    }, [])

    if(!photos) {
        return (
        <Container>
        <Col>
            <p>Loading Photos...</p>
        </Col>
    </Container>
        )
    }

    return (
        <Container style={{ padding: 10 }}>
            <Row>
            {photos.slice(0, 10).map(photoItem => (
                <PhotoItem 
                    key={photoItem.id}
                    title={photoItem.title}
                    thumbnailUrl={photoItem.thumbnailUrl}
                />
            ))}
            </Row>
        </Container>
    )
}

export default HomeScreen; 