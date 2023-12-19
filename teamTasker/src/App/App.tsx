import styles from './App.module.scss'
import {Header, Sidebar} from "../shared";
import {useTheme} from "src/App/providers/ThemeProvider/lib/useTheme.ts";
import {UserRegistration} from "src/entities";
import {getState, UserLogin} from "src/entities/User";
import {useAppDispatch} from "src/hooks/storeHooks.ts";
import {useEffect} from "react";
import {userAuth} from "src/entities/User/lib/services/userAuth.ts";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {SingIn} from "src/pages";

function App() {
    const Theme = useTheme();
    const dispatch = useAppDispatch();
    const state = useSelector(getState);


    useEffect(() => {
        dispatch(userAuth())
    }, [dispatch]);

    console.log(state.user);
    console.log(state.user.data.isAuth);
    console.log(state.user.data.username);

  return (
    <div className={`${styles.app} ${Theme.theme}`} >
        <Header />
        <div className={styles.pageContent}>
            <Sidebar />
            <div className={styles.tasks}>Hello</div>
            {state.user.data.isAuth && <div>{state.user.data.username}</div>}
            {/*<UserRegistration />*/}
            {/*<UserLogin />*/}
            <Link to={'/singIn'} >Sing In</Link>
        </div>
    </div>
  )
}

export default App
