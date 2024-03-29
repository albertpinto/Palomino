import React from 'react';
import Aux from '../../hoc/Aux'
const Topnav = (props) => (
    <Aux>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
            <div class="container">
                <a href="index.html" class="navbar-brand">Appalupa</a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav">
                        <li class="nav-item px-2">
                            <a href="index.html" class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a href="Bookmarks.html" class="nav-link">Bookmarks</a>
                        </li>
                        <li class="nav-item px-2">
                            <a href="categories.html" class="nav-link">Categories</a>
                        </li>
                        <li class="nav-item px-2">
                            <a href="users.html" class="nav-link">Users</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown mr-3">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                                <i class="fas fa-user"></i> Welcome Albert
                        </a>
                            <div class="dropdown-menu">
                                <a href="profile.html" class="dropdown-item">
                                    <i class="fas fa-user-circle"></i> Profile
                            </a>
                                <a href="settings.html" class="dropdown-item">
                                    <i class="fas fa-cog"></i> Settings
                            </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="login.html" class="nav-link">
                                <i class="fas fa-user-times"></i> Logout
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </Aux>

);
export default Topnav;