import ListAccount from "../../components/listAccount/ListAccount";
import Settings from "../../components/settings/Settings";
import classes from "./manage.module.scss";

const Manage = () => {
    return (
        <Settings />
        // <div className={classes.manage}>
        //     <h3 className={classes.title}>Quản lý hồ sơ:</h3>
        //     <ListAccount />
        //     <button className={classes["btn-finish"]}>Hoàn tất</button>
        // </div>
    );
};

export default Manage;