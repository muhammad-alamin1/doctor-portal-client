import React, { Children, useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email  ? (
                        Children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    };

    export default PrivateRoute;