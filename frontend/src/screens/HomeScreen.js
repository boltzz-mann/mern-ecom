import React from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

const Homescreen = () => {
    const { data, error, isLoading } = useSWR('/api/products', fetcher)

    if (error) return 'Error'
    if (isLoading) return 'Loading...'

    const products = data ?? []

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen
