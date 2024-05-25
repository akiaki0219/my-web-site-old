type StateYouTubePlayer = {
  YouTube: string;
}

function YouTubePlayer({YouTube}: StateYouTubePlayer) {
  return (
    <div className="container">
      <iframe className="d-none d-md-block"
        id="player"
        title="YouTube"
        width="426"
        height="240"
        src={`https://www.youtube.com/embed/${YouTube}`}
        allowFullScreen
      />
      <iframe className="d-block d-md-none"
        id="player"
        title="YouTube"
        width="256"
        height="144"
        src={`https://www.youtube.com/embed/${YouTube}`}
        allowFullScreen  
      />
    </div>
  );
};

export default YouTubePlayer
