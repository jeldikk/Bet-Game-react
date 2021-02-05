import React from 'react'

import ReactPaginate from 'react-paginate'

const Pagination = ({...paginationProps}) => {
    return (
        <div className="pagination-container">
            <ReactPaginate
                {...paginationProps}
                containerClassName="pagination pagination-md justify-content-end"
                pageClassName="page-item"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                pageLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
            />
        </div>
    )
}

export default Pagination
