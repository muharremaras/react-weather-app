export default function City() {
    return (
        <div className="container mt-4 bg-light-blue default-border-radius">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="text-white mt-2">Istanbul</h2>
                </div>
                <div className="col-lg-6">
                    <form>
                        <div className="my-2">
                            <input type="text" className="form-control" placeholder="Find a city" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}