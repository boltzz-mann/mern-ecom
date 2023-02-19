import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import './index.css'

function App() {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <h1>Welcome To ProShop</h1>
                </Container>
            </main>
            <Footer />
        </>
    )
}

/* 
    <body>
        <root>
            <app>
                <main>
                .
                .
                .
            </app>
        </root>
    </body>
*/

export default App
