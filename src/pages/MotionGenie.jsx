import { Button } from "antd"

export default function MotionGenie () {
return(
  <>
  <h1 className="titlemain">Motion Genie</h1>
  <h2>Type of injury</h2>
  <Button type="link" htmlType="button" href="acl">
       ACL
    </Button>
    <Button type="link" htmlType="button" href="http://localhost:3002/meniscus">
     Meniscus Tear
    </Button>
    <Button type="link" htmlType="button" href="http://localhost:3002/ankle">
       Lateral Ankle Sprain
    </Button>
  </>
)
}