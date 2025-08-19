import BlurCheckBox from "./BlurCheckBox";
import GrayScaleCheckBox from "./GrayScaleCheckBox";
import MiniCheckBox from "./MiniCheckBox";
import PixelCheckBox from "./PixelCheckBox";
import SpinCheckBox from "./SpinCheckBox";
import ZoomCheckBox from "./ZoomCheckBox";

export default function CheckBoxSection() {
  return (
    <section>
      <h2>Settings</h2>
      <BlurCheckBox />
      <ZoomCheckBox />
      <PixelCheckBox />
      <MiniCheckBox />
      <GrayScaleCheckBox />
      <SpinCheckBox />
    </section>
  );
}
