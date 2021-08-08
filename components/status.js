export default function Status() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mt-4 default-border-radius bg-light-pink text-center">
          <img src="http://openweathermap.org/img/wn/11d@4x.png" alt="" />
        </div>
        <div className="col-lg-4 mt-4">
          <div className="px-0 px-lg-4">
            <div className="status-item">Clear</div>
            <div className="mt-3 status-item">Clear Sky</div>
            <div className="mt-3 status-item">35°</div>
            <div className="mt-3 status-item-coordinate text-muted">X: 28.2424</div>
            <div className="mt-3 status-item-coordinate text-muted">Y: 28.2424</div>
          </div>
        </div>
        <div className="col-lg-5 mt-4">
          <h3>Last Searched Cities</h3>
          <ul class="last-searched">
            <li className="text-muted mt-2">Istanbul</li>
            <li className="text-muted mt-2">New York</li>
            <li className="text-muted mt-2">Ankara</li>
            <li className="text-muted mt-2">Paris</li>
            <li className="text-muted mt-2">Mecca</li>
          </ul>
        </div>
      </div>
    </div>
  )
}