import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import Cookie from 'js-cookie';

/**
 * 登录拦截
 */
class PrivateRoute extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // 设置登陆cookie
        Cookie.set('isAuthenticated', true)
        const { component: Component, ...rest } = this.props;
        const isAuthenticated = JSON.parse(Cookie.get('isAuthenticated'));
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        )
                }
            />
        )
    }
};

export default PrivateRoute;