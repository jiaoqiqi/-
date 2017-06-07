const Carousel =  React.createClass({
    render: function () {
        return <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active img-rounded">
                    <div className="my-img">
                        <img src="轮播图/1.jpg" alt=""/>
                        <img src="轮播图/2.jpg" alt=""/>
                        <img src="轮播图/3.jpg" alt=""/>
                        <img src="轮播图/4.jpg" alt=""/>
                    </div>
                </div>
                {this.props.onChange.map((image, index) => {
                    const path = "src/img/";
                    return <div className="item img-rounded" key={index}>
                        <div className="my-img"><img src={path + image} alt="..."/></div>
                    </div>
                })}
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    }

});

Reactdom.render(<Carousel/>.document.getElementById("context"));