import { AppleOutlined, RiseOutlined, ScissorOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./button.scss"

function CreatButton() {


  return (
    <>
      <Button type="primary" className="button">click me! <RiseOutlined /></Button>
      <Button type="dashed" className="button">click me! <ScissorOutlined /></Button>
      <Button type="text" className="button">click me! <AppleOutlined /></Button>
    </>
  )
}

export default CreatButton;
