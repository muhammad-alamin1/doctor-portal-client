import React, { Children, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(userContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
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