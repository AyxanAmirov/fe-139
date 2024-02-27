import "./style.css";

export default function Film({name,imdb,image}) {
  return (
    <>
      <div className="col-lg-2 mt ">
        <div className="film-box ">
          <div className="films">
            <div className="image">
            <img
              src={image}
              alt=""
              className="cover"
            />
            <i class="fa-solid fa-play play-icon"></i>
            </div>
          </div>
          <div className="authors">
            <div className="name">
                <p className="key">Film Name:</p>
                <p className="value">{name}</p>
            </div>
            <div className="name">
                <p className="key">IMDB:</p>
                <p className="value">{imdb}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
