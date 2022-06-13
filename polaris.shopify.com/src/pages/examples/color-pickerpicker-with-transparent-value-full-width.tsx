import { ColorPicker } from "@shopify/polaris";
import { useState } from "react";
import { withPolarisExample } from "../../components/PolarisExamplePage";

function ColorPickerWithTransparentValueExample() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  return <ColorPicker fullWidth onChange={setColor} color={color} allowAlpha />;
}

export default withPolarisExample(ColorPickerWithTransparentValueExample);
