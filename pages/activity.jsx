import Image from 'next/image'
import ReactPaginate from 'react-paginate';

import Navbar from "../components/navbar";
import BigTitle from '../components/bigTitle';
import Footer from "../components/footer";
import ActivityContainer from '../components/activityContainer';

import styles from '../styles/pages/activity.module.scss';

function activity() {
    return (
        <div className={styles['main-body']}>

            <Navbar />

            <BigTitle>Our Activity</BigTitle>

            <section className={styles.first}>
                <ActivityContainer />
                <ActivityContainer />
                <ActivityContainer />
            </section>

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                // pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                // onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />

            <Footer />
        </div>
    )
}

export default activity;