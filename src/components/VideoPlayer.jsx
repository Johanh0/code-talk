import { useState, useEffect } from "react";

// Import API Key
import { API_KEY } from "../utils/api";

const VideoPlayer = () => {
  // State to save the video URL
  const [videoUrl, setVideoUrl] = useState(undefined);

  // useEffect to call the API when the
  useEffect(() => {
    async function fetchMovie() {
      const url =
        "https://api.themoviedb.org/3/movie/9982/videos?language=en-US";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        if (!response.ok) {
          return console.error("We couldn't fecth the movie");
        }

        const data = await response.json();
        setVideoUrl(data.results[0].key);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, []);
  return (
    <section className="video__container">
      <div className="video__container--glass">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&loop=1&mute=1&start=24`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video__container--video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&loop=1&mute=1&start=24`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoPlayer;
