export default function Status() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3 default-border-radius bg-light-pink text-center">
          <img src="http://openweathermap.org/img/wn/11d@4x.png" alt="" />
        </div>
        <div className="col-lg-9">
          <div className="px-4">
            <h3>Clear</h3>
            <h3 className="mt-3">Clear Sky</h3>
            <h3 className="mt-3">35°</h3>
            <h5 className="mt-3 text-muted">X: 28.2424</h5>
            <h5 className="mt-3 text-muted">Y: 28.2424</h5>
          </div>
        </div>
      </div>
    </div>
  )
}