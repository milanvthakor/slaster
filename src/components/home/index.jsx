import ImageCarousel from "./image-carousel/index.jsx";
import "./index.css";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <h2 className="home-title">Welcome to Slaster!</h2>
        <p className="home-description">
          <b>Slaster</b> seamlessly connects your Google Calendar and Slack,
          letting you set custom status messages, emojis, and Do Not Disturb
          preferences directly from calendar events. It's a secure,{" "}
          <b>no-cost</b> solution that keeps your Slack presence in sync —
          automatically and in real time.
        </p>
      </div>

      <ImageCarousel />
    </div>
  );
}
