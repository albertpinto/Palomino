import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class Bookmarks extends Component {
    render() {
        return (
            <Aux>
                <div class="card">
                    <div class="card-header">
                        <h4>Latest Bookmarks</h4>
                    </div>
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </Aux>
        );
    }
}

export default Bookmarks;
