import { Button, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card; 

export default function MotionGenie () {
return(
  <>
  <h1 className="titlemain">Motion Genie</h1>
  <h2>Type of injury</h2>


<Link to={'/acl'} >
    <Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<img alt="example" src="https://www.pennmedicine.org/-/media/images/medical%20and%20research%20images/anatomy/posterior_cruciate_ligament_graphic_1.ashx" />}
  >
    <Meta title="ACL" description="Anterior cruciate ligament " />
  </Card>
    </Link>
   <br />


<Link to={'/hamstring'}> 
    <Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<img alt="example" src="https://media.istockphoto.com/id/495100086/video/semitendinosus-leg-muscles-anatomy-anaimation.jpg?s=640x640&k=20&c=0EQzSw8R-za-ySbYZjcS1_y4lPzJ4WHaRfKFQk9nqOw=" />}
  >
    <Meta title="Hamstring Strain" description="Hamstring Strain" />
  </Card>
    </Link>

  <br />

  <Link to={'/ankle'}>
    <Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<img alt="example" src="https://sportsandspinal.net.au/wp-content/uploads/2019/03/Ankle-roll-e1553711689358.jpg" />}
  >
    <Meta title="Lateral Ankle Sprain" description="Lateral Ankle Sprain " />
  </Card>
    </Link>
  </>
)
}