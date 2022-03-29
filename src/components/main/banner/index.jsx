import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';
import './banner.scss';

export default function Banner() {
  return (
    <Container fluid>
      <Row className='myBanner'>
        <Col md={4} sm={6} className={'myBanner__item g-0'}>
          <div className='h-100'>
          <Card className="h-100 border-0">
              <Card.Img class='h-100' src="images/banner/banner-img-1.png" alt="Card image" />
              <Card.ImgOverlay>
               <div className="d-flex flex-column justify-content-between p-4">
                <h3>Welcome to the <br />
                  space for <br />
                  <span className='fw-bolder'> GROWTH</span> on  <br />
                  <span className='fw-bolder'> INVESTMENTS</span>
                </h3>
                <div>
                  <h3>
                  Business opportunities are like buses, there’s always another one coming
                  </h3>
                  <h3 class="mt-4">
                  - Richard Branson
                  </h3>
                </div>
               </div>
                </Card.ImgOverlay>
            </Card>
          </div>
        </Col>
        <Col md={4} sm={6} className={'myBanner__item'}>
          <div>
            <div className="image-wrapper bg-white">
              <Image fluid src='images/banner/banner-img-2.png'></Image>
            </div>
            <div className="pt-3 pb-4 px-5 bg-white">
              <h3 className='fw-bolder'>
                Investors
              </h3>
              <p className='mt-3 mb-4'>
              Lorem Ipsum Dolor Sit Amet, <br />
              Consectetur Adipiscing Elit, Sed <br /> Do Eiusmod Tempor Incididunt.
            </p>
              <Button variant='success'>Request Access</Button>
            </div>
          </div>
        </Col>
        <Col md={4} sm={6} className={'myBanner__item'}>
          <div class='bg-white pb-4'>
          <img src="images/banner/banner-img-3.png" class="card-img-top" alt="..."/>
            <div class='px-4'>
            <h3 class='fw-bolder my-4'> 
              International <br />
              Oil Companies
            </h3>
            <p>
              Lorem Ipsum Dolor Sit Amet, <br />
              Consectetur Adipiscing Elit, Sed <br /> Do Eiusmod Tempor Incididunt.
            </p>
            <Button variant='outline-secondary' className='mt-5 py-1 fw-bold'>Get Involved</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}