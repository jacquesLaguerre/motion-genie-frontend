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


<Link to={'/meniscus'}> 
    <Card
  hoverable
  style={{
    width: 240,
  }}
  cover={<img alt="example" src="https://yorkshirekneeclinic.com/wp-content/uploads/2020/08/Meniscal-Cartilage-Knee-Injury-sports-injuries-Yorkshire-Knee-Clinic.jpg" />}
  >
    <Meta title="Meniscus Tear" description="Meniscus Tear " />
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