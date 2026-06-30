import { Dithering } from "@paper-design/shaders-react"

const ShaderBackground = () => {
  return (
    <Dithering
      width={"full"}
      height={"100%"}
      colorBack="#0d0e0f"
      colorFront="#8ec07c"
      shape="warp"
      type="8x8"
      size={2.5}
      speed={1}
    />
  )
}

export default ShaderBackground
