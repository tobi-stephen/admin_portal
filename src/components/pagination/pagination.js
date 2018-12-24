import React, {Component} from 'react';
import './pagination.css'
class Pagination extends Component {

    render() {
        return (
            <div className="pagination">
                <div className="pagination-left">Displaying Users 1 - 2 of 2 in total</div>
                <div className="pagination-mid">
                    <i className="fa fa-caret-left"></i>
                    Page 1 of 1
                    <i className="fa fa-caret-right"></i>
                </div>
                <div className="pagination-right">
                    Download: <button>CSV XML JSON</button>
                </div>
            </div>
        )
    }
}

export default Pagination;