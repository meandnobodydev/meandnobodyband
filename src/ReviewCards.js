import Carousel from 'react-bootstrap/Carousel';

function ReviewCards() {
  return (
    <div>
    <Carousel id="card-shifter" variant="dark" interval={null}>
      <Carousel.Item>
        <div className="review-card-section"> 
        <div className="review-card">
                <h1>THE CAB</h1>
                <div className="ratio ratio-16x9">
                <iframe src={"https://www.youtube.com/embed/SUAlZM3j1Q8?si=guedltvheVS00GYw"} title="the_cab"></iframe>
                </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="review-card-section">
        <div className="review-card">
        <h1>SOHO</h1>
        <div className="ratio ratio-16x9">
            <iframe src={"https://www.youtube.com/embed/YIniWJGaPOk?si=86ZI1UrYhjxnfPZg"} title="soho"></iframe>
        </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="review-card-section">
        <div className="review-card">
        <h1>THE RED</h1>
        <div className="ratio ratio-16x9">
            <iframe src={"https://www.youtube.com/embed/asFVjf8s2vo?si=ZrS0NOr-NlYvb58d"} title="the_red"></iframe>
        </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ReviewCards;

