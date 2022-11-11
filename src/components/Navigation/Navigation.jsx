import classnames from "classnames";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectCategories} from "../../store/category/selectors";
import {LoadCategoriesIfNotExists} from "../../store/category/loadCategoriesIfNotExists";
import {NavLink} from "react-router-dom";

function Navigation() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => selectCategories(state));
    useEffect(() => {
        dispatch(LoadCategoriesIfNotExists)
    }, [])

    return (
            <nav className={classnames(styles.navigation)}>
                {categories.map((category) => (
                    <NavLink
                        to={category.id}
                        key={category.id}
                        className={({isActive}) => classnames(
                            {[styles.active]: isActive},
                            styles.select_link
                        )}
                    >
                        {category.title}
                    </NavLink>
                ))}
            </nav>
    );
}

export default Navigation;
